import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

class MultipleSelect extends Component {

	constructor(props) {
		super(props)

		this.state = {
			data: []
		}
	}

	componentDidMount() {
		const { data } = this.props

		this.setState({ data }, this.callBack)

	}

	componentWillReceiveProps(newProps) {
		this.setState({ data: newProps.data })
	}

	handleChange(index) {
		this.state.data[index].checked = !this.state.data[index].checked
		this.setState(this.state, this.callBack)
	}

	callBack() {
		const { onChange } = this.props
		const output = []

		for ( let i in this.state.data ) {
			if ( !this.state.data[i].checked )continue;
				output.push(this.state.data[i].value)
		}

		onChange(output)
	}

	render() {

		const { data } = this.state
		const {
			id = '',
			formatter = item => `${item.label}`
		} = this.props

		return <div className="multiple-select">
			<div className="multiple-select__box">
				{ data.map((item, i) => 
					<div key={ i } className={ item.checked ? "multiple-select__item checked" : "multiple-select__item"}>
						<input type="checkbox" id={`${id}-${i}`} checked={ item.checked } onChange={ this.handleChange.bind(this, i) } /> <label htmlFor={`${id}-${i}`}> <span dangerouslySetInnerHTML={{ __html: formatter(item) }}></span></label>
					</div>
				) }
			</div>
		</div>
	}
}

MultipleSelect.propTypes = {
	id: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	formatter: PropTypes.func,
}

export default MultipleSelect