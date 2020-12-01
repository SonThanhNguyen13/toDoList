import React, { Component } from 'react'

class ClosedItems extends Component {
    render() {
        return (
        <div className="AddItem">
            
            <div class="panel panel-info">
                  <div class="panel-heading">
                        <h3 class="panel-title">Close item</h3>
                  </div>
                  <div class="panel-body">
                        
                        <input type="text" name="name" id="input" class="form-control" />
                        
                        <select name="SelectType" id="inputSelectType" class="form-control" required="required">
                            <option value="">High</option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                        </select>
                        
                        
                        <button type="button" class="btn btn-primary ButtonSubmit">Submit</button>
                        
                        <button type="button" class="btn btn-primary ButtonCancel">Cancel</button>
                        
                        
                  </div>
            </div>
            
        </div>)
    }
}
export default ClosedItems