import React from 'react';
import './App.css';
import AddBookForm from './component/Book/AddBookForm';
import BookList from './component/Book/BookList';

function App() {
  return (
    <div className="App">
         <h1>Book Catalog</h1>
        <AddBookForm />
        <BookList />
    </div>
  );
}

export default App;
