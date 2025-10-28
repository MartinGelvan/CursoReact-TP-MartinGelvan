import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/header";
import { ListProductsContainer } from "./components/ListItemContainer/ListProductsContainer";
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer";
import "./css/estiloApp.css";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { CategoryContainer } from "./components/CategoryContainer";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListProductsContainer />}></Route>
          <Route
            path="/producto/:id"
            element={<ProductDetailContainer />}
          ></Route>
          <Route path="/carrito" element={<Cart></Cart>} />
          <Route
            path="/category/:categoryName"
            element={<CategoryContainer />}
          />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
