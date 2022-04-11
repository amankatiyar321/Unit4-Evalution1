import React from "react"
import data from '../data.json'
import './grocrey.css'

const GroceryDetails = (props)=>{
console.log(data)

    return(
        <>
        <h1 class="van">Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
           {
               data.map((ele)=>(
                   <div class="first">
                       <div class="aman">{ele.discount}</div>
                       <img src={ele.imgURL} alt="" />
                       <span>{ele.title}</span>
                       <div class="sam">
                       <h3 class="ban">{ele.mrp}</h3>
                       <h3>{ele.sellingPrice}</h3>
                       </div>
                       <button class="btn">Add to cart</button>

                   </div>
               ))
           }
        
        </div>
        </>
    )
}
export default GroceryDetails