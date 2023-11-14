import { Section, Title } from "@/ui";
import { get_all_metas } from "@/utilities";
import { Card } from "../ui";
import { IProject } from "@/models";

export const Projects = async () => {
  const metas: IProject[] = await get_all_metas("project");

  return (
    <Section>
      <Title>Proyectos</Title>
      <div className="grid md:grid-cols-2 gap-2">
        {metas.map((meta) => (
          <Card key={meta.slug} data={meta} />
        ))}
      </div>
    </Section>
  );
};
