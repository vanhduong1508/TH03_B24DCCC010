import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import "./App.css";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <header className="container">
          <h1>Quản lý sản phẩm</h1>
          <nav>
            <Link to="/">Trang chủ</Link>
            <Link to="/add">Thêm sản phẩm</Link>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
