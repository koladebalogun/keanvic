import { createClient } from "contentful";
import AboutBanner from "./aboutbanner/AboutBanner";
import AboutList from "./aboutlist/AboutList";
import AboutTestimonial from "./about-testimonial/AboutTestimonial";
import data from '../../data/about.json'

// async function getTestimonials() {
//   const client = createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
//   });

//   const res = await client.getEntries({ content_type: "testimonials" });

//   return res.items;
// }


export default async function page() {
  // const testimonials = await getTestimonials();
  // const about = data.about_us
  return (
    <div>
      <AboutBanner />
      {/* <AboutList data={about} />
      <AboutTestimonial testimonials={testimonials} /> */}
    </div>
  );
}
