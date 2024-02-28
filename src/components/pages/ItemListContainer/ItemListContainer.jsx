
import "./ItemListContainer.css";
import { ItemList } from "../../common/ItemList";
import { getProducts, products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const {category} = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() =>{
    setIsLoading(true)
    getProducts ()
      .then (resp => {
        if (category){
          const filteredItem = resp.filter ( (item) => item.category === category ); 
          setItems (filteredItem)
        }else{
          setItems(resp);
        }
        setIsLoading(false);
      })
    },[category])

  return (
    <>
      {isLoading ? (
        <div style={{textAlign:"center"}}>
          <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" style={{width:"100px"}}/>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="productCardContainer">
          <ItemList items={items} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer
