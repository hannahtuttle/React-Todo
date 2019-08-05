// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import ToDo from './Todo.js'
import ToDoForm from './TodoForm.js'

class TodoList extends React.Component {
    constructor(){
        super();

    }
    render(){
        return(<div>
            <h2>Here is my personal List</h2>
            {this.props.taskList.map(item => 
              <ToDo key={item.id} item={item}
            //    toggleItem={props.toggleItem}
               />  
            )}
            {/* <ToDoForm /> */}
           
        </div>)}
    
}

export default TodoList;