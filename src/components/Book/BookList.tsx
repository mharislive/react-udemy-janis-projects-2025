import Book from "../Book/Book";
import { BOOKS } from "./data";

const BookList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      {BOOKS.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

export default BookList;
