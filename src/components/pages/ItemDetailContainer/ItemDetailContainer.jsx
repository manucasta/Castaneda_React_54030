import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../../../productsMock";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ItemDetailContainer = () => {

  const navigate = useNavigate()
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false); 
    });
  }, [id]);

  const addCart = (quant) => {
    let infoProducto = {
      ...item,
      quantity:quant
    }
    //navigate ("/cart");
  }
  
  return (
    <>
    {isLoading ? 
    <div style={{textAlign:"center"}}>
      <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" style={{width:"100px", alignItems:"center"}}/> 
      <h2>Loading...</h2>
    </div>
    : <ItemDetail item={item} addCart={addCart} />}
    </>
    )
}
