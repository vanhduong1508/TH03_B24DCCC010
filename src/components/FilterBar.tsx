import React from "react";

type Props = {
  category: string;
  setCategory: (val: string) => void;
  minPrice: number;
  setMinPrice: (val: number) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
};

const FilterBar = ({ category, setCategory, minPrice, setMinPrice, maxPrice, setMaxPrice }: Props) => {
  return (
    <div className="filter-bar">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Tất cả sản phẩm</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>
      <input type="number" 
             placeholder="Giá thấp nhất" 
             value={minPrice || ""} 
             onChange={e => setMinPrice(Number(e.target.value))} />
      <input type="number" 
             placeholder="Giá cao nhất" 
             value={maxPrice || ""} 
             onChange={e => setMaxPrice(Number(e.target.value))} />
    </div>
  );
};

export default FilterBar;
