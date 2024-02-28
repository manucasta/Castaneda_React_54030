
import { ProductCard } from "./ProductCard";

export const ItemList = ({items}) => {
  return (
    <>
      {items.map((item) => {
        return (
          <ProductCard 
            key={item.id}
            id = {item.id}
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