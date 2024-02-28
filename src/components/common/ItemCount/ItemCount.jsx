import React from 'react'
import "./ItemCount.css"

const ItemCount = ({counter, increment, decrement, addCart, outStock}) => {
  return (
    <>
      <div className="counterContainer">
        <button onClick={decrement}>-</button>
        <h3>{counter}</h3>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => addCart(counter)}>Agregar al Carrito</button>
    </>
  );
}

export default ItemCount