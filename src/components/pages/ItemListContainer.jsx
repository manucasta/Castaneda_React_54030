
import "./ItemListContainer.css";
import CartWidget from "../common/CartWidget";
import { ItemList } from "../common/ItemList";
import { products } from "../../productsMock";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  useEffect (() =>{
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])

  return (
    <>
      <div className="productCardContainer">
        <ItemList items = {items} />
      </div>

      <CartWidget items={items}/>
    </>
  );
}

export default ItemListContainer
