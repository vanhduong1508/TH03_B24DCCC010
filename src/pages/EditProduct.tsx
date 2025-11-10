import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../types";

const EditProduct = () => {
  const { id } = useParams();
  const { products, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  const [ten, setTen] = useState("");
  const [danhMuc, setDanhMuc] = useState("");
  const [gia, setGia] = useState(0);
  const [soLuong, setSoLuong] = useState(0);
  const [moTa, setMoTa] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (product) {
      setTen(product.ten);
      setDanhMuc(product.danhMuc);
      setGia(product.gia);
      setSoLuong(product.soLuong);
      setMoTa(product.moTa);
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!ten || ten.length < 3) newErrors.ten = "Tên phải ít nhất 3 ký tự";
    if (!danhMuc) newErrors.danhMuc = "Chọn danh mục";
    if (gia <= 0) newErrors.gia = "Giá phải lớn hơn 0";
    if (soLuong < 0) newErrors.soLuong = "Số lượng phải >= 0";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const updated: Product = { id: Number(id), ten, danhMuc, gia, soLuong, moTa };
    dispatch({ type: "UPDATE", payload: updated });
    navigate("/");
  };

  if (!product) return <p>Product not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sửa sản phẩm</h2>
      <label>Tên</label>
      <input value={ten} onChange={e => setTen(e.target.value)} />
      {errors.ten && <div className="error">{errors.ten}</div>}

      <label>Danh mục</label>
      <select value={danhMuc} onChange={e => setDanhMuc(e.target.value)}>
        <option value="">Chọn danh mục</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>
      {errors.danhMuc && <div className="error">{errors.danhMuc}</div>}

      <label>Giá</label>
      <input type="number" value={gia} onChange={e => setGia(Number(e.target.value))} />
      {errors.gia && <div className="error">{errors.gia}</div>}

      <label>Số lượng</label>
      <input type="number" value={soLuong} onChange={e => setSoLuong(Number(e.target.value))} />
      {errors.soLuong && <div className="error">{errors.soLuong}</div>}

      <label>Mô tả</label>
      <textarea value={moTa} onChange={e => setMoTa(e.target.value)} />

      <button className="primary" type="submit">Lưu</button>
    </form>
  );
};

export default EditProduct;
