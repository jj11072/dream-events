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
                see more <Chevron />
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
      className=" text-black dark:text-gray-400 pb-8  relative">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto ">
        <div className=" max-w-xl text-center mx-auto bg-black/75  z-20 relative">
          <h2 className="text-3xl font-bold lg:text-5xl ">
            What we do...
          </h2>

          <p className="mt-4 text-black dark:text-gray-400">
            We offer a variety of services from full service event
            planning to day-of coordination. We can help you with any
            event from baby showers to Weddings.
          </p>
        </div>

        <div className=" absolute top-24 h-full hidden lg:grid grid-cols-1 lg:grid-cols-2 left-0 right-0 gap-8 p-8 dark:text-black">
          <span className="text-10xl dream ">DREAM</span>
          <span className="text-10xl dream">EVENTS</span>
          <span className="text-10xl -mt-20  dream">EVENTS</span>
          <span className="text-10xl -mt-20 ml-2 dream">DREAM</span>
          <span className="text-10xl -mt-20  dream">DREAM</span>
          <span className="text-10xl -mt-20 dream">EVENTS</span>
        </div>

        <div className="ml-auto mt-8 grid grid-cols-1  gap-8 md:mt-16 md:grid-cols-2 md:gap-20 lg:grid-cols-2">
          <div className="flex justify-center">
            <Card
              title="See our services"
              description="We offer a variety of services, check out here."
              image="wedding.jpg"
              link="/services"
            />
          </div>

          <div className="flex justify-center">
            <Card
              title="Visit our blog"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image="party.jpg"
              link="/blog"
            />
          </div>

          <div className="flex justify-center">
            <Card
              title="View our gallery"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image="dinner-party.jpg"
              link="/gallery"
            />
          </div>
          <div className="flex justify-center">
            <Card
              title="Book an event"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image="dinner-party.jpg"
              link="/contact#booking"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;