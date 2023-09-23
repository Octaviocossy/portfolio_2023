import { Container } from "@/ui";
import { AboutMe, Experience, Presentation } from "@/pages/home";

export default function Home() {
  return (
    <Container>
      <Presentation />
      <AboutMe />
      <Experience />
    </Container>
  );
}
