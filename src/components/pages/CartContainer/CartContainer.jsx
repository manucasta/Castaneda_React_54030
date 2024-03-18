
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./CartContainer.css"

export const CartContainer = () => {

  const {cart, clearCart, removeProduct, getTotalPrice} = useContext (CartContext)

  let total = getTotalPrice ();

  const alertClearCart = () => {
    Swal.fire({
      title: "Confirmed",
      text: "Do you want to clear your cart?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then ((res) => {
      if (res.isConfirmed) {
        clearCart()
        Swal.fire({
          text:"Your cart was successfully cleared",
          icon: "success",
          showConfirmButton: true,
        });
      }
    })
  }

  return (
    <>
      <h2>Carrito</h2>
      <div className="cartContainer">
        {cart.map((product) => (
          <div
            style={{
              width: "200px",
              border: "2px solid white",
              padding: "5px",
            }}
            key={product.id}
          >
            <h3 style={{ textAlign: "center" }}>{product.title}</h3>
            <img
              className="imgLogo"
              style={{ width: "100%" }}
              src={product.img}
            />
            <h4>Quantity: {product.quantity}</h4>
            <h4>${product.price}</h4>
            <button onClick={() => {
              removeProduct (product.id)
            }}>
              Remove product
            </button>
          </div>
        ))}
      </div>
      <button onClick={alertClearCart}>Clear Cart</button>

      <h3>Total: ${total}</h3>

      <Link to="/checkout">
        <button> Checkout </button>
      </Link>
    </>
  )
}

export default CartContainer