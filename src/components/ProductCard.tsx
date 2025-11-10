import React, { useContext } from "react";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Bạn muốn xóa sản phẩm này ?")) {
      dispatch({ type: "DELETE", payload: product.id });
    }
  };

  return (
    <div className="product-card">
      <h3>{product.ten}</h3>
      <p>Danh mục: {product.danhMuc}</p>
      <p className="price">{product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <div>
        <button className="primary" onClick={() => navigate(`/products/${product.id}`)}>Chi tiết</button>
        <button className="secondary" onClick={() => navigate(`/edit/${product.id}`)}>Sửa</button>
        <button className="delete" onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  );
};

export default ProductCard;
