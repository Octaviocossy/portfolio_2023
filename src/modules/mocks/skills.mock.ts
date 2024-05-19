import { ISkill } from "@/models";

const skills: ISkill[] = [
  {
    id: 1,
    name: "React",
    icon: "/skills/react-logo.png",
    color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10",
  },
  {
    id: 2,
    name: "NodeJS",
    icon: "/skills/node-js-logo.png",
    color: "bg-green-500/20 shadow-green-500/10 border-green-500/10",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: "/skills/typescript-logo.png",
    color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10",
  },
  {
    id: 4,
    name: "NextJS",
    icon: "/skills/nextjs-logo.png",
    color: "bg-pink-500/20 shadow-pink-500/10 border-pink-500/10",
  },
  {
    id: 5,
    name: "Redux",
    icon: "/skills/redux-logo.png",
    color: "bg-purple-500/20 shadow-purple-500/10 border-purple-500/10",
  },
  {
    id: 6,
    name: "React Native",
    icon: "/skills/react-logo.png",
    color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10",
  },
  {
    id: 7,
    name: "ElectronJS",
    icon: "/skills/react-electron-logo.png",
    color: "bg-yellow-500/20 shadow-yellow-500/10 border-yellow-500/10",
  },
  {
    id: 8,
    name: "Express",
    icon: "/skills/express-logo.png",
    color: "bg-gray-500/20 shadow-gray-500/10 border-gray-500/10",
  },
  {
    id: 9,
    name: "Prisma",
    icon: "/skills/prisma-logo.png",
    color: "bg-cyan-500/20 shadow-cyan-500/10 border-cyan-500/10",
  },
  {
    id: 10,
    name: "Supabase",
    icon: "/skills/supabase-logo.png",
    color: "bg-green-500/20 shadow-green-500/10 border-green-500/10",
  },
  {
    id: 11,
    name: "PostgreSQL",
    icon: "/skills/postgres-logo.png",
    color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10",
  },
  {
    id: 12,
    name: "Docker",
    icon: "/skills/docker-logo.png",
    color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10",
  },
  {
    id: 13,
    name: "Git",
    icon: "/skills/git-logo.png",
    color: "bg-red-500/20 shadow-red-500/10 border-red-500/10",
  },
  {
    id: 14,
    name: "JavaScript",
    icon: "/skills/javascript-logo.png",
    color: "bg-yellow-500/20 shadow-yellow-500/10 border-yellow-500/10",
  },
  {
    id: 15,
    name: "HTML",
    icon: "/skills/html-logo.png",
    color: "bg-orange-500/20 shadow-orange-500/10 border-orange-500/10",
  },
  {
    id: 16,
    name: "CSS",
    icon: "/skills/css-logo.png",
    color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10",
  },
  {
    id: 17,
    name: "Scss",
    icon: "/skills/scss-logo.png",
    color: "bg-pink-500/20 shadow-pink-500/10 border-pink-500/10",
  },
  {
    id: 18,
    name: "TailwindCSS",
    icon: "/skills/tailwind-logo.png",
    color: "bg-blue-500/20 shadow-blue-500/10 border-blue-500/10",
  },
  {
    id: 19,
    name: "Chakra-UI",
    icon: "/skills/chakra-ui-logo.png",
    color: "bg-green-500/20 shadow-green-500/10 border-green-500/10",
  },
  {
    id: 20,
    name: "SQL Server",
    icon: "/skills/sql-logo.png",
    color: "bg-red-500/20 shadow-red-500/10 border-red-500/10",
  },
  {
    id: 21,
    name: ".NET 8",
    icon: "/skills/dotnet-logo.png",
    color: "bg-purple-500/20 shadow-purple-500/10 border-purple-500/10",
  },
  {
    id: 22,
    name: "Angular",
    icon: "/skills/angular-logo.png",
    color: "bg-red-500/20 shadow-red-500/10 border-red-500/10",
  },
];
export const SKILLS_API = {
  get: async (): Promise<ISkill[]> => skills,
};
