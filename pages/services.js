import Link from "next/link";
import Chevron from "../components/icons/chevron";
// import Image from "next/image";

//create tailwindcss card component with back ground image, title, and description
const Card = ({ title, description, image, link }) => {
  return (
    <div className="relative flex items-center justify-center  max-w-sm h-60 overflow-hidden shadow-lg rounded-md ">
      <div className="absolute bg-black/50 w-full h-full"></div>
      {/* <Image
        className="w-full rounded-lg object-cover"
        src={image}
        alt="Sunset in the mountains"
        loading="lazy"
        placeholder="blur"
        blurDataURL={image}
        layout="fill"
        loader={() => image}
      /> */}
      <img
        className="w-full rounded-lg object-cover"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="absolute bottom-0 h-full px-6 py-4 w-full z-20 text-white">
        <div className="font-bold text-xl my-4">{title}</div>
        <p className="text-white/75 text-base">{description}</p>
        <div className=" flex justify-end mt-10 mr-2">
          <div className="flex-end px-6 py-4">
            <Link href={link}>
              <a className="flex items-center  bg-pink-600 lg:hover:bg-pink-700 text-black dark:text-white font-bold py-2 px-4 rounded">
                Book Event <Chevron />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="dark:bg-black  text-black dark:text-gray-400 ">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
        <div className="max-w-xl text-center mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Services we offer...
          </h2>

          <p className="mt-4 text-black dark:text-gray-400">
            We offer a variety of services from full service event
            planning to day-of coordination. We can help you with any
            event from baby showers to Weddings.
          </p>
          <a
            href="/about#faq"
            className="hover:cursor-pointer underline">
            <p className="mt-4">frequently asked questions?</p>
          </a>
        </div>

        <div className="ml-auto mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex justify-center">
            <Card
              title="Weddings"
              description="we provide catering services, floral arrangements, and photography."
              image="wedding.jpg"
              link="/contact#booking"
            />
          </div>

          <div className="flex justify-center">
            <Card
              title="Birthday Party"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image="party.jpg"
              link="/contact#booking"
            />
          </div>

          <div className="flex justify-center">
            <Card
              title="Dinner Party"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image="dinner-party.jpg"
              link="/contact#booking"
            />
          </div>
          <div className="flex justify-center">
            <Card
              title="Baby Showers"
              description=" we organize baby showers and provide all necessary items."
              image="babyshower.jpg"
              link="/contact#booking"
            />
          </div>
          <div className="flex justify-center">
            <Card
              title="Kids Party"
              description="We also do kids parties."
              image="kids-party.jpg"
              link="/contact#booking"
            />
          </div>
          <div className="flex justify-center">
            <Card
              title="Gender Reveal"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image="gender.jpg"
              link="/contact#booking"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
