import SkillItem from "@/pages/About/components/SkillItem";
import { SkillItemProps } from "../SkillItem/SkillItem";

interface SkillProps {
  title: string;
  skills: SkillItemProps[];
}

const Skill = ({ title, skills }: SkillProps) => {
  return (
    <div className="flex  h-full relative flex-col lg:flex-row">
      <h2>
        <span
          id="skill_titulo_mobile"
          className="lg:hidden block 
      mb-5 text-2xl font-bold text-blue-700
    "
        >
          {title}
        </span>
      </h2>
      <div className="lg:block hidden">
        <h2 className="skill_titulo hover:text-blue-500 transition duration-300 ease-in-out">
          {title}
        </h2>
        <div
          id="divider"
          className=" min-h-48 h-full w-[2px]  bg-slate-300 ml-20 mr-5"
        ></div>
      </div>
      <ul>
        {skills.map((skill) => (
          <SkillItem
            title={skill.title}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </ul>
    </div>
  );
};

export default Skill;
