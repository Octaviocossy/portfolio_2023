import { IExperience } from "@/models";
import { parseSlug } from "@/utilities";

const experience: IExperience[] = [
  {
    id: 2,
    from: "dic. 2022",
    to: "Actualidad",
    company: "Janus Automation",
    slug: parseSlug("Janus Automation"),
    description: "description test janus",
  },
  {
    id: 1,
    from: "jul. 2022",
    to: "dic. 2022",
    company: "Gestioner Soft",
    slug: parseSlug("Gestioner Soft"),
    description: "description test gestioner",
  },
];

export const EXPERIENCE_API = {
  get: async (): Promise<IExperience[]> => experience,
  getBySlug: async (slug: string): Promise<IExperience | undefined> =>
    experience.find((item) => item.slug === slug),
};
