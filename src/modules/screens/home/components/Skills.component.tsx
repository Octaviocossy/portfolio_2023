import { Section, Title } from "@/ui";
import { Tag } from "../ui";
import { SKILLS_API } from "@/mocks";
import Image from "next/image";

export const Skills = async () => {
  const skills_list = await SKILLS_API.get();

  return (
    <Section>
      <Title>Skills</Title>
      <div className="flex flex-wrap">
        {skills_list.map((skill, i) => (
          <Tag key={i} className={`${skill.color} shadow-lg border-2`}>
            {skill.name}
          </Tag>
        ))}
      </div>
    </Section>
  );
};
