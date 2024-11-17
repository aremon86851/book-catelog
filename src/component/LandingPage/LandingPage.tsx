import React from 'react';
import Header from '../Header';
// import BookList from '../Book/BookList';
import Footer from '../Footer';

const LandingPage: any = ({children}) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default LandingPage;
