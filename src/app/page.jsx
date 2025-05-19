"use client";
import Image from "next/image";
import Link from "next/link";
import photo from "../../public/photo_2025-04-08_23-16-39.jpg";

export default function Homee() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 text-white pt-24 px-4"
    >
      {/* صورة البروفايل */}
      <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg transition-transform duration-300 hover:scale-105">
        <Image
          src={photo}
          alt="Profile"
          className="w-full h-full object-cover"
          width={128}
          height={128}
          height={128}
          priority
        />
      </div>

      {/* العنوان */}
      <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
        Hi, I'm Mohamed Tawfik <br />
        Frontend Developer & UI Enthusiast
      </h1>

      {/* الوصف */}
      <p className="text-sm sm:text-base max-w-xl text-gray-300 mb-8">
        A passionate frontend developer skilled in building engaging, responsive,
        and accessible web interfaces using modern technologies like React.js and Next.js.
      </p>

      {/* زر التواصل */}
      <Link
        href="/Contact"
        className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition"
      >
        GET IN TOUCH
      </Link>
    </section>
  );
}
