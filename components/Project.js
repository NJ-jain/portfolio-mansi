"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    img: "https://imgs.search.brave.com/-z-k16Sazo5YJOHHuickf8MTWF_BubGKCWjggQTYpNU/rs:fit:514:514:1/g:ce/aHR0cDovL3d3dy5t/YWNvYnNlcnZlci5j/b20vaW1ncy90ZWFz/ZXJfaW1hZ2VzLzIw/MTQwOTE4YXBwbGUt/d2VhdGhlci1pY29u/LmpwZw",
    link: "https://weather-app-naman.netlify.app/",
    title: "Weather-app",
  },
  {
    img: "https://source.unsplash.com/720x600/?portfolio",
    link: "https://form-website-naman.netlify.app/",
    title: "Form",
  },
  {
    img: "https://imgs.search.brave.com/inBMEl8EOzwXFQuNt1DGJT_9o8M62D4XPgSdT5c94HI/rs:fit:500:500:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL29yZGVy/LWZvb2QtaWNvbi0y/Mi5wbmc",
    link: "https://food-ordering-interface-naman.netlify.app/",
    title: "Food-app",
  },
  {
    img: "https://source.unsplash.com/720x600/?messanger",
    link: "https://rocketair-minor-project-naman.netlify.app/",
    title: "Clone- Rocketair",
  },
  {
    img: "https://imgs.search.brave.com/39JIVW2xeO0yaRm9lkhxftcSmE7mHIe78fjk3QiBJsA/rs:fit:748:561:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA5LzM3/Mzg4LWJ1YmJsZXMt/Ym9rZWgtc3BoZXJl/LWNpcmNsZS10ZXh0/dXJlLXBob3RvZ3Jh/cGh5LTc0OHg1NjEu/anBn",
    link: "https://bubble-game-naman.netlify.app/",
    title: "Bubble-Game",
  },
];

const Project = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}  
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="box">
                  <Image src={project.img} alt={project.title} width={300} height={300} layout="intrinsic" />
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="text">{project.title}</div>
                    <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;