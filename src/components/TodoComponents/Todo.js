import React from 'react'

class ToDo extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
        <div className={this.props.item.completed ? 'completed': ''} 
        onClick={() => this.props.toggleTask(this.props.item.id)}>
        <p>{this.props.item.task}</p>
        </div>
        )
    }
}

export default ToDo

//}