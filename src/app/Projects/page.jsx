"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    src: "/projects/cothes.png",
    alt: "clothes",
    github: "https://github.com/mohamed-tawfik-10/Clothes-shopping-page",
    demo: "https://www.linkedin.com/posts/mohamed-tawfik-2ab53435b_my-final-react-project-linke-httpslnkdin-activity-7324156444226789376-jNUR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmZ-6MBdM3RlW-4T50vq52mtOkbI9yoTcs",
  },
  {
    src: "/projects/dachboard.png",
    alt: "dashboard",
    github: "https://github.com/mohamed-tawfik-10/DataBoard",
    demo: "https://www.linkedin.com/posts/mohamed-tawfik-2ab53435b_my-first-project-with-react-linke-https-activity-7322677724139966464-yRO3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmZ-6MBdM3RlW-4T50vq52mtOkbI9yoTcs",
  },
  {
    src: "/projects/pokimo.png",
    alt: "pokimo",
    github: "https://github.com/mohamed-tawfik-10/PokeDexer",
    demo: "https://www.linkedin.com/posts/mohamed-tawfik-2ab53435b_my-project-using-react-with-next-linke-activity-7325239511750184960-oQPI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmZ-6MBdM3RlW-4T50vq52mtOkbI9yoTcs",
  },
  {
    src: "/projects/tv.png",
    alt: "tv",
    github: "https://github.com/mohamed-tawfik-10/TV-Show-Finder",
    demo: "https://www.linkedin.com/posts/mohamed-tawfik-2ab53435b_my-project-using-react-with-next-linke-activity-7326682281811628032-Rwoy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmZ-6MBdM3RlW-4T50vq52mtOkbI9yoTcs",
  },
  {
    src: "/projects/books.png",
    alt: "books",
    github: "https://github.com/mohamed-tawfik-10/Bookmarker",
    demo: "https://www.linkedin.com/posts/mohamed-tawfik-2ab53435b_frontend-frontenddeveloper-html-activity-7321256369624424450-rXJl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmZ-6MBdM3RlW-4T50vq52mtOkbI9yoTcs",
  },
  {
    src: "/projects/whether.png",
    alt: "weather",
    github: "https://github.com/mohamed-tawfik-10/Weather",
    demo: "https://github.com/mohamed-tawfik-10/Weather",
  },
  {
    src: "/projects/yammy.png",
    alt: "yammy",
    github: "https://github.com/mohamed-tawfik-10/yammy",
    demo: "https://www.linkedin.com/posts/mohamed-tawfik-2ab53435b_html-css-js-activity-7319818336542801920-SKzh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFmZ-6MBdM3RlW-4T50vq52mtOkbI9yoTcs",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          <span className="text-orange-500">ALL </span>PROJECTS FRAMEWORK
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded overflow-hidden shadow-lg group"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={400}
                height={250}
                className="object-cover w-full h-[250px]"
              />

              {/* Overlay عند الـ Hover */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-white border border-orange-500 px-4 py-2  rounded mb-2 hover:bg-orange-500 transition"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="text-white border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 transition"
                >
                  Linkedin
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
