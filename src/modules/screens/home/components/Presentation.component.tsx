import { Prof_Picture } from "@/assets";
import { Button, GitHub, Linkedin } from "@/ui";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export const Presentation = () => {
  return (
    <section className="flex items-center flex-col-reverse sm:flex-row">
      <div className="flex-1 flex space-y-2 flex-col pr-[11px]">
        <h1 className="font-bold text-3xl sm:text-4xl">Fullstack Developer</h1>
        <p>
          Hola 👋 me llamo Octavio, <span className="font-semibold">ovct</span>{" "}
          para los amigos. Soy programador{" "}
          <span className="decoration-yellow-400 underline dark:decoration-yellow-600">
            Fullstack {process.env.SENIORITY} especializado en React y NodeJS
          </span>
          ,{" "}
          <span className="underline decoration-pink-400 dark:decoration-pink-600">
            UI Designer
          </span>{" "}
          y{" "}
          <span className="underline decoration-cyan-400 dark:decoration-cyan-600">
            músico
          </span>
          🎹.
        </p>
        <div className="flex space-x-4">
          <Link
            href={"https://www.linkedin.com/in/octaviocossy"}
            className="flex items-center font-semibold"
            target="_blank"
          >
            <Linkedin className="mr-1" />
            LinkedIn
          </Link>
          <Link
            href={"https://github.com/Octaviocossy"}
            className="flex items-center font-semibold"
            target="_blank"
          >
            <GitHub className="mr-1" />
            GitHub
          </Link>
          <Link
            href={'https://drive.google.com/file/d/1cRwc9HxzYJPiDLpLME3IZ731jkt_OFZ6/view?usp=sharing'}
            className="flex items-center font-semibold"
          >
            <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
            CV
          </Link>
        </div>
      </div>
      <Image
        src={Prof_Picture}
        alt="Picture of the author"
        className="rounded-full w-[192px] mb-8 sm:mb-0 sm:w-36"
      />
    </section>
  );
};
