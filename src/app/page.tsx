import { Container } from "@/ui";
import { AboutMe, Presentation } from "@/pages/home";

export default function Home() {
  return (
    <Container>
      <Presentation />
      <AboutMe />
    </Container>
  );
}
