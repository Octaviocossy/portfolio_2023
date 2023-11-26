import { SKILLS_API } from "@/mocks";
import { IProject } from "@/models";

export const projectAdapter = async <T extends unknown>(data: T[]): Promise<IProject[]> => {
  const skills = await SKILLS_API.get();

  return data.map((project: any) => ({
    ...project,
    skills: skills.filter((skill) => project.skills.includes(skill.id)),
  }));
};
