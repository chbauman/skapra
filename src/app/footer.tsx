"use client";

import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="h-16" /> {/* Adjust height as needed */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-m">© {new Date().getFullYear()} Skapra Zombie</p>
          <div className="flex space-x-6">
            <a
              href="mailto:skaprazombie@gmail.com"
              aria-label="Email"
              className="hover:text-blue-500"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.instagram.com/skaprazombie/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-red-500"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
