
import { useState } from "react";

export const ProductCard = ({id, name, img, price}) => {
  const [quantity, setQuantity] = useState (0)
  return (
      <div style={{width:"200px", border: "2px solid white", padding:"5px" }}>
        <h3 style={{textAlign:"center"}}>{name}</h3>
        <img className="imgLogo" style={{ width: "100%" }} src={img} alt="" />
        <h4>${price}</h4>
        <button>Agregar al Carrito</button>
      </div>
  );
};