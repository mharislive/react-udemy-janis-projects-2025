import type { BookType } from "../../types/Book";

const Book = (props: BookType) => {
  const { title, author, image } = props;

  return (
    <article className="p-5 rounded-lg border-1">
      <img src={image} alt={title} className="mx-auto mb-4 max-w-full" />
      <h2 className="text-2xl mb-1">{title}</h2>
      <h3 className="text-sm">By {author}</h3>
    </article>
  );
};

export default Book;
