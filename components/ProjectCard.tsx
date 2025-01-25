import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

type ProjectCardProps = {
  imgSrc: string;
  projectTitle: string;
  projectDesc: string;
  projectLink: string;
  hasRepo?: boolean;
};

export default function ProjectCard({
  imgSrc,
  projectTitle,
  projectDesc,
  projectLink,
  hasRepo,
}: ProjectCardProps) {
  return (
    <Link href={projectLink} target="_blank">
      <div className="group hover:scale-105 dark:hover:shadow-inner sm:p-3 sm:border dark:border-none dark:hover:shadow-white/5 hover:shadow-lg hover:cursor-pointer mb-6 items-center sm:rounded-2xl transition md:flex-row md:max-w-xl dark:hover:bg-white/5">
        <Image
          className="sm:rounded-xl w-full sm:border dark:sm:border-slate-900/5"
          src={imgSrc}
          width={500}
          height={500}
          alt="Project Screenshot"
        />
        <div className="flex flex-col justify-between px-4 leading-normal sm:pb-0 dark:sm:bg-slate-900/0 ">
          <h5 className="flex mb-2 text-xl mt-4 font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300 text-gray-900 dark:text-slate-300">
            {projectTitle}
            <IconArrowUpRight
              stroke={3}
              size={16}
              className="mt-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
            />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-slate-400">
            {projectDesc}
          </p>
          {hasRepo && (
            <div className="flex justify-end">
              <Link
                href={`http://www.github.com/oceansf/${projectTitle
                  .split(" ")
                  .join("")
                  .toLowerCase()}`}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 hover:cursor-pointer hover:text-blue-500 dark:hover:text-slate-50 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
