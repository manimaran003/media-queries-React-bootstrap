import React from 'react'
import TodoModel from './TodoModel'

const ListTodo:React.FC<{data:TodoModel;pass:(id:string)=>void}>=(props)=>{
    const handleClick=():void=>{
        props.pass(props.data.id)
    }
    return (
        <>
        <li onClick={handleClick}>{props.data.text}</li>
        </>
    )
}

export default ListTodo