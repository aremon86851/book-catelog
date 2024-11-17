import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <p className="text-sm">© {new Date().getFullYear()} Book Catalog. Built with ❤️ using React & Tailwind CSS.</p>
    </div>
  </footer>
);

export default Footer;
