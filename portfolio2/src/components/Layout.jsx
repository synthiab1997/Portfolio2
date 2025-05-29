import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] via-[#f0f4ff] to-[#e6eaff] text-gray-900 font-sans">
      <header className="p-6 shadow bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-800">Synthia Aimée Bassole Portfolio</h1>
          <nav className="space-x-4 text-sm font-medium">
            <a href="/" className="text-indigo-700 hover:text-indigo-900">Home</a>
          </nav>
        </div>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="text-center p-6 text-sm text-gray-600 bg-white/70 border-t mt-10">
        <div className="mb-3 space-x-4 text-indigo-700 font-medium">
          <a href="linkedin.com/in/synthia-b-2b3334252" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-900">
            LinkedIn
          </a>
          <a href="https://github.com/synthiab1997" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-900">
            GitHub
          </a>
          <a
            href="/Aimee_Synthia_Bassole_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 hover:text-indigo-900"
         >
            📄 My CV
          </a>

        </div>
        <p>© {new Date().getFullYear()} Synthia Bassole. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
