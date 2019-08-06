import React from 'react';
import styled from 'styled-components'

import TodoList from './components/TodoComponents/TodoList.js'
import ToDoForm from './components/TodoComponents/TodoForm.js'
import SearchBar from './components/search.js'

import './Todo.css'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #e5d1b8;
  width: 50%;
  padding-top: 3%;
  padding-bottom: 5%;
`

const StyledTitle = styled.h2`
    background-color: #708a81;
    width: 80%;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
`


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
    console.log('working toggle function')
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

  clearTask = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <StyledContainer>
        <StyledTitle>Welcome to your Todo App!</StyledTitle>
        <SearchBar/>
        {/* <p>{this.state.task}</p> */}
        <TodoList taskList={this.state.list} toggleTask={this.toggleTask}/>
        <ToDoForm addTask={this.addTask} clearTask={this.clearTask}/>
      </StyledContainer>
    );
  }
}

export default App;
