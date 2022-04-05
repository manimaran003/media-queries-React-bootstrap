import { render ,screen} from "@testing-library/react";
import TrainRedux from "../ReduxApp/TrainRedux";
import App from "../../../App"
import {Provider} from 'react-redux'
import store from '../ReduxFIles/Reducers/Index'
import MainApiReducerComponent from "../APIUseReducer/MainApiReducerComponent";
describe("asynchronous api call test cases",()=>{
    test("use effect get api call",async()=>{
        //Arrange
        render(<Provider store={store}><TrainRedux/></Provider>)
        //Act
        //....noting logic
        //Assert
        const HtmlElement=screen.getByText("hai")
        expect(HtmlElement).toBeInTheDocument()
        // const HtmlElement=await screen.findAllByRole("")
        // expect(HtmlElement).not.toHaveLength(0)
    })
})