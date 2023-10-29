import { ISkill } from "@/models";

const skills: ISkill[] = [
  { name: "React", color: "bg-blue-500/20" },
  { name: "NodeJS", color: "bg-green-500/20" },
  { name: "TypeScript", color: "bg-blue-500/20" },
  { name: "NextJS", color: "bg-pink-500/20" },
  { name: "Redux", color: "bg-purple-500/20" },
  { name: "React Native", color: "bg-blue-500/20" },
  { name: "ElectronJS", color: "bg-yellow-500/20" },
  { name: "Express", color: "bg-gray-500/20" },
  { name: "Prisma", color: "bg-cyan-500/20" },
  { name: "PostgreSQL", color: "bg-blue-500/20" },
  { name: "Docker", color: "bg-blue-500/20" },
  { name: "Git", color: "bg-red-500/20" },
  { name: "JavaScript", color: "bg-yellow-500/20" },
  { name: "HTML", color: "bg-orange-500/20" },
  { name: "CSS", color: "bg-blue-500/20" },
  { name: "Scss", color: "bg-pink-500/20" },
  { name: "TailwindCSS", color: "bg-blue-500/20" },
  { name: "Chakra-UI", color: "bg-green-500/20" },
  { name: "SQL Server", color: "bg-red-500/20" },
  { name: ". NET 6", color: "bg-purple-500/20" },
  { name: "Angular", color: "bg-red-500/20" },
];

export const SKILLS_API = {
  get: async (): Promise<ISkill[]> => skills,
};
