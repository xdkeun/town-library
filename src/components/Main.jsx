import React, { useEffect, useState } from "react";
import AllBooksData from "../data/AllBooksData";

function Main() {
  const books = AllBooksData("가가","title");

  return (
    <div>
      {books.map((book, index)=>(
      <div>
        {book.title}
        </div>
      ))}
    </div>
  );
}

export default Main;
