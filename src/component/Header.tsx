import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../redux/features/user/userSlice";

const Header: React.FC = () => {
  const selector = useSelector((state: any) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    await dispatch(signOutUser());
    navigate("/");
  };
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">📚 Book Catalog</h1>
        <div className="flex gap-2">
          <Link
            to="/"
            className="mr-2 text-lg font-medium hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/"
            className="mr-2 text-lg font-medium hover:text-yellow-300 transition duration-200"
          >
            All Books
          </Link>
          {selector?.email && (
            <>
              <Link
                to="/add-book"
                className="mr-2 text-lg font-medium hover:text-yellow-300 transition duration-200"
              >
                Add product
              </Link>
              <Link
                to="#"
                className="mr-2 text-lg font-medium hover:text-yellow-300 transition duration-200"
                onClick={handleSignOut}
              >
                Sign out
              </Link>
            </>
          )}
          {!selector?.email && (
            <>
              <Link
                to="/sign-in"
                className="mr-2 text-lg font-medium hover:text-yellow-300 transition duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="mr-2 text-lg font-medium hover:text-yellow-300 transition duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
