import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    let [count,setCount]=useState(1)

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
<<<<<<< HEAD
  
  <button className="cart" onClick={handleClick}>Add To Cart  +</button>

  <div className="countButton">
      <button onClick={handleDec}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={handleInc} >+</button>
=======
  <div>
      <button>-</button>
      {/* <p className="count-item">{count}</p> */}
      <button>+</button>
>>>>>>> fb1183de3dbf16e6bb11ba138f244c2e736a7ce7
  </div>
  </>;
};
export default CartButton
