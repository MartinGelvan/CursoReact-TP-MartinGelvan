import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/header";
import { ListProductsContainer } from "./components/ListItemContainer/ListProductsContainer";
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer";
import "./css/estiloApp.css";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductoFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path="/" element={<ListProductsContainer />}></Route>
            <Route
              path="/category/:categoryName"
              element={<ListProductsContainer />}
            ></Route>
            <Route
              path="/producto/:id"
              element={<ProductDetailContainer />}
            ></Route>
            <Route path="/carrito" element={<Cart></Cart>} />
          </Route>
          <Route path="/admin" element={<AdminLayout></AdminLayout>}>
            <Route index element={<Login></Login>}></Route>
            <Route
              path="alta-productos"
              element={
                <RutaProtegida>
                  <ProductFormContainer></ProductFormContainer>
                </RutaProtegida>
              }
            ></Route>
          </Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
