import React from 'react';

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-xl overflow-hidden p-6 hover:scale-105 transition-transform duration-300">
      <img
        src="https://i.pravatar.cc/300"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">Bharat Yadav</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">Full Stack Developer</p>
        <p className="mt-2 text-sm">🚀 Passionate about building web apps with React, Node.js & Next.js</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/bharat-yadav-11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>
          <a
            href="mailto:bharatyadav2724@gmail.com"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
