import React, { Component } from 'react';
import "./Todo.css"

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

    handleComplete = (evt) => {
        this.props.completeTodo(this.props.id)
    }
    render() {
        let result;
        if (this.state.isEditting) {
            result = (
                <div className="Todo">
                    <form className= "Todo-edit-form" onSubmit = { this.handleUpdate }>
                        <input 
                            type = "text"
                            value = { this.state.task } 
                            name = "task"
                            onChange = { this.handleChange }
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        }else {
            result = (
                <div className = "Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick = {this.handleComplete}>
                        {this.props.task}
                    </li>
                    <div className='Todo-buttons'>
                        <button onClick = {this.handleEdit}>
                            {/* <i calss='fas fa-pen'/> */}Edit
                        </button>
                        <button onClick = {this.handleRemove}>
                            {/* <i calss='fas fa-trash'/> */}X
                        </button>
                    </div>
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