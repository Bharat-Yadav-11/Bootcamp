import React from 'react';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <ThemeToggle />
      <header className="p-6 text-center">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
          Welcome to Themed React Site
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Light and Dark mode that actually works!
        </p>
      </header>

      <main className="flex flex-col items-center justify-center px-6 py-10 space-y-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Beautiful, Responsive Design</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is a modern homepage built with React + Tailwind CSS. You can toggle themes using the button at the top right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">🌙 Dark Mode</h3>
            <p>Switch to a sleek dark theme perfect for night owls.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">☀️ Light Mode</h3>
            <p>Clean and modern light UI for bright environments.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">⚡ Performance</h3>
            <p>Built with React and Tailwind for speed and style.</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        Made with ❤️ by IronMan
      </footer>
    </div>
  );
};

export default App;
