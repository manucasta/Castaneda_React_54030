
import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = ({item, addCart, initial}) => {
  return (
    <>
      <div className="displayContainer">
        <div className="imgDetailContainer">
          <img src={item.img} alt="" />
        </div>
        <div className="itemDetailDescription">
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
          <h2>${item.price}</h2>
          <ItemCountContainer  
          item = {item} stock={item.stock} addCart = {addCart} initial = {initial} 
          />
        </div>
      </div>
    </>
  );
}
