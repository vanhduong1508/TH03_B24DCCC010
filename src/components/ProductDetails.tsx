import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <h2>{product.ten}</h2>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <p>{product.moTa}</p>
      <button className="secondary" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProductDetails;
