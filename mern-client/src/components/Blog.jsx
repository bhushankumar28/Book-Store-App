import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Blog</h2>
        <p className="text-lg text-gray-600 text-center">
          Welcome to our blog! Here, we share the latest news, updates, and insights about our boot store and the world of footwear.
        </p>
        <div className="space-y-6">
          {/* Blog Post 1 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">Title of the First Blog Post</h3>
            <p className="mt-2 text-gray-600">
              This is a brief description or excerpt of the first blog post. It gives readers an idea of what the post is about.
            </p>
            <a href="/blog/first-post" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
          </div>
          {/* Blog Post 2 */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">Title of the Second Blog Post</h3>
            <p className="mt-2 text-gray-600">
              This is a brief description or excerpt of the second blog post. It gives readers an idea of what the post is about.
            </p>
            <a href="/blog/second-post" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
          </div>
          {/* Add more blog posts as needed */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
