import React from "react";

type Props = {
  currentPage: number;
  setCurrentPage: (val: number) => void;
  totalPages: number;
};

const Pagination = ({ currentPage, setCurrentPage, totalPages }: Props) => {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Trang trước</button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
        <button key={num} className={num === currentPage ? "active" : ""} onClick={() => setCurrentPage(num)}>
          {num}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Trang sau</button>
    </div>
  );
};

export default Pagination;
