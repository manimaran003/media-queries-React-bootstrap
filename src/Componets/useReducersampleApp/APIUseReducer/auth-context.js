import React from 'react'
const AuthContext = React.createContext({
    search: () => { },
    add: () => { },
    delete: () => { },
    edit: () => { }
})

export default AuthContext
