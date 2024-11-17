import React, { useState } from "react";
import { useAddBookMutation } from "../../redux/features/bookSlice/bookSlice";
import { useNavigate } from "react-router-dom";
// import { addBook } from "../../redux/features/bookSlice/bookSlice";

const AddBookForm = () => {
  const navigate = useNavigate();
  const [addProduct, { isLoading, isSuccess }] = useAddBookMutation();
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState<any>({
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addProduct(formData).unwrap();
    if (response?.acknowledged) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add a New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700"
            >
              Year of Publication
            </label>
            <input
              type="number"
              name="publicationYear"
              id="publicationYear"
              value={formData.publicationYear}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? "Loading..." : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
