import ItemCount from "./ItemCount";
import { useState } from "react";


function ItemCountContainer({stock, addCart}) {
  const [counter, setCounter] = useState(1);
  
  const increment = () => {
    if (counter < stock) {
      setCounter (counter + 1);
      }else{
        alert("Out of stock")
      }
    }
  const decrement = () =>{
    if (counter > 1){
      setCounter(counter - 1)
    }
    }
  return (
    <ItemCount
      increment={increment}
      decrement={decrement}
      counter={counter}
      addCart={addCart}
    />
  );
}

export default ItemCountContainer