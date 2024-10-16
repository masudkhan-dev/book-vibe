import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get("books.json");
        setBooks(res.data);
      } catch (error) {
        console.error("data fetching error", error);
      }
    };
    data();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <h2 className="text-3xl font-bold text-center my-10">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
