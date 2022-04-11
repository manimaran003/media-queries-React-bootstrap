import Todos from "./Todos";
import { Box } from '@mui/material'
import TodoModel from './TodoModel'
import NewTodo from './NewTodo'
import { useState } from "react";

const MainTodo = () => {
    const [todo,setTodo] = useState<TodoModel[]>([])
    const addTodoHandler = (todoText: string): void => {
        let newTodo = new TodoModel(todoText)
        setTodo((prev)=> {
            return prev.concat(newTodo)
        })
    }

    const deleteHandler=(id:string): void=>{
        setTodo((prev)=>prev.filter((item)=>item.id!==id))
    }
    console.log(todo)
    return (
        <>
            <Box sx={{ mt: 8 }}>
                <NewTodo handler={addTodoHandler} />
                <Todos items={todo} del={deleteHandler} />
            </Box >
        </>
    )
}
export default MainTodo

