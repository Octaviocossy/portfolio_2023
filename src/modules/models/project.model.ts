import { ISkill } from "@/models";

export interface IProject {
  title: string;
  description: string;
  slug: string;
  is_in_development: boolean;
  tags: string[]
  skills: ISkill[]
  deploy?: string
  repo?: string
  miniature: string
}
