
import "./ItemListContainer.css";
import { ItemList } from "../../common/ItemList";
import { getProducts, products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {

  const {category} = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect (() =>{
    setIsLoading(true)
    
    let productsCollection = collection (db, "products");
    let consulta;
    if (category) {
      let productsCollectionFiltered = query 
      (productsCollection, where("category", "==", category));
      consulta = productsCollectionFiltered
    } else{
      consulta = productsCollection
    }
    getDocs (consulta)
    .then (res => {
      let newArray = res.docs.map ( (element) => {
        return {...element.data(), id:element.id}
      })
      setItems (newArray);
    }).finally (()=> setIsLoading(false));
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
