// @flow strict

import * as React from 'react';

const GitIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <g clipPath="url(#clip0)">
      <path d="M251.172 116.594L139.398 4.82845C132.966 -1.60948 122.525 -1.60948 116.084 4.82845L92.8747 28.0382L122.317 57.4808C129.16 55.1691 137.005 56.7196 142.46 62.1744C147.94 67.6629 149.479 75.5755 147.111 82.4404L175.486 110.816C182.351 108.451 190.272 109.981 195.755 115.473C203.418 123.133 203.418 135.548 195.755 143.213C188.09 150.879 175.675 150.879 168.006 143.213C162.243 137.444 160.819 128.978 163.737 121.877L137.275 95.4146L137.272 165.052C139.14 165.979 140.904 167.212 142.46 168.763C150.122 176.423 150.122 188.838 142.46 196.509C134.794 204.171 122.373 204.171 114.719 196.509C107.057 188.838 107.057 176.423 114.719 168.763C116.612 166.872 118.803 165.443 121.14 164.482V94.1956C118.803 93.2405 116.615 91.8193 114.719 89.9148C108.913 84.1173 107.517 75.598 110.492 68.4691L81.4707 39.4422L4.83056 116.077C-1.61019 122.52 -1.61019 132.961 4.83056 139.399L116.604 251.167C123.039 257.605 133.477 257.605 139.921 251.167L251.172 139.918C257.609 133.478 257.609 123.031 251.172 116.594Z" fill="#DE4C36"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="256" height="256" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-center text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
          {project.gitLink && (
            <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="ml-2 inline-block">
              <GitIcon />
            </a>
          )}
        </div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;