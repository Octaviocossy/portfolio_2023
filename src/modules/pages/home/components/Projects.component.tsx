import { Section, Title } from "@/ui";
import { get_all_metas } from "@/utilities";

export const Projects = async () => {
  const metas = await get_all_metas('project');
  console.log(metas)

  return (
    <Section>
      <Title>Proyectos</Title>
    </Section>
  );
};
