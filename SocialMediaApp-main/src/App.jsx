import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 text-gray-900 p-6">
      <h1 className="text-5xl font-extrabold text-orange-700 drop-shadow-lg">
        🙏 श्री गणेशाय नमः 🙏
      </h1>
      <p className="mt-4 text-xl text-gray-800 font-medium">
        May Lord Ganesha bless this project with wisdom, success, and prosperity.
      </p>

      <div className="mt-6 p-6 bg-white rounded-2xl shadow-xl text-center w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-orange-600">Welcome to Our Project</h2>
        <p className="mt-3 text-gray-700">
          This project is built with ❤️ using <span className="font-bold text-blue-600">React</span> and <span className="font-bold text-teal-600">TailwindCSS</span>.
        </p>
        <button className="mt-5 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>

      <footer className="mt-10 text-gray-600 text-sm">
        © {new Date().getFullYear()} May God Bless You.
      </footer>
    </div>
  );
}

export default App;
