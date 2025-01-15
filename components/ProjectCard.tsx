import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  imgSrc: string;
  projectTitle: string;
  projectDesc: string;
};

export default function ProjectCard({
  imgSrc,
  projectTitle,
  projectDesc,
}: ProjectCardProps) {
  return (
    <div className="hover:-translate-y-1 dark:hover:shadow-inner sm:p-3 sm:border dark:border-none dark:hover:shadow-white/5 hover:shadow-lg hover:cursor-pointer flex flex-col mb-6 items-center sm:rounded-2xl transition md:flex-row md:max-w-xl dark:hover:bg-white/5">
      <div className="relative w-full">
        <Link href="https://github.com/oceansf/groovehunt" target="_blank">
          <Image
            className="sm:rounded-xl"
            src={imgSrc}
            width={400}
            height={200}
            alt="Placeholder image"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between sm:pl-3 px-4 leading-normal sm:pb-0 dark:sm:bg-slate-900/0">
        <h5 className="mb-2 text-xl mt-4 sm:mt-0 font-bold tracking-tight text-gray-900 dark:text-slate-300">
          {projectTitle}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-slate-400">
          {projectDesc}
        </p>
      </div>
    </div>
  );
}
