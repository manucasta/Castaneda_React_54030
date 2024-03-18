
import CheckoutContainer from "./components/pages/CheckoutContainer/CheckoutContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/pages/CartContainer/CartContainer"
import Layout from "./components/layout/Layout";
import CartContextProvider from "./components/context/CartContext";

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
            </Route>
            
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://res.cloudinary.com/dgzuk3rhi/image/upload/v1709055424/samples/Pngtree_colorful_neon_glitch_404_text_6001850_wjzi9x.png"
                    style={{ width: "200px" }}
                  />
                  <h2>No se puede encontrar esta pagina</h2>
                </div>
              }
            />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App
