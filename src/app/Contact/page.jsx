"use client";
import { useState } from 'react';
import photo from "../../../public/projects/photo_2025-04-08_23-16-39.png";
import Image from "next/image";
import Footer from '../Footer/page';

export default function Contact() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', form);
    // ممكن تضيف toast أو alert هنا لتأكيد الإرسال
  };

  return (
    <>
      <section id="contact" className="bg-black text-white py-20 px-6 min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Left Info Section */}
          <div className="flex-1 max-w-xl">
            <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
              <Image
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover"
                width={128}
                height={128}
              />
            </div>

            <p className="text-sm text-gray-400 mb-2 uppercase">Are you ready?</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Elevate your brand experience to the next level
            </h1>
            <p className="text-gray-300 text-lg">
              Hi, I'm Mohamed, a creative Frontend Developer passionate about crafting intuitive and engaging user interfaces.
            </p>
          </div>

          {/* Right Contact Form */}
          <div className="flex-1 bg-zinc-900 p-8 rounded-2xl w-full max-w-md shadow-2xl border border-zinc-700">
            <h2 className="text-2xl font-semibold mb-6 text-orange-500">Contact Me</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  placeholder="Mohamed Tawfik"
                  required
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="mohamed.kasr2222@gmail.com"
                  required
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Leave a message here..."
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-300"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
