import React from 'react'

export const ProductCard = ({id, title, img, description, price}) => {
  return (
    <div
      style={{
        width: "200px",
        border: "2px solid white",
        padding: "5px",
      }}
      key={id}
    >
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <img
        className="imgLogo"
        style={{ width: "100%" }}
        src={img}
        alt=""
      />
      <h4>{description}</h4>
      <h4>${price}</h4>
      <button>Agregar al Carrito</button>
    </div>
  );
}
