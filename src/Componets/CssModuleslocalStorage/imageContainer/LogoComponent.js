import React from "react";
import CardComponent from "./CardComponent";
const data=[
  {id:1,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAACurq6mpqZNTU3v7++ysrLk5OTV1dW4uLhgYGDS0tL4+PjNzc36+vqDg4OXl5dmZmY8PDx0dHSKiorAwMBISEjl5eUaGhrExMQ3NzePj49CQkKhoaFra2vz8/N5eXkpKSlYWFgSEhIjIyObm5swMDAnJycNDQ3tN1RYAAAEiUlEQVR4nO2c13rbMAxGRct7yXsmXkndvv8TNoqnbMpyY4A/y+8/17nAiWgOAGQUEUIIIYQQQgghhBBCCCGEEEIIIYQQQggRpx4n5TE6CD0aTZMSo+NQopKYI7/QoahQWRkTtOHIXBHgKG2ZDA10POIss4KmhQ5ImvKNoKmgI5Kl/XkraNAhydL+uBPso2OS5f4LmhI6JlHufoOh/QxvZ9GUATooSeoWwbAG6R+bITooSWxj1IzQUQlSsQmaNjosQYY2wSU6KkHsnxAdlSQjm2BQCQybYFAbtnnoY9Q6z9TQQYliEZyjYxKldi8YWPKiGvY0GlnWijo6Imn6Wb/BGh2QOJOMYIg54MWVXzOoU/2Ji+EqrFXwzHGUTuLwfoBH4k2yLAWX3A6RaadRikuN1lNDsdt53+z2s9mi3E/ijv+zT3uc7K/my1X1ccj15fXs+s2w0XUU60+oWlK9g9xZpW49DafriKeb8Uu9+pmIu/E2789TPCyXtjePAja97GhtrR7+dUoVJJLHe2HE5fPva9qz5oRvWUyhRlkqd/OFlUmvMa8mlrpTDu9orzONp2P+R5posyO5M8zr7L1YOZp6gsZ8eJDut1U7BZmh/aKdriC+dGqts8gyhArG+oLYtd9arxYHuUt14bcD+kWPt6Iy9JCCLsYoNiX+3Gb0JTpQwXHogrbeNGHAZSlrNVcUdIPGm7ZgGSxoqXUKgz5V5OXJxIDXhrUFJ2hB9dUeXprqKQviMzQDZUN4fb+rLLhAC0YdZUN8T3Rxivs18CXi4rLDS7yh/aJoXxzlK0CPvQd0BT1o5lsrG+Jr3do7GrSf+mLxG+2nWE47gD4ZflHSNcRvSrWT+R707itvaTz4hsqG0ES+E0N0yTDSL6qh/Wwt96EZaif04Uka9QMwPJOovi9N0II51yTl+EAL6ueD8U17TzUXvgD+rol2nxB+mCo26x0AV3/Vj08eFGZaxTG+CPojttUNt2DD6P6NIGnQ3frKSe8UcEpRfaqBj1P9RgV4usaBIfjRmn5xgK8D3bw5+CEabFuU9gHqyAqouHWjuMCVg7X7Tc7AUhou1osDO9TaP3OmaBJMF5+zYZoC6feeujTEDFT1HtoLoPYT7dz+FageKXeGqIuW6vmoE7Dra87mGlwvpuoF2Qt7mKCj23nQUpSbBQMoqF5I/AabddPu906BCjpIfsMTp8rX8Q36Ezo4JuJr+sqXgYFr4QnlqxfwqyWR8hED+6DCiUlxoD/Gi9dbNFOnvrzfqjZOPWg0PaLVmuHHGE1Rmk/xF0suqOzAN2irDAoJDfz7SVnkH8nAN5lmEb8Khb9keYvwOQpZOMxDtL0dfxHYhuRs489KmEGujQh/ATEHqQYNfItwLo8eqNsm1da0/bUBWtfGvYfJD2+/YEpe2XRQug17nJcwH3j6Gzxh3b8l1tV7bf13oF8WKqZ7O1I/H6zdjdt8a9m3nYyV2rVjUpBoqS2vXtQa+pCVeY7xqDkp90fVp77Ieh4vk6RX/X/0CCGEEEIIIYQQQgghhBBCCCGEEEIIIQTDXw1EQTJa684CAAAAAElFTkSuQmCC",},
  {id:2,src:"https://icons-for-free.com/iconfiles/png/512/logo+microsoft+microsoft+logo+technology+windows+icon-1320167831167856453.png",},
  {id:3,src:"data:image/png;base64,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",},
]
const LogoComponent=()=>{
    return(
        <>
         <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
                </div>
                <div className='col-sm-8 col-md-12 col-lg-12 col-xl-8'>
                  <img src='https://app.clockmonk.com/app/static/media/worktime.b9ee74e5.png' style={{width:"100%"}}/>
                  <div className="container">
                      <div className=" col-12 text-center">
                        <h1>Simple Time Tracking Tool</h1>
                        <p className="logoText">Manage your remote teams</p>
                        <p className="logoText">effectively ! </p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-2'>
                </div>
              </div>
              <div className="row top">
               <div className="col-12">
                 <div className="container-fluid">
                   <div className="row">
                     {
                       data.map((item)=>{
                         return (
                           <div className="col-sm-3 col-md-3 col-lg-4 col-xl-4">
                             <CardComponent items={item}/>
                          </div>
                         )
                       })
                     }
                   </div>
                 </div>
               </div>
              </div>
            </div>
        </>
    )
}

export default LogoComponent