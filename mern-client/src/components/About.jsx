import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">About Us</h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Welcome to our book Store! We are dedicated to providing you with the finest quality books for all occasions. Whether you're looking for rugged outdoor books, stylish casual books, or formal books for special events, we have something to suit your needs.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Our mission is to offer a wide variety of books that combine style, comfort, and durability. We carefully select each pair of books to ensure they meet our high standards of quality. Our knowledgeable staff is here to help you find the perfect fit and style.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Thank you for choosing our book Store. We look forward to serving you and helping you find the perfect books for your adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
