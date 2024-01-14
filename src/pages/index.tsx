import Hero from "@/component/Hero";
import Technology from "@/component/Technology";
import Testimonial from "@/component/Testimonial";

function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-4">
      <section className="col-span-full p-5  md:col-span-7">
        <Hero></Hero>
      </section>
      <section className="col-span-full p-5 bg-green-200 md:col-span-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero
        ipsam laudantium molestiae ipsa asperiores saepe dolor voluptas nobis
        cumque!
      </section>
    </main>
  );
}

export default HomePage;
