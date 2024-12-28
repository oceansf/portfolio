import Image from "next/image";

type ProjectCardProps = {
  imgSrc: string;
  projectTitle: string;
  projectDesc: string;
}

export default function ProjectCard({imgSrc, projectTitle, projectDesc}: ProjectCardProps ) {
  return (
    <div className="hover:cursor-pointer flex flex-col mb-6 sm:p-3 items-center rounded-2xl shadow-lg transition dark:shadow-none md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-slate-800">
      <div className="relative w-full aspect-video">
        <Image
          className="rounded-xl"
          src={imgSrc}
          width={400}
          height={400}
          alt="Placeholder image"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">
          {projectTitle}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-slate-400">
          {projectDesc}
        </p>
      </div>
    </div>
  );
}
