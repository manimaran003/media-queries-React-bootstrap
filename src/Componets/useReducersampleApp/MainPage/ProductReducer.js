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
        const editItem = state.filter(item => item.id === action.payload.id)
        editItem.id = action.payload.id
        editItem.ProductName = action.payload.ProductName
        editItem.ProductPrice = action.payload.ProductPrice
        const newState = state.filter((itm) => itm.id !== action.payload.id)
        console.log("edited reducer", newState)
        return [
            ...newState,
            editItem
        ]

    }
    return state
}
export default ProductReducers