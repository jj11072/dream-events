import Link from "next/link";
import Hero from "@components/hero";
import { FaBaby } from "react-icons/fa";

const Services = () => {
  return (
    <section className="dark:bg-gray-900  text-black dark:text-gray-400">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes us special
          </h2>

          <p className="mt-4 text-black dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat dolores iure fugit totam iste obcaecati.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>

            <div className="ml-4">
              <h2 className="text-lg font-bold">Parties.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
              <span>
                <Link href="/">
                  <a> </a>
                </Link>
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>

            <div className="ml-4">
              <h2 className="text-lg font-bold">Dinner parties.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <FaBaby />
            </span>

            <div className="ml-4">
              <h2 className="text-lg font-bold">Baby Showers.</h2>

              <p className="mt-1 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="flex-shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </span>

            <div className="ml-4">
              <h2 className="text-lg font-bold">And Many More!</h2>

              <p className="mt-1 text-sm text-gray-400">
                Do you have an event in mind that you don't see here?
                Contact us and we can make it happen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <>
      <Hero />
      <Services />

      
    </>
  );
};




