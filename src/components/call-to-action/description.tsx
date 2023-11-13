import { Icons } from '../icons';

export const Description = () => {
  return (
    <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Unblock your next skill today
      </h2>

      <p className="mt-4 text-gray-600">
        Dive into Node.js, React, Angular, Java, Spring Boot, and Python with
        our comprehensive courses. Master server-side JavaScript, build dynamic
        interfaces, and explore versatile Java and Python applications. Elevate
        your skills and chart a path for continuous growth in these essential
        technologies.
      </p>

      <a
        href="#"
        className="mt-8 flex max-w-fit items-center gap-2 rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Choose one to me <Icons.Random />
      </a>
    </div>
  );
};
