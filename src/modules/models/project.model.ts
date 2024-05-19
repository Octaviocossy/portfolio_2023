import { ISkill } from "@/models";

export enum EStatus  {
  "DEVELOPMENT" = "Desarrollo",
  "FINALIZED" = "Finalizado"
}

export interface IProject {
  title: string;
  description: string;
  slug: string;
  status: EStatus;
  tags: string[]
  skills: ISkill[]
  platforms: string[]
  deploy?: string
  repo?: string
  miniature?: string
}
