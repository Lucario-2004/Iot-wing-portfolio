import React from "react";
import Image from "next/image";
import { teamMembers } from "@/utils/data/personal-data";

const TeamSection = () => {
  return (
    <div className="my-12 lg:my-16" id="team">
      <h2 className="text-[#16f2b3] text-xl font-medium uppercase mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#1a1443] rounded-lg p-4 text-center">
            {member.profile && (
              <Image
                src={member.profile}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover aspect-square"
              />
            )}
            <h3 className="text-white text-lg font-semibold mb-2">{member.name}</h3>
            <div className="flex justify-center space-x-4">
              <a
                href={member.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:underline"
              >
                Resume
              </a>
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16f2b3] hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;