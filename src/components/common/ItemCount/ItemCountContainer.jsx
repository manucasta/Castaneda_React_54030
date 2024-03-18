import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";


function ItemCountContainer({item, stock, addCart, initial =1}) {
  const [counter, setCounter] = useState(initial);

  const {addToCart} = useContext (CartContext)


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
      item = {item}
      increment={increment}
      decrement={decrement}
      counter={counter}
      addCart={addCart}
    />
  );
}

export default ItemCountContainer