import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import AllBooksPage from "./component/Book/AllBookPage";
import SignInPage from "./component/auth/SignInPage";
import SignUpPage from "./component/auth/SignUpPage";
import AddBookForm from "./component/Book/AddBookForm";
import BookList from "./component/Book/BookList";
import BookDetails from "./component/Book/BookDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <LandingPage>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/book-details/:id" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBookForm />} />
            <Route path="/all-books" element={<AllBooksPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </LandingPage>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
