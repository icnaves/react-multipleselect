react-multipleselect2
==============

### Installation
```sh
$ npm install react-multipleselect2 --save
```
*react-multipleselect2 requires React v.16.0.0 and up*

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
import MultipleSelect from 'react-multipleselect2'
import 'react-multipleselect2/build/styles.css'

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
                formatter={ item => `item.label` }
            />
        </div>)
    }
}

```

License
----

MIT