import React from 'react'


const AuthContext=React.createContext({
        delete: ()=>{},
        edit:()=>{},
        add:()=>{},
        products:[]
})

export default AuthContext