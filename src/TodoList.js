import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from  "./NewTodoForm"
import "./TodoList.css"

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
    }

    handleComplete = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })    
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <Todo 
                key = {todo.id} 
                id = {todo.id } 
                task = {todo.task} 
                completed = {todo.completed}
                removeTodo = {this.handleRemove} 
                updateTodo = {this.handleUpdate}
                completeTodo = {this.handleComplete}
            />
        ))

        // const todos = this.state.todos.map(todo => {
        //     return <Todo task = {todo.task} />
        // })

        return (
            <div className="TodoList">
                <h1>
                    Todo List! <span>A simple React Todo List App.</span>
                </h1>
 
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createNewTodo={this.handleCreateTodo}/>
            </div>
        );
    }
}

export default TodoList;