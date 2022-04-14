import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './RouterComponent/MainRouter'
//import store from './Componets/useReducersampleApp/ReduxFIles/Reducers/Index'
//import { Provider, useDispatch } from 'react-redux'
// export const AppWrapper = () => {
//   return (
//     <Provider store={store}> // Set context
//       <App /> // Now App has access to context
//     </Provider>
//   )
// }
const App = () => {
  //const dispatch=useDispatch()
  return (
    <BrowserRouter>
    <MainRouter/>
    </BrowserRouter>
  )
}
export default App;
