import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
class AddItem extends Component {
    constructor(props) {
        super (props)
        this.state = {
            id : uuidv4(),
            name : '',
            level : 'high',
            status : 'open',
        }
        this.onSave = this.onSave.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onClear = this.onClear.bind(this)
    }
    onChange(event){
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }
    onClear() {
        this.setState({
            name : '',
            level : 'high',
            status : 'open'
        })
    }
    onSave(event){
        this.props.onSave(this.state)
        this.onClear()
    }
    render() {
        return (
                
                <tr className="AddItem">
                    
                    <td></td>
                    <td><input type="text" name="name" id="input" class="form-control" onChange={this.onChange} value={this.state.name}/></td>
                    <td>
                        <select name="level" id="inputSelectType" class="form-control" required="required" onChange={this.onChange} value={this.state.level}>
                            <option value="high">High</option>
                            <option value="medium" selected='selected'>Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </td>
                    <td>
                        <button type="button" class="btn btn-default" onClick={this.onClear}>Cancel</button>
                        <button type="button" class="btn btn-success" onClick={this.onSave}>Save</button>
                    </td>
                </tr>
        )
    }
}
export default AddItem
