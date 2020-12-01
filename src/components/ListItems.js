import React, { Component } from 'react'
import ItemDetail from './ItemDetail'
import Additem from './AddItem'

class ListItems extends Component {
    constructor(props) {
        super (props)
        this.state = {
            search : '',
            isEdit: false,
        }
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }
    onSave(data){
        this.props.onSave(data)
    }
    onDelete(data){
        this.props.onDelete(data)
        
    }
    onUpdate(data){
        this.props.onUpdate(data)
    }
    render() {
        // Get values from taks
        var tasks = this.props.tasks
        // Loop
        var elementsTasks = tasks.map((task, index) => {
            if (task.status === 'open'){
            return <ItemDetail key={index} index={index} task={task} onDelete={this.onDelete} onUpdate={this.onUpdate}></ItemDetail>
            }
            return null

        }
        )
        return (
            <div className="ListItem">

                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title">Panel title</h3>
                    </div>
                    <div class="panel-body">

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th style={{ "width": "5%" }}>#</th>
                                    <th style={{ "width": "61%", 'textAlign': 'center' }}>Name</th>
                                    <th style={{ 'textAlign': 'center' }}>Level</th>
                                    <th style={{ 'textAlign': 'center' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {elementsTasks}
                                    <Additem onSave = {this.onSave}></Additem>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>)
    }
}
export default ListItems