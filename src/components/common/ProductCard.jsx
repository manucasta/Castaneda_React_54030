
import {Link} from "react-router-dom"

export const ProductCard = ({id, title, img, price}) => {
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
      <h4>${price}</h4>
      <Link to={`/item/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}
