import { skills } from "../data/skillsData";

const SkillInfo = () => {
  return (
    <div className="flex flex-col items-left">
      {skills.map((skill, index) => (
        <div key={index} className="hidden md:flex ml-4 items-center w-10/12 -mb-5">
          <div className="scale-[50%] -mr-3">{skill.icon}</div>
          <div>
            <p className="font-bold text-base items-right tracking-widest">{skill.name}</p>
            <p className="text-justify text-sm">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillInfo;
