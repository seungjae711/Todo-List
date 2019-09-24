import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isEditting: false, 
            task: this.props.task
        };
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id)
    }

    handleEdit = () => {
        this.setState({
            isEditting: !this.state.isEditting
        })
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleUpdate = (evt) => {
        evt.preventDefault();
        //take new task data and pass up to parent
        this.props.updateTodo(this.props.id,  this.state.task);
        this.setState({ isEditting: false });

    }

    render() {
        let result;
        if (this.state.isEditting) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            value={this.state.task} 
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        }else {
            result = (
                <div>
                    <button onClick = {this.handleEdit}>Edit</button>
                    <button onClick = {this.handleRemove}>X</button>
                    <li>{this.props.task}</li>
                </div>
            )
        }
        return (
            <div>
                {result}
            </div>
        );
    }
}

export default Todo;