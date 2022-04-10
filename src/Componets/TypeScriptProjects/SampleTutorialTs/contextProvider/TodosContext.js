import Context from '@mui/base/TabsUnstyled/TabsContext'
import React from 'react'
import TodoModel from '../TodoModel.ts'

//create type alias for use many times
type TodoContextObj={
    items:TodoModel[];
    addTodo:(text:string)=>void;
    removeTodo:(id:string)=>void;
}

const context=React.createContext<TodoContextObj>({
    items:[],
    addTodo:(text:string)=>{},
    removeTodo:(id:string)=>{}
})

const TodosContextProvider:React.FC=(props)=>{
    const contextValue:TodoContextObj={
        items:TodoModel,
        addTodo:addTodoHandler,
        removeTodo:removeTodoHandler
    }
    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>
}