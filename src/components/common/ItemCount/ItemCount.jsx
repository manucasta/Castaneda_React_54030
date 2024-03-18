import React from 'react'
import "./ItemCount.css"
import Swal from "sweetalert2";

const ItemCount = ({counter, increment, decrement, addCart}) => {

  const alertAddCart = () => {
    Swal.fire ({
      titleText:"Do you want to add this product to your cart?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then ((res) => {
      if (res.isConfirmed){
        Swal.fire("The product was added to the cart", "", "success");
        addCart(counter);
      }
    })
  }

  return (
    <>
      <div className="counterContainer">
        <button onClick={decrement}>-</button>
        <h3>{counter}</h3>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={alertAddCart}>Agregar al Carrito</button>
    </>
  );
}

export default ItemCount