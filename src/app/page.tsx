import { Container } from "@/ui";
import { AboutMe, Experience, Presentation, Skills } from "@/pages/home";

export default function Home() {
  return (
    <Container>
      <Presentation />
      <AboutMe />
      <Experience />
      <Skills />
      {/* projects / freelance */}
      {/* lastest posts */}
    </Container>
  );
}
