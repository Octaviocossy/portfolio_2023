import { EXPERIENCE_API } from "@/mocks";
import { ERoutes } from "@/models";
import { Container, Section } from "@/ui";
import Link from "next/link";

export default async function Experience({
  params,
}: {
  params: { slug: string };
}) {
  const experience = await EXPERIENCE_API.getBySlug(params.slug);

  return (
    <Container>
      <Section className="space-y-4">
        <div>
          <Link href={ERoutes.HOME} className="text-xl">
            {"<-"}
          </Link>
        </div>
        <h1 className="text-4xl font-semibold">{experience?.company}</h1>
        <p className="">{experience?.description}</p>
      </Section>
    </Container>
  );
}
