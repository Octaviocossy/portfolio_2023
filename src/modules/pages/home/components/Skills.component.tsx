import { Section, Title } from "@/ui";
import { Tag } from "../ui";
import { SKILLS_API } from "@/mocks";

export const Skills = async () => {
  const skills_list = await SKILLS_API.get();

  return (
    <Section>
      <Title>Skills</Title>
      <div className="flex flex-wrap">
        {skills_list.map((skill, i) => (
          <Tag key={i} text={skill.name} color={skill.color} />
        ))}
      </div>
    </Section>
  );
};
