import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../redux/features/bookSlice/bookSlice";
import ReviewSection from "./ReviewSection";

const BookDetails: any = () => {
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookByIdQuery(id);
  console.log(book);
  return (
    <>
      {isLoading && "Loading..."}
      {!isLoading && (
        <>
          <div className="container mx-auto p-6 max-w-3xl">
            <div className="bg-white shadow-md rounded-md p-4">
              <div className="flex flex-col md:flex-row">
                <img
                  src="https://via.placeholder.com/600/92c952" // Replace with an actual image URL
                  alt="The Great Gatsby"
                  className="w-full md:w-1/3 h-auto rounded-md mb-4 md:mb-0"
                />
                <div className="md:ml-6 flex flex-col justify-between">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
                    <h2 className="text-lg text-gray-700 mb-4">
                      By {book.author}, Genre {book.genre},
                    </h2>
                    <p className="text-gray-600 mb-4">
                      A novel set in the 1920s that tells the story of the
                      mysterious and wealthy Jay Gatsby and his unrequited love
                      for Daisy Buchanan.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Published on: {book.publicationYear}
                  </p>
                </div>
              </div>
            </div>

            <ReviewSection />
          </div>
        </>
      )}
    </>
  );
};

export default BookDetails;
