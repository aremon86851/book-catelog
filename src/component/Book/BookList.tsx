import React from "react";
import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../../redux/features/bookSlice/bookSlice";
import Loading from "../shared/Loading";

const BookList: React.FC = () => {
  const { data: books, isLoading } = useGetAllBooksQuery(undefined);
  console.log(books);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Top 10 Recently Added Books
      </h2>
      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book: any) => (
          <li
            key={book.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              {book.title}
            </h3>
            <p className="text-gray-600 mb-4">
              Author: <span className="italic">{book.author}</span>
            </p>
            <Link to={`/book-details/${book._id}`}>
              <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-200">
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
