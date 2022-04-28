const TrainReducer = (state, action) => {
  switch (action.type) {
    case 'GETAPICALL':
      return [...action.payload];
    case 'ADDAPI':
      return [...state, action.payload];
    // case "EDITAPI":
    //     let editItemIndex = state.findIndex((item) => item.id === action.payload.id)
    //     state.splice(editItemIndex, 1, action.payload)
    //     console.log("refreshed reducer=>",state)
    //     return state
    case 'DELETEAPI':
      return state.filter((item) => item.id !== action.payload);
    case 'SEARCHAPI':
      let value = state.filter((item) =>
        item.from.toLowerCase().startsWith(action.payload.toLowerCase())
      );
      if (value.length > 0) {
        return value;
      }
      return state;
    default:
      return state;
  }
};
export default TrainReducer;
