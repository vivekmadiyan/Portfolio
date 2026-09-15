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
    period: "July 2025 - Sept 2025",
    title: "Frontend Developer Intern (Remote)",
    description:
      "Built and deployed responsive websites and plugins using Next.js and Tailwind CSS. Developed features like work report summaries, PDF export, and CRM interface components.",
    isCurrent: false,
  },
  {
    company: "Quale Infotech Private Limited",
    location: "Gurugram",
    period: "March 2026 - Present",
    title: "Software Developer Intern",
    description:
      "Building the frontend of an Agentic AI Workflow Platform using JointJS, React.js, and TypeScript, including the toolbar, inspector panel, node configuration, and workflow canvas.",
    isCurrent: true,
  },
];

const TimelineItem = ({ experience, isLast }) => {
  return (
    <div
      className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
      itemScope
      itemType="https://schema.org/WorkExperience"
    >
      {/* Marker column */}
      <div className="relative flex flex-col items-center">
        <div
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full z-10 ring-4 ring-white ${
            experience.isCurrent ? "bg-[#FD853A]" : "bg-gray-300"
          }`}
        >
          {experience.isCurrent && (
            <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#FD853A] opacity-75 animate-ping"></span>
          )}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gray-200 mt-1"></div>
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-7 mt-[-2px]">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <div className="text-lg sm:text-xl font-bold text-gray-900" itemProp="jobTitle">
            {experience.title}
          </div>
          {experience.isCurrent && (
            <span className="text-xs font-semibold text-[#FD853A] bg-orange-50 border border-orange-200 rounded-full px-2.5 py-0.5">
              Current
            </span>
          )}
        </div>
        <div className="text-sm sm:text-base text-gray-600 font-medium" itemProp="name">
          {experience.company} &middot; {experience.location}
        </div>
        <div className="text-sm text-gray-400 mt-0.5 mb-3" itemProp="startDate">
          {experience.period}
        </div>
        <div className="text-gray-600 leading-relaxed" itemProp="description">
          {experience.description}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans"
      itemScope
      itemType="https://schema.org/Resume"
    >
      <div className="max-w-3xl mx-auto flex flex-col w-full">
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

