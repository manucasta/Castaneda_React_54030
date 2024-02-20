

import { PiShoppingCartSimpleFill } from "react-icons/pi";

const CartWidget = ({items}) => {
  let carrito = [];
  console.log(items);
  
  const addCart = (productId) =>{
      items.forEach(item => {
      const selectedProduct = item.id = productId;
      console.log (productId);
    });
    
  }
  return (
    <div>
      <h2>Carrito</h2>
      <div>
        <PiShoppingCartSimpleFill color="white" />
        <h4>Total:</h4>
      </div>
    </div>
  );
}

export default CartWidget