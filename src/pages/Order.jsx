import React from "react";
import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();
  const book = location.state.book;
  const count = location.state.count;

  return (
    <div>
      <p>책 제목: {book.title}</p>
      <p>개수: {count}</p>
    </div>
  );
}

export default Order;
