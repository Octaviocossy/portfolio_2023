import * as Components from "@/pages/home/components";
import { Container } from "@/ui";

export default function Home() {
  return (
    <Container className="pt-[7rem]">
      <Components.Presentation />
      <Components.AboutMe />
      <Components.Experience />
      <Components.Skills />
      <Components.Projects />
      {/* lastest posts */}
    </Container>
  );
}
