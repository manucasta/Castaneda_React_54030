
import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const ItemList = ({items}) => {
  const [quantity, setQuantity] = useState (0)
  return (
    <>
      {items.map((item) => {
        return (
          <ProductCard 
            key={item.id}
            title={item.title}
            img={item.img}
            description={item.description}
            price={item.price}
          />   
        );
      })}
    </>
  );
}