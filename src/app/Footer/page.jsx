'use client';

import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* حقوق النشر */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          All Rights Reserved © <span className="text-orange-500 font-semibold">Dev Mohamed</span> 2024
        </p>

        {/* روابط التواصل الاجتماعي */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/share/1YL82xKqSQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-4xl transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-4xl transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/mohamed-tawfik-10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-4xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-tawfik-2ab53435b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-4xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/201029351590"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 text-4xl transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* البريد الإلكتروني */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          <a href="mailto:Mohamed.kasr22222@gmail.com" className="hover:text-orange-500 transition-colors">
            Mohamed.kasr22222@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
