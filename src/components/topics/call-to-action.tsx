import { RandomButton } from './random-button';

export const CallToAction = () => {
  return (
    <div
      className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left"
      data-testid="call-to-action"
    >
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

      <RandomButton />
    </div>
  );
};
