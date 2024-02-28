
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import {CartWidget} from "./components/common/CartWidget"
import Footer from "./components/layout/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
