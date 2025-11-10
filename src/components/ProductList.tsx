import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Pagination from "./Pagination";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = products
    .filter(p => p.ten.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (category ? p.danhMuc === category : true))
    .filter(p => (minPrice ? p.gia >= minPrice : true))
    .filter(p => (maxPrice ? p.gia <= maxPrice : true));

  const pageSize = 6;
  const totalPages = Math.ceil(filtered.length / pageSize);
  const displayed = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar category={category} 
                 setCategory={setCategory} 
                 minPrice={minPrice} 
                 setMinPrice={setMinPrice} 
                 maxPrice={maxPrice} 
                 setMaxPrice={setMaxPrice} />
      <div className="product-list">
        {displayed.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination currentPage={currentPage} 
                  setCurrentPage={setCurrentPage} 
                  totalPages={totalPages} />
    </>
  );
};

export default ProductList;
