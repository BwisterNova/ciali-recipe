import React, { useState } from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  // Function to generate pagination numbers dynamically
  const generatePagination = () => {
    const pages = [];
    if (currentPage > 1) {
      pages.push("Prev");
    }

    if (currentPage > 2) {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
    }

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
      pages.push(totalPages); 
    }

    if (currentPage < totalPages) {
      pages.push("Next");
    }

    return pages;
  };

  const handlePageClick = (page) => {
    if (page === "Prev") {
      onPageChange(currentPage - 1);
    } else if (page === "Next") {
      onPageChange(currentPage + 1);
    } else if (page !== "...") {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      {generatePagination().map((page, index) => (
        <span
          key={index}
          className={`${styles.pageNumber} ${
            page === currentPage ? styles.active : ""
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
}
