import Container from "@components/container";
import { getClient } from "@lib/sanity";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "use-web3forms";
import Newsletter from "@components/news-letter";
import { configQuery } from "@lib/groq";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon
} from "@heroicons/react/outline";

//create tailwindcss card component with background image, title, and description

export default function Contact({ siteconfig }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,

    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");

  // const radio = useEffect(() => {
  //    radio = document.getElementById("other");

  //   return () => {
  //     radio;
  //   };
  // }, [radio]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = siteconfig?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    apikey: apiKey,
    from_name: "Events Form",
    subject: "New Contact Message from Dream Events Website",
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Contact Us
        </h1>
        <div className="text-center">
          <p className="text-lg">We are a here to help!</p>
        </div>

        <div className="grid my-10 md:grid-cols-2">
          <div className="my-10 ">
            <h2 className="text-2xl font-semibold dark:text-white">
              Contact Dream
            </h2>
            <p className="max-w-sm mt-5">
              Have something to say? We are here to help. contact us
              if you have any question. If your ready htmlFor your
              dream fill out the form to book your event.
            </p>
            <a
              href="/about#faq"
              className="hover:cursor-pointer underline">
              <p className="mt-4">frequently asked questions?</p>
            </a>

            <div className="mt-5">
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <LocationMarkerIcon className="w-4 h-4" />
                <span>1734 Sanfransico, CA 93063</span>
              </div>
              {siteconfig?.email && (
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <MailIcon className="w-4 h-4" />
                  <a href={`mailto:${siteconfig.email}`}>
                    {siteconfig.email}
                  </a>
                </div>
              )}
              {siteconfig?.phone && (
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <PhoneIcon className="w-4 h-4" />
                  <a href={`tel:${siteconfig.phone}`}>
                    {siteconfig.phone}
                  </a>
                </div>
              )}
            </div>
            <Newsletter />
          </div>
          <div id="booking" className="my-10 ">
            <h2 className="text-2xl font-semibold dark:text-white">
              Book Event
            </h2>

            {/* extract form to components file*/}
            <form onSubmit={handleSubmit(onSubmit)} className="my-10">
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}></input>

              <div className="mb-5">
                <label htmlFor="full_name" className="">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  placeholder="Your Name"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="email_address" className="">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="example@dream_events.com"
                  name="email"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email"
                    }
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>
              <div className="mb-5">
                <label htmlFor="event_dates" className="">
                  Date of event?
                </label>
                <input
                  id="event_date"
                  type="datetime-local"
                  name="date"
                  autoComplete="false"
                  onChange={setDate}
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                    errors.date
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("date", {
                    required: "select a date and time"
                  })}
                />
                {errors.date && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.date.message}</small>
                  </div>
                )}
              </div>
              {/*BREAK */}
              <div className="mb-5">
                <label htmlFor="event_theme" className="">
                  Theme?
                </label>
                <input
                  type="text"
                  id="event_theme"
                  placeholder="Event Theme"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                    errors.theme
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("theme", {
                    required: "Theme is required",
                    maxLength: 30
                  })}
                />
                {errors.theme && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.theme.message}</small>
                  </div>
                )}
              </div>
              {/*BREAK */}
              <div className="mb-5">
                <label htmlFor="event_location" className="">
                  Location of event:
                </label>
                <input
                  type="text"
                  id="event_location"
                  placeholder="Town/City/State"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                    errors.theme
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("location", {
                    required: "location is required",
                    maxLength: 30
                  })}
                />
                {errors.location && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.location.message}</small>
                  </div>
                )}
              </div>
              {/*BREAK */}
              <div className="mb-5">
                <label htmlFor="event_type">
                  What type of event:
                </label>
                <div
                  id="event_type"
                  className="grid grid-cols-2 grid-rows-3 gap-4 w-full px-4 py-4 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4 ">
                  <div>
                    <input
                      type="radio"
                      id="baby-shower"
                      name="event_type"
                      value="Baby shower"
                      className=""
                    />
                    <label htmlFor="baby-shower" className="ml-2">
                      Baby Shower
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="gender-reveal"
                      name="event_type"
                      value="Gender reveal"
                      className=""
                    />
                    <label htmlFor="gender-reveal" className="ml-2">
                      Gender Reveal
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="birthday-party"
                      name="event_type"
                      value="Birthday Party"
                    />
                    <label htmlFor="birthday-party" className="ml-2">
                      Birthday Party
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="kids-party"
                      name="event_type"
                      value="Kids Party"
                    />
                    <label htmlFor="Kids-party" className="ml-2">
                      Kids Party
                    </label>
                  </div>  
                  <div>
                    <input
                      type="radio"
                      id="wedding"
                      name="event_type"
                      value="Wedding"
                    />
                    <label htmlFor="wedding" className="ml-2">
                      Wedding
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="dinner"
                      name="event_type"
                      value="Dinner"
                    />
                    <label htmlFor="dinner" className="ml-2">
                      Dinner Party
                    </label>
                  </div>

                  <br />
                  <div>
                    <input
                      type="radio"
                      id="other"
                      name="event_type"
                      value={value}
                    />
                    <label htmlFor="other" className="ml-2">
                      Other
                      <input
                        type="text"
                        id="event_location"
                        placeholder="event type"
                        autoComplete="false"
                        onChange={handleChange}
                        className={`w-40 lg:w-full e px-4 py-1 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                          errors.type
                            ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                            : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        }`}
                        {...register("type", {
                          required:
                            "Type is required if other otherwise type N/a",
                          maxLength: 30,
                          minLength: 3
                        })}
                      />
                    </label>
                    {errors.type && (
                      <div className="mt-1 text-red-600">
                        <small>{errors.type.message}</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*BREAK */}
              <div className="mb-5">
                <label htmlFor="event_theme" className="">
                  Venue:
                </label>
                <input
                  type="text"
                  id="event_theme"
                  placeholder="Your venue"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                    errors.venue
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("venue", {
                    required: "venue is required",
                    maxLength: 30
                  })}
                />
                {errors.venue && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.venue.message}</small>
                  </div>
                )}
              </div>
              {/*BREAK */}
              <div className="mb-5">
                <label htmlFor="event_type">Budget for event:</label>
                <div
                  id="event_budget"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-500 dark:bg-gray-900   focus:ring-4  ${
                    errors.budget
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("budget", {
                    required: "budget is required",
                    
                  })}>
                  <div>
                    <input
                      type="radio"
                      id="baby-shower"
                      name="event_budget"
                      value="Baby shower"
                      className=""
                    />
                    <label htmlFor="baby-shower" className="ml-2">
                      £0 - £2000
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="baby-shower"
                      name="event_budget"
                      value="Baby shower"
                      className=""
                    />
                    <label htmlFor="baby-shower" className="ml-2">
                      £2000 - £4000
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="baby-shower"
                      name="event_budget"
                      value="Baby shower"
                      className=""
                    />
                    <label htmlFor="baby-shower" className="ml-2">
                      £4000 - £6000
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="baby-shower"
                      name="event_budget"
                      value="Baby shower"
                      className=""
                    />
                    <label htmlFor="baby-shower" className="ml-2">
                      £6000 or above
                    </label>
                  </div>

                  {errors.budget && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.budget.message}</small>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("message", {
                    required: "Enter your Message"
                  })}
                />
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    {" "}
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-sm text-center text-green-500">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-500">
                {message || "Something went wrong. Please try later."}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const config = await getClient(preview).fetch(configQuery);

  return {
    props: {
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
