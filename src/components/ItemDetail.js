import React, { Component } from 'react'

class ItemDetail extends Component {
    constructor(props) {
        super (props);
        this.state = {
            id :  this.props.task.id,
            status : 'open',
            edit : true,
            search : ''
        }
        this.callEdit = this.callEdit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }
    callEdit() {
        if(this.state.edit){
            this.setState({
                level : 'high',
                edit : false
            })
        }
        else{
            this.setState({
                edit: true
            })
        }
    }
    onChange(event){
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }
    onSave(event){
        this.props.onSave(this.state)
    }

    onDelete() {
        this.props.onDelete(this.props.task.id, this.props.search)
    }
    onUpdate(){
        this.props.onUpdate(this.state)
        this.callEdit()
    }
    render() {
        var { task, index } = this.props
        // Show items
        if(this.state.edit){
        return (
            <tr className="ItemDetail">

                <td>{index}</td>
                <td>{task.name}</td>
                <td>
                    <span class={task.level === 'high' ? 'label label-danger' : task.level === 'low' ? 'lalbel label-success' : 'label label-warning'}>{task.level === 'high' ? 'High' : task.level === 'low' ? 'Low' : 'Medium'}</span>
                </td>
                <td>
                    <button type="button" class="btn btn-warning" onClick={this.callEdit}>Edit</button>
                    <button type="button" class="btn btn-danger" onClick={this.onDelete}>Delete</button>
                </td>

            </tr >)
        }
        // Show edit items
        return (
            <tr className="EditItem">
                <td></td>
                <td><input type="text" name="name" id="input" class="form-control"  onChange={this.onChange} /></td>
                <td>
                    <select name="level" id="inputSelectType" class="form-control" required="required" onChange={this.onChange}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </td>
                <td>
                    <button type="button" class="btn btn-default" onClick={this.callEdit}>Cancel</button>
                    <button type="button" class="btn btn-success" onClick={this.onUpdate}>Save</button>
                </td>
            </tr>
        )
    }
}
export default ItemDetail