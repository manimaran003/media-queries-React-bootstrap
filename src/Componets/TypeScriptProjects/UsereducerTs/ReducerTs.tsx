import DataModel from './DataModel';
export const initState: DataModel[] = [];
export type ACTIONTYPE =
  | { type: 'GETAPI'; payload: DataModel[] }
  | { type: 'POSTAPI'; payload: DataModel[] }
  | { type: 'PUTAPI'; payload: DataModel[] }
  | { type: 'DELETEAPI'; payload: DataModel[] };

const ReducerTs = (action: ACTIONTYPE, state = initState) => {
  switch (action.type) {
    case 'GETAPI':
      console.log('haiReducerget=>', ...action.payload);
      return [...action.payload];
    case 'POSTAPI':
      return [...state, action.payload];
    case 'PUTAPI':
      return [...state, action.payload];
    case 'DELETEAPI':
      return [...state, action.payload];
  }
};
export default ReducerTs;
