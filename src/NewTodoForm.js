import React, { Component } from 'react';
import uuid from "uuid/v4"

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.createNewTodo({...this.state, id: uuid()})
        this.setState({
            task: ""
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                    type="text" 
                    id="task" 
                    name="task" 
                    value={this.state.task} 
                    onChange = {this.handleChange}
                    placeholder="task"/>
                <button>Add New Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;