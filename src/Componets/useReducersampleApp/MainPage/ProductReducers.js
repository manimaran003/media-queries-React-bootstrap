const ProductReducers = (state, action) => {
    if (action.type === "ADDCART") {
        return [
            ...state,
            action.payload
        ]
    }
    if (action.type === "REMOVECART") {
        return state.filter((itm) => itm.id !== action.payload)
    }
    if (action.type === "EDITCART") {
        let editItem=state.findIndex((itm)=>itm.id===action.payload.id)
        state.splice(editItem,1,action.payload)
        return state

    }
    return state
}
export default ProductReducers