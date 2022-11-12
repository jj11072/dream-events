import Link from "next/link";
import Hero from "@components/hero";
const Card = ({ title, description, image, link }) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg rounded-md outline outline-black">
      <img
        className="w-full rounded-lg"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      <div className="flex ">
        <div className="px-6 py-4">
          <Link href={link}>
            <a className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
              Book Event
            </a>
          </Link>
        </div>
        <div className="px-6 py-4">
          <Link href={link}>
            <a className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
              Book Event
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};



//create tailwindcss card component with back ground image, title, and description



const Services = () => {
  return (
    <section className="dark:bg-gray-900  text-black dark:text-gray-400 flex items-center justify-center">
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
           <Card title="Baby Showers" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." image="babyshower.jpg" link="/baby-shower" />
          </div>

          <div className="flex items-start">
            <Card title="Parties" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." image="babyshower.jpg" link="/wedding" />
          </div>

          <div className="flex items-start">
            <Card title="Parties" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." image="babyshower.jpg" link="/wedding" />
          </div>

          <div className="flex items-start">
            <Card title="Parties" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." image="babyshower.jpg" link="/wedding" />
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




