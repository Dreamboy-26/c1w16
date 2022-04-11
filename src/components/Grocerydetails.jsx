import React from "react"
import data from '../data.json'
import CartButton from "./CartButton"


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
           {data.map((item)=>{

             return  <div className="innerContainer">
                 <h3>{item.discount}</h3>
                   <img src={item.imgURL} alt="" />
                   <p>{item.title}</p>
                   <div className="price">
                       <p>{item.sellingPrice}</p>
                       <p>M.R.P :</p>
                       <p className="mrp">{item.mrp}</p>
                   </div>
                  <CartButton></CartButton>
               </div>
               
           })}
        </div>
        </>
    )
}
export default GroceryDetails