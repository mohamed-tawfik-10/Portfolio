"use client";

import Image from "next/image";
import profileImg from "../../../public/photo_2025-04-08_23-16-39.jpg";
import htmlIcon from "../../../public/icons/download.png";
import cssIcon from "../../../public/icons/css3.png";
import bootstrapIcon from "../../../public/icons/bootstrap.png";
import react from "../../../public/icons/react.png";
import next from "../../../public/icons/next.png";
import java from "../../../public/icons/java.png";
import tailwind from "../../../public/icons/tailwindcss.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function About() {
  const skills = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: java, alt: "JavaScript" },
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: react, alt: "React" },
    { src: next, alt: "Next.js" },
    { src: tailwind, alt: "Tailwind" },
  ];

  return (
    <section id="about" className="bg-black text-white py-28 px-2 sm:px-4">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center justify-center gap-12">
        {/* صورة شخصية */}
        <div className="rounded-xl overflow-hidden bg-amber-200 flex shadow-lg w-[250px] h-[400px]">
          <Image
            src={profileImg}
            alt="Profile"
            className="object-cover"
            width={250}
            height={400}
          />
        </div>

        {/* النص */}
        <div className="w-full md:max-w-xl text-center md:text-left px-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-500">
            ABOUT ME
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
            I'm Mohamed Tawfik, a skilled frontend developer with experience since
            2024, specializing in building responsive and dynamic web interfaces.
            Proficient in HTML, CSS, Bootstrap, JavaScript, React.js, and Next.js.
            I combine creativity and technical expertise to deliver seamless and
            engaging user experiences that meet modern web standards.
          </p>

          {/* المهارات */}
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 text-orange-500">
            SKILlS          </h2>
          <div className="flex justify-center md:justify-start items-center gap-6 ">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={4}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
              loop={true}
              autoplay={{ delay: 1500 }}
              spaceBetween={20}
              className="mt-8"
            >
              {skills.map((skill, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={40}
                    height={40}
                  />
                  <p className="text-xs text-white mt-1">{skill.alt}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
