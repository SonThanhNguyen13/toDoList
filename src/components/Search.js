import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onClear = this.onClear.bind(this)
    }
    onChange(event) {
        this.setState({ search: event.target.value }, () => {
            this.props.onChange(this.state.search)
        });

    }
    onClear() {
        console.log(this.props.search)
        this.setState({
            search: '',
        })
    }
    render() {
        return (
            <div className="Search">
                <div class='SearchItems'>
                    <input type="search" name="search" id="input" class="form-control" onChange={this.onChange} value={this.state.search} />
                    <button class="btn" onClick={this.onClear}><i class="fa fa-trash" ></i> Clear</button>
                </div>
            </div>)
    }
}
export default Search