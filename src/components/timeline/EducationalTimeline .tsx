
const EducationalTimeline = () => {
  const timelineData = [
    {
      year: "2024",
      title: "Full-Stack Developer ",
      institution: "ISTA NTIC SAFI",
      description: "Studying a full-stack  training program specializing in React and Laravel.",
    },
    {
      year: "2023",
      title: "High School ",
      institution: "Ibn khaldoun High School",
      description: "Graduated with a high school diploma from the University of Safi.",
    },
   
  ];

  return (
    <div className=" text-white py-6 px-5">
      <div className="relative  border-l border-gray-700">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className="mb-6 ml-6"
          >
            <div className="absolute w-2 h-2 bg-white rounded-full -left-[0.33rem] border border-white-900"></div>
            <p className="text-[12px] text-gray-400">{event.year}</p>
            <h3 className="text-[16px] font-semibold">{event.title}</h3>
            <h4 className="text-[12px] text-gray-300">{event.institution}</h4>
            <p className="text-gray-400 text-[13px]">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalTimeline;
