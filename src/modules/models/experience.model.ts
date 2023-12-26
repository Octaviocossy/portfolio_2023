interface IProject {
  title: string;
  technologies: string[];
}

export interface IExperience {
  id: number;
  from: string;
  to: string;
  company: string;
  description: string;
  url: string;
  projects: IProject[];
}
