import { IExperience } from "@/models";

const experience: IExperience[] = [
  {
    id: 2,
    from: "dic. 2022",
    to: "Actualidad",
    company: "Janus Automation",
    description: "Fullstack Developer - React & NodeJS",
    url: "https://www.janusautomation.com/website/",
  },
  {
    id: 1,
    from: "jul. 2022",
    to: "dic. 2022",
    company: "Gestioner Soft",
    description: "React Developer",
    url: "https://gestionersoft.com/",
  },
];

export const EXPERIENCE_API = {
  get: async (): Promise<IExperience[]> => experience,
};
