import Container from "@components/container";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Image from "next/image";
import Link from "next/link";
import Faq from "@components/ui/faq"
import { PortableText } from "@lib/sanity";

export default function About({ authors }) {
  console.log(authors);

  return (
    <>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          About Us
        </h1>
        <div className="text-center">
          <p className="text-lg">We are the Dream Team.</p>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
          {authors.slice(0, 3).map(author => {
            const { width, height, ...imgprops } = GetImage(
              author?.image
            );

            return (
              <div
                key={author._id}
                className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
                <Image
                  {...imgprops}
                  alt={author.name || " "}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 320px) 100vw, 320px"
                />
                <div className="sm:hover:opacity-0 absolute opacity-0 bg-black/75 h-full md:hover:opacity-100 flex items-center px-2.5 ">
                  {author.bio && <PortableText value={author.bio} />}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto prose text-center dark:prose-invert mt-14">
          <p>
            We provide quality services to our clients. We are a small
            passionate team and we love what we do. We are always
            looking for new opportunities to work with new clients.
          </p>
          <p>
            We hire only the best and most experienced professionals
            in the industry, To ensure that we provide the best
            services to our clients.
          </p>
          <p>
            <Link href="/contact">Get in touch</Link>
          </p>
        </div>
        <div>
          <Faq />
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const authors = await getClient(preview).fetch(authorsquery);
  const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      authors: authors,
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
