import React from "react";
import Slider from "react-slick";
import projects from "../../assets/project"; // Import project data
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Smooth transition speed
    slidesToShow: 2, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    arrow:false,
    autoplaySpeed: 2000, // Slide every 2 seconds
    centerMode: true, // Enables proper centering
    centerPadding: "0px", // Prevents extra spacing
  };

  return (
    <section className="portfolio">
      <h1>My Projects</h1>
      <hr />
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image} // Image from project.js
          />
        ))}
      </Slider>
      <hr />
    </section>
  );
};
export default Portfolio;
