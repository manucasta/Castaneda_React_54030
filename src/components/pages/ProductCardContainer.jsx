
import "./ProductCardContainer.css";
import CartWidget from "../common/CartWidget";
import { ProductCard } from "../common/ProductCard";

const ProductCardContainer = () => {
  return (
    <>
      <div className="productCardContainer">
        <ProductCard
          id={1}
          name={"Camiseta Titular"}
          img={
            "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707242106/PU606527-04-1_kfrmw2.jpg"
          }
          price={45000}
        />
        <ProductCard
          id={2}
          name={"Camiseta Suplente"}
          img={
            "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707241362/awayShirt.jpg"
          }
          price={45000}
        />
        <ProductCard
          id={3}
          name={"Short Titular"}
          img={
            "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707242381/PU606528-06-1_d4t7lo.jpg"
          }
          price={25000}
        />
        <ProductCard
          id={4}
          name={"Medias Titular"}
          img={
            "https://res.cloudinary.com/dgzuk3rhi/image/upload/v1707242450/independiente/771583_01_smjsp5.jpg"
          }
          price={15000}
        />
      </div>

      <CartWidget />
    </>
  );
}

export default ProductCardContainer
