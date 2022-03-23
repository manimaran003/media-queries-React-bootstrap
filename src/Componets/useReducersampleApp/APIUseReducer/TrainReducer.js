const TrainReducer=(state,action)=>{
    console.log(state)
    switch(action.type){
        case "GETAPICALL":
            return [
                ...state,
                ...action.payload
            ]
        case "FILTERCALL":
        default:
            return state
    }
}

export default TrainReducer