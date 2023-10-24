import { Details } from "@/components/Details/Details";
import { Gallery } from "@/components/Gallery/Gallery";

const Home = () => {
  return (
    <section className="w-full">
      <div className="w-full md:flex md:items-center md:justify-center md:gap-40 pb-5 md:py-16">
        <Gallery />
        <Details />
      </div>
    </section>
  );
};
export default Home;
