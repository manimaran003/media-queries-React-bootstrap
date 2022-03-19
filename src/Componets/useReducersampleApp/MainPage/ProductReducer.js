const ProductReducers = (state, action) => {
    if (action.type === "ADDCART") {
        console.log(action)
        return [
            ...state,
            action.payload
        ]
    }
    if (action.type === "REMOVECART") {
        console.log("removed", action)
        return state.filter((itm) => itm.id !== action.payload)
    }
    return state
}
export default ProductReducers