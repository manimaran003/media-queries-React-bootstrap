import { render ,screen,fireEvent} from "@testing-library/react";
import TrainRedux from "../ReduxApp/TrainRedux";
import App from "../../../App"
import {Provider} from 'react-redux'
import store from '../ReduxFIles/Reducers/Index'
import LoginPage from '../../CssModuleslocalStorage/LoginComponent/LoginPage'
import userEvent from "@testing-library/user-event";
// describe("asynchronous api call test cases",()=>{
//     test("use effect get api call",async()=>{
//         //Arrange
//         render(<Provider store={store}><TrainRedux/></Provider>)
//         //Act
//         //....noting logic
//         //Assert
//         const HtmlElement=screen.getByText("hai")
//         expect(HtmlElement).toBeInTheDocument()
//         // const HtmlElement=await screen.findAllByRole("")
//         // expect(HtmlElement).not.toHaveLength(0)
//     })
// })


//test cases for login page

describe("login form input box test cases",()=>{
    test("render email the input",()=>{
        //Assert
        render(<Provider store={store}><LoginPage/></Provider>)

        //Arrange
        const inputEl=document.getElementById("exampleFormControlInput1")
        expect(inputEl).toBeInTheDocument()
        expect(inputEl).toHaveAttribute("type","email")
        // fireEvent.change(inputEl,{target:{value:"test@gmail.com"}})
        // const msg=screen.getByText(/test@gmail.com/i)
        // expect(msg).toBeInTheDocument()
        // const inputEls=document.getElementById("exampleFormControlInput2")
        // expect(inputEls).toBeInTheDocument()
        // expect(inputEls).toHaveAttribute("type","password")
        fireEvent.click(screen.getByRole('button'))
        expect(handleSubmit).toHaveBeenCalled()
    })

    test("pass a vaid email type and check not want show error msg",()=>{
        //Arrange
        render(<Provider store={store}><LoginPage/></Provider>)
        //Assert
        const element=document.getElementById("exampleFormControlInput1")
        userEvent.type(element,"test@gmail.com")
        expect(element).toHaveValue("test@gmail.com")
        expect(screen.queryByTestId("err1")).not.toBeInTheDocument()
    })

    test("render the password",()=>{
        //Assert
        render(<Provider store={store}><LoginPage/></Provider>)

        //Arrange
        const inputEl=document.getElementById("exampleFormControlInput2")
        expect(inputEl).toBeInTheDocument()
        expect(inputEl).toHaveAttribute("type","password")
    })
    test("pass a vaid password type and check not want show error msg",()=>{
        //Arrange
        render(<Provider store={store}><LoginPage/></Provider>)
        //Assert
        const element=document.getElementById("exampleFormControlInput1")
        userEvent.type(element,"pass@123")
        expect(element).toHaveValue("pass@123")
        expect(screen.queryByTestId("err2")).not.toBeInTheDocument()
    })


    // test("pass a invalid email type",()=>{
    //     //arrange
    //     render(<Provider store={store}><LoginPage/></Provider>)
    //     //assert
    //     const element=document.getElementById("exampleFormControlInput1")
    //     userEvent.type(element,"test")
    //     expect(element).toHaveValue("test")
    //     expect(document.getElementById("err1")).toBeInTheDocument()
    //     expect(document.getElementById("err1").textContent).toEqual("please input your username!")
    // })
})
