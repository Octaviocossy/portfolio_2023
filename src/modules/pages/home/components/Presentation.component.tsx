import { Prof_Picture } from "@/assets";
import Image from "next/image";

export const Presentation = () => {
  return (
    <section className="flex items-center pt-[1rem] flex-col-reverse sm:flex-row">
      <div className="flex-1 flex space-y-2 flex-col pr-[11px]">
        <h1 className="font-bold text-3xl sm:text-4xl">Fullstack Developer</h1>
        <p>Hola 👋 me llamo Octavio, ovct para los amigos, soy programador Fullstack SSR especializado en React y NodeJS, UI Designer y musico 🎹.</p>
      </div>
      <Image src={Prof_Picture} alt="Picture of the author" className="rounded-full w-48 mb-8 sm:mb-0 sm:w-36" />
    </section>
  );
};
