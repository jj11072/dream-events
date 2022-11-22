import React from "react";

const hero = () => {
  return (
    <section className="relative z-50 ">
      <div className="absolute inset-0 ">
        <img
          className="w-full rounded-b-3xl object-cover h-full"
          src="dinner.jpg"
          alt="Sunset in the mountains"
        />
      </div>
      <div className="absolute inset-0 dark:bg-black/40 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r dark:sm:from-black/100 sm:from-white/95 sm:to-white/25 dark:sm:to-black/0 rounded-b-lg"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-100">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-5xl font-extrabold sm:text-5xl dark:text-white">
            Let us manage your
            <strong className="block font-extrabold text-pink-600">
              Dream event.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed dark:text-white">
            We are a full service event planning company that
            specializes in social events. We are here to make your
            event a dream come true.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/contact#booking"
              className="block w-full rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-700 focus:outline-none focus:ring active:bg-rose-pink sm:w-auto">
              Book Event
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-pink-600 shadow hover:text-pink-700 focus:outline-none focus:ring active:text-pink-500 sm:w-auto">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero