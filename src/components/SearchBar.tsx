import React from "react";

type Props = { search: string; setSearch: (val: string) => void };

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Tìm kiếm sản phẩm" value={search} onChange={e => setSearch(e.target.value)} />
    </div>
  );
};

export default SearchBar;
