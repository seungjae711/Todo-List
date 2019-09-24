import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from  "./NewTodoForm"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: []};
    }


    handleCreateTodo = (NewTodo) => {
        this.setState({
            todos: [...this.state.todos, NewTodo]
        })
    } 

    handleRemove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    handleUpdate = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask};
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })
        console.log(this.state.todos)
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo 
                key = {todo.id} 
                id = {todo.id } 
                task = {todo.task} 
                removeTodo = {this.handleRemove} 
                updateTodo = {this.handleUpdate}
            />
        ))

        // const todos = this.state.todos.map(todo => {
        //     return <Todo task = {todo.task} />
        // })


        return (
            <div>
                <h1>Todo List</h1>
                <NewTodoForm createNewTodo={this.handleCreateTodo}/>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;