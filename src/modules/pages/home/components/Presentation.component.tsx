import { Prof_Picture } from "@/assets";
import Image from "next/image";

export const Presentation = () => {
  return (
    <section className="flex items-center flex-col-reverse sm:flex-row">
      <div className="flex-1 flex space-y-2 flex-col pr-[11px]">
        <h1 className="font-bold text-3xl sm:text-4xl">Fullstack Developer</h1>
        <p>Hola 👋 me llamo Octavio, <span className="font-semibold">ovct</span> para los amigos. Soy programador <span className="decoration-yellow-400 underline dark:decoration-yellow-600">Fullstack {process.env.SENIORITY} especializado en React y NodeJS</span>, <span className="underline decoration-pink-400 dark:decoration-pink-600">UI Designer</span> y <span className="underline decoration-cyan-400 dark:decoration-cyan-600">músico</span>🎹.</p>
      </div>
      <Image src={Prof_Picture} alt="Picture of the author" className="rounded-full w-[192px] mb-8 sm:mb-0 sm:w-36" />
    </section>
  );
};
