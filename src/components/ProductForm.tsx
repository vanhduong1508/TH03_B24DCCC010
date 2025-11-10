import React, { useState } from "react";
import { Product } from "../types";

interface Props {
  initialData?: Product;
  onSubmit: (data: Product) => void;
}

const ProductForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [ten, setTen] = useState(initialData?.ten || "");
  const [danhMuc, setDanhMuc] = useState(initialData?.danhMuc || "");
  const [gia, setGia] = useState(initialData?.gia || 0);
  const [soLuong, setSoLuong] = useState(initialData?.soLuong || 0);
  const [moTa, setMoTa] = useState(initialData?.moTa || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (ten.length < 3) return alert("Tên sản phẩm phải ≥ 3 ký tự");
    if (gia <= 0 ) return alert("Giá phải là số dương");
    if (soLuong < 0) return alert("Số lượng phải ≥ 0");
    if (!danhMuc) return alert("Vui lòng chọn danh mục");

    onSubmit({
      id: initialData?.id || Date.now(),
      ten,
      danhMuc,
      gia,
      soLuong,
      moTa
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
      <input placeholder="Tên sản phẩm" value={ten} onChange={e => setTen(e.target.value)} /><br />
      <select value={danhMuc} onChange={e => setDanhMuc(e.target.value)}>
        <option value="">-- Chọn danh mục --</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select><br />
      <input type="number" placeholder="Giá" value={gia} onChange={e => setGia(Number(e.target.value))} /><br />
      <input type="number" placeholder="Số lượng" value={soLuong} onChange={e => setSoLuong(Number(e.target.value))} /><br />
      <textarea placeholder="Mô tả" value={moTa} onChange={e => setMoTa(e.target.value)} /><br />
      <button type="submit">Lưu</button>
    </form>
  );
};

export default ProductForm;
