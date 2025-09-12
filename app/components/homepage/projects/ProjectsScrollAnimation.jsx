"use client";

import React, { useEffect, useRef } from "react";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsScrollAnimation = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.killTweensOf(cardsRef.current);
    ScrollTrigger.getAll().forEach((st) => st.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${container.offsetHeight * (cardsRef.current.length - 1)}`,
      },
    });

    cardsRef.current.forEach((card, index) => {
      if (index === 0) return;

      tl.fromTo(
        card,
        { y: 100, scale: 1, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 2.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=200",
            end: "top top",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      id="projects-scroll-animation"
      className="relative z-50 my-12 lg:my-24 overflow-hidden"
      ref={containerRef}
    >
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24 max-w-3xl mx-auto relative">
        {projectsData.map((project, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="mb-24"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsScrollAnimation;