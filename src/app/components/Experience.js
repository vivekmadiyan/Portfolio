import React from "react";

const workExperiences = [
  {
    company: "Global Infoventures Pvt. Ltd.",
    location: "Noida",
    period: "Nov 2024 - June 2025",
    title: "AI/ML Trainee",
    description:
      "Gained hands-on experience with Python, machine learning libraries, and real-world project workflows.",
    isCurrent: false,
  },
  {
    company: "CRC Training Dept., ABESIT",
    location: "Ghaziabad",
    period: "June 2025 - July 2025",
    title: "Manual Testing Intern",
    description: "Designed and executed test cases in JIRA, performed bug reporting.",
    isCurrent: false,
  },
  {
    company: "Willow Wave",
    location: "Kanpur",
    period: "July 2025 - Present",
    title: "Frontend Developer Intern",
    description:
      "Built and deployed responsive websites and plugins using Next.js, Tailwind CSS, Redux.",
    isCurrent: true,
  },
];

const TimelineItem = ({ experience, isLast }) => {
  return (
    <div className="relative mb-12 w-full flex flex-col" itemScope itemType="https://schema.org/WorkExperience">
      
      {/* Mobile Card Layout */}
      <div className="md:hidden flex flex-col bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`flex h-4 w-4 rounded-full ${
              experience.isCurrent ? "border-2 border-[#FD853A] bg-white" : "bg-[#FD853A]"
            }`}
          >
            {experience.isCurrent && (
              <div className="h-2 w-2 bg-[#FD853A] rounded-full m-auto"></div>
            )}
          </div>
          <div className="text-lg font-bold text-gray-800" itemProp="jobTitle">
            {experience.title}
          </div>
        </div>
        <div className="text-sm text-gray-600" itemProp="name">
          {experience.company}, {experience.location}
        </div>
        <div className="text-sm text-gray-500 italic mt-1" itemProp="startDate">
          {experience.period}
        </div>
        <div className="mt-2 text-gray-700" itemProp="description">
          {experience.description}
        </div>
      </div>

      {/* Desktop Horizontal Layout */}
      <div className="hidden md:flex flex-row items-center justify-between w-full">
        
        {/* Left Content */}
        <div className="w-1/3 flex flex-col items-end pr-6">
          <div className="text-lg font-bold text-gray-800" itemProp="name">
            {experience.company}, {experience.location}
          </div>
          <div className="text-sm text-gray-500 mt-1" itemProp="startDate">
            {experience.period}
          </div>
        </div>

        {/* Middle Marker */}
        <div className="relative flex flex-col items-center justify-center">
          {!isLast && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[70px] w-px border-l-2 border-dashed border-gray-300"></div>
          )}
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full z-10 ${
              experience.isCurrent
                ? "border-4 border-[#FD853A] bg-white"
                : "bg-[#FD853A]"
            }`}
          >
            {experience.isCurrent && (
              <div className="h-4 w-4 rounded-full bg-[#FD853A]"></div>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-1/3 flex flex-col items-start pl-6">
          <div className="text-xl font-bold text-gray-800" itemProp="jobTitle">
            {experience.title}
          </div>
          <div className="mt-1 text-gray-600" itemProp="description">
            {experience.description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans"
      itemScope
      itemType="https://schema.org/Resume"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="flex justify-center mb-16">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            My <span className="text-[#FD853A]">Work Experience</span>
          </h2>
        </div>
        <div className="relative flex flex-col">
          {workExperiences
            .slice(0)
            .reverse()
            .map((exp, index) => (
              <TimelineItem
                key={index}
                experience={exp}
                isLast={index === workExperiences.length - 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
