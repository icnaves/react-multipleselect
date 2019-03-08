react-multipleselect
==============

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url]

### Installation
```sh
$ npm install react-multipleselect --save
```
*react-multipleselect requires React v.16.0.0 and up*

### Options

| Param | Type | Require | Description |
| ------ | ------ | ------ | ------ |
| **id** | string | *require* | Some unique id, Ex: `"multiselect"` |
| **data** | array | *require* | Array of objects |
| **onChange** | func | *require* | On change handler, receives an array of selected items. Ex: `["cat 1", "cat 2"]`
| **className** | string | *optional* | Additional className |
| **formatter** | func | *optional* | Function receives `item` arg and should return formatted string |

# Usage

```JavaScript

import React, { Component } from 'react'
import MultipleSelect from 'react-multipleselect'
import 'react-multipleselect/build/styles.css'

export default class Home extends Component {
    render() {
        const data = [{
          label: 'Category 1',
          value: 'some',
          checked: true
        },{
          label: 'Category 2',
          value: 'name',
          checked: false
        },{
          label: 'Category 3',
          value: 'my',
          checked: true
        }]

        return (<div>
            <MultipleSelect
                id="multi-select"
                data={ data }
                onChange={ values => console.log(values) }
                className="select-box"
                formatter={ item => item.label }
            />
        </div>)
    }
}
```

Demo
----
Check demo [here.][demo-url]

License
----

MIT

[npm-image]: https://img.shields.io/npm/v/react-multipleselect2.svg
[npm-url]: https://npmjs.org/package/react-multipleselect2
[downloads-image]: http://img.shields.io/npm/dt/react-multipleselect2.svg
[downloads-url]: https://npmjs.org/package/react-multipleselect2
[demo-url]: http://sevanci.online/react-multipleselect2/