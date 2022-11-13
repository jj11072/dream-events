import React from "react";

const hero = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 dark:bg-black/75 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r dark:sm:from-black/80 sm:from-white/95 sm:to-white/25 dark:sm:to-black/0"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl dark:text-white">
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
              href="#"
              className="block w-full rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-700 focus:outline-none focus:ring active:bg-rose-pink sm:w-auto">
              Book Now
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