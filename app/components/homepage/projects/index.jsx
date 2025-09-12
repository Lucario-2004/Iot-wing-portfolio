"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const containerRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState(0);

  // Group projects in sets of 4
  const groups = useMemo(() => {
    const grouped = [];
    for (let i = 0; i < projectsData.length; i += 4) {
      grouped.push(projectsData.slice(i, i + 4));
    }
    return grouped;
  }, []);

  // Scroll handler to update active group based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const groupHeight = container.clientHeight;
      const newActiveGroup = Math.floor(scrollTop / groupHeight);
      setActiveGroup(newActiveGroup);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      id="projects"
      className="relative z-50 my-12 lg:my-24 overflow-y-auto max-h-[80vh]"
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

      <div className="pt-24">
        {groups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`group-container relative max-w-3xl mx-auto mb-12 transition-transform duration-700 ${
              activeGroup === groupIndex ? 'translate-x-0 z-20' : 'translate-x-full z-0'
            }`}
            style={{ height: '400px' }}
          >
            {group.map((project, index) => (
              <div
                key={index}
                className={`project-card-wrapper absolute w-full transition-transform duration-700`}
                style={{
                  top: `${index * 60}px`,
                  transform: `rotateX(${activeGroup === groupIndex ? index * 10 : 0}deg) translateZ(${activeGroup === groupIndex ? index * 20 : 0}px)`,
                  zIndex: group.length - index,
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
