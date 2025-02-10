import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-4 border-t border-gray-700 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6">
        {/* Brand */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-mono font-bold text-white tracking-wide">SYNTAX ERROR</h2>
          <p className="text-xs mt-1">"Talk is cheap. Show me the code." – Linus Torvalds</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-300">Quick Links</h3>
          <Link to="/compiler" className="hover:text-blue-400 transition">Compiler</Link>
          <Link to="/all-codes" className="hover:text-blue-400 transition">All Codes</Link>
          <Link to="/Contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Technologies & Projects */}
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-300">Technologies</h3>
          <p>React, Tailwind, Node.js, MongoDB</p>
          <h3 className="font-semibold text-gray-300 mt-2">Our Features</h3>
          <p>Less Compile Time</p>
          <p>
          Code Visualisation
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-1 items-center md:items-start">
          <h3 className="font-semibold text-gray-300">Follow Us</h3>
          <div className="flex space-x-3 text-lg">
            <a href="https://github.com" className="hover:text-white transition"><FaGithub /></a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} Code Nexus. All Rights Reserved.
      </div>
    </footer>
  );
}
