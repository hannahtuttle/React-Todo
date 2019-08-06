import React from 'react'


class ToDoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            item: ''
        }
        
    }
    // componentDidMount() {
    //     const rememberList = localStorage.getItem('item');
    //     this.setState({ rememberList });
    //   }

     submitTask = event => {
        event.preventDefault()
        this.props.addTask(this.state.item)
        // localStorage.setItem('item',this.state.item)
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
        </form>
            <button onClick={this.props.clearTask}>Clear Completed</button>
            </>
        )
    }
}

export default ToDoForm

