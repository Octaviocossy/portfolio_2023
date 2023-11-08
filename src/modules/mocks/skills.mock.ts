import { ISkill } from "@/models";

const skills: ISkill[] = [
  { name: "React", color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10" },
  { name: "NodeJS", color: "bg-green-500/20 shadow-green-500/10 border-green-500/10" },
  { name: "TypeScript", color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10" },
  { name: "NextJS", color: "bg-pink-500/20 shadow-pink-500/10 border-pink-500/10" },
  { name: "Redux", color: "bg-purple-500/20 shadow-purple-500/10 border-purple-500/10" },
  { name: "React Native", color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10" },
  { name: "ElectronJS", color: "bg-yellow-500/20 shadow-yellow-500/10 border-yellow-500/10" },
  { name: "Express", color: "bg-gray-500/20 shadow-gray-500/10 border-gray-500/10" },
  { name: "Prisma", color: "bg-cyan-500/20 shadow-cyan-500/10 border-cyan-500/10" },
  { name: "PostgreSQL", color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10" },
  { name: "Docker", color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10" },
  { name: "Git", color: "bg-red-500/20 shadow-red-500/10 border-red-500/10" },
  { name: "JavaScript", color: "bg-yellow-500/20 shadow-yellow-500/10 border-yellow-500/10" },
  { name: "HTML", color: "bg-orange-500/20 shadow-orange-500/10 border-orange-500/10" },
  { name: "CSS", color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10" },
  { name: "Scss", color: "bg-pink-500/20 shadow-pink-500/10 border-pink-500/10" },
  { name: "TailwindCSS", color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10" },
  { name: "Chakra-UI", color: "bg-green-500/20 shadow-green-500/10 border-green-500/10" },
  { name: "SQL Server", color: "bg-red-500/20 shadow-red-500/10 border-red-500/10" },
  { name: ". NET 6", color: "bg-purple-500/20 shadow-purple-500/10 border-purple-500/10" },
  { name: "Angular", color: "bg-red-500/20 shadow-red-500/10 border-red-500/10" },
];

export const SKILLS_API = {
  get: async (): Promise<ISkill[]> => skills,
};
