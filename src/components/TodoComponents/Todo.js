import React from 'react'

class ToDo extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
        <>
        <p>{this.props.item.task}</p>
        </>
        )
    }
}

export default ToDo