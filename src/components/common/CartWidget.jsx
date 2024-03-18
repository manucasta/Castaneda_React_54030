import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Badge } from "@mui/material";

const CartWidget = () => {

  const {getTotalItems} = useContext (CartContext);
  let total= getTotalItems ();

  return (
    <>
      <Badge badgeContent={total} color="white">
        <PiShoppingCartSimpleFill color="white" />
      </Badge>
    </>
  );
}

export default CartWidget