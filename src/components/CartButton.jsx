import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    let [count,setCount]=useState(0)

    const handleInc=()=>{
      setCount(count+1)
    }
    const handleDec=()=>{
      
      setCount(count-1)
    }

    const handleClick=()=>{
      
  
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  
 

  <div className="countButton">
      <button onClick={handleDec}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={handleInc} >+</button>
  </div>
 <button className="cart" onClick={handleClick}>Add To Cart  +</button>
  </>;
}

export default CartButton
