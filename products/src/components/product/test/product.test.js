import React from 'react'
import ReactDOM from 'react-dom'
import Product from '../index'

it("renders without crashing",()=>{
    const div = document.createElement("tbody")
    ReactDOM.render(<Product product={15,'test',2}/>,div)
})

