import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../../../productsMock";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const ItemDetailContainer = () => {

  const navigate = useNavigate()
  const { id } = useParams();

  const {addToCart, getQuantity} = useContext (CartContext);
  const initial = getQuantity (id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading (true);
    let productsCollection = collection (db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc (refDoc)
    .then ( (res) => {
      setItem ({...res.data(), id : res.id})
    }). finally (() => setIsLoading(false))
  }, [id]);

  const addCart = (quant) => {
    let infoProducto = {
      ...item,
      quantity:quant
    }

    addToCart (infoProducto);
  }
  
  return (
    <>
    {isLoading ? 
    <div style={{textAlign:"center"}}>
      <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" style={{width:"100px", alignItems:"center"}}/> 
      <h2>Loading...</h2>
    </div>
    : <ItemDetail item={item} addCart={addCart} initial = {initial} />}
    </>
    )
}
