import React from 'react'

class ToDoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            item: ''
        }
        
    }
     submitTask = event => {
        event.preventDefault()
        this.props.addTask(this.state.item)
    }

     handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
        // console.log(this.state)
     }

    render(){
        return(<>
        <form onSubmit={this.submitTask}>
            <input
            type='text'
            value={this.item}
            name='item'
            onChange={this.handleChange}
            />
            <button>Add</button>
            <button onClick={this.props.clearTask}>Clear Completed</button>
        </form>
            </>
        )
    }
}

export default ToDoForm

