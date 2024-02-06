

import { PiShoppingCartSimpleFill } from "react-icons/pi";

const CartWidget = () => {
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