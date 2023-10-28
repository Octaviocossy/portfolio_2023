import { Section, Title } from "@/ui";
import { Tag } from "../ui";

export const Skills = () => {
  const skills_list: string[] = [
    "React",
    "NodeJS",
    "TypeScript",
    "NextJS",
    "Redux",
    "React Native",
    "ElectronJS",
    "ExpressJS",
    "Prisma",
    "PostgreSQL",
    "Docker",
    "Git",
    "JavaScript",
    "HTML",
    "CSS",
    "Sass",
    "TailwindCSS",
    "Chakra-UI",
    "SQL Server",
    "Angular",
    ".NET 6",
  ];

  return (
    <Section>
      <Title>Skills</Title>
      <div className="flex flex-wrap">
        {skills_list.map((technologie, i) => (
          <Tag key={i} name={technologie} />
        ))}
      </div>
    </Section>
  );
};
