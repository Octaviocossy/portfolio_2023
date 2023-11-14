import { Section, Title } from "@/ui";
import { Item } from "../ui";
import { EXPERIENCE_API } from "@/mocks";

export const Experience = async () => {
  const experience = await EXPERIENCE_API.get();

  return (
    <Section>
      <Title>Experiencia</Title>
      {experience.map((experience) => (
        <Item data={experience} key={experience.id} />
      ))}
    </Section>
  );
};
