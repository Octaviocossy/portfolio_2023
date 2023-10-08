import { Section, Title } from "@/ui";

export const AboutMe = () => {
  return (
    <Section className="flex flex-col space-y-1">
      <Title>Sobre Mi</Title>
      <p>
        Di comienzo a mis estudios en el año 2020 de manera autodidacta. Luego
        de familiarizarme con el desarrollo web y haber adquirido un stack
        básico, comencé en el 2021 una{" "}
        <span className="font-semibold">
          Tecnicatura Universitaria en Programación (UTN)
        </span>
        , de la cual estoy a punto de graduarme. En el año 2022 realicé una
        pasantía en <span className="font-semibold">Gestioner Soft</span> donde
        obtuve experiencia desarrollando aplicaciones React en el ámbito
        productivo. Actualmente, soy FullStack Developer en{" "}
        <span className="font-semibold">Janus Automation</span>.{" "}
        <span className="decoration-yellow-400 underline dark:decoration-yellow-600">
          Me encuentro en constante aprendizaje, intentando superarme día a día
          con el objetivo de entregar siempre una solución de mejor calidad
          que se adapte a las necesidades del cliente.
        </span>
      </p>
    </Section>
  );
};
