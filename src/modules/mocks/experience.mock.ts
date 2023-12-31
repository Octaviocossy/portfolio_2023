import { IExperience } from "@/models";

const experience: IExperience[] = [
  {
    id: 2,
    from: "dic. 2022",
    to: "Actualidad",
    company: "Janus Automation",
    description: "Fullstack Developer",
    url: "https://www.janusautomation.com/website/",
    projects: [
      {
        title: "Tracking de técnicos y ordenes.",
        technologies: ["React", "TypeScript", "Chakra UI", "Python", "SQL Server"],
      },
      {
        title: "Tracking de técnicos y ordenes. (Migración a React Native)",
        technologies: ["React Native", "TypeScript", "Native Base"],
      },
      {
        title: "Weighing scale (balanza) - (Mantenimiento)",
        technologies: ["React", "NodeJS", "SQL Server"],
      },
      {
        title: "Dashboard de eventos y configuración de equipos Doven.",
        technologies: ["React", "TypeScript", ".NET CORE", "SQL Server"],
      },
    ],
  },
  {
    id: 1,
    from: "jul. 2022",
    to: "dic. 2022",
    company: "Gestioner Soft",
    description: "React Developer",
    url: "https://gestionersoft.com/",
    projects: [
      {
        title: "Gestor de Facturas Electrónicas. (Web App interna)",
        technologies: ["React", "TailwindCSS"],
      },
    ],
  },
];

export const EXPERIENCE_API = {
  get: async (): Promise<IExperience[]> => experience,
};
