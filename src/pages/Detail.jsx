import React from "react";
import { useParams } from "react-router-dom";
import BooksData from "../data/BooksData";

function Detail() {
  const { title } = useParams();
  const book = BooksData(title, "accuracy", 1, 1, "title");

  return (
    <div>
      <img src={book[0]?.thumbnail} alt="" />
      <h2>{book[0]?.thumbnail}</h2>
    </div>
  );
}

export default Detail;
