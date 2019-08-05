import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js'
import ToDoForm from './components/TodoComponents/TodoForm.js'

import './ToDo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
  this.state = {
    list:[{
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false,
    }]}
  }

  addTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      list: [...this.state.list, newTask]})
  }

  toggleTask = id => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id===id){
          return {
            ...item, 
            completed: !item.completed
          }
        }else{
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <p>{this.state.task}</p> */}
        <TodoList taskList={this.state.list} toggleTask={this.toggleTask}/>
        <ToDoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
