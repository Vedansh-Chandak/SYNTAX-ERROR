import Footer from "@/components/Footer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Contact Heading */}
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Contact Us</h1>

      {/* Contact Form */}
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-2 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex space-x-6 text-xl">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="Twitter">
          <FaTwitter />
        </a>
      </div>
      <div className="mt-5 w-full flex justify-between">
      <Footer/>
      </div>
    </div>
    
  );
}
