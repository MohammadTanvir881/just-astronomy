import BooksTable from "@/components/Books/AllBooks/AllBooksAdmin";
import { getAllBooks } from "@/services/ManageBooks/Index";
import React from "react";

const AllBooksPageAdmin = async () => {
  const books = await getAllBooks();
  console.log("All Books Data:", books);
  return (
    <div>
      <BooksTable books={books.res} />
    </div>
  );
};

export default AllBooksPageAdmin;
