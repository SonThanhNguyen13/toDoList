import React, { Component } from 'react'

class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: ''
        }
        this.onSort = this.onSort.bind(this)
    }
    onSort(event) {
        this.setState({ sort: event.target.value }, () => this.props.onSort(this.state.sort))
    }
    render() {
        return (
            <div className="Sort">

                <select name="sort" id="input" class="form-control" required="required" onChange={this.onSort}>
                    <option value="desc">Desc</option>
                    <option value="asc"> Asc</option>
                </select>

            </div>)
    }
}
export default Sort