
import ExperienceBar from "./components/Experience";
import Footer from "./components/footer";
import FooterButtons from "./components/footrButtons";
import Hero from "./components/hero";
import Stacks from "./components/stacks";

export default function Home() {
  return (
    <div className="font-sans lg:w-[450px] w-[400px] mx-auto text-white">
      <div className="w-full ">
       <Hero />
       <Stacks />
       <ExperienceBar />
       <Footer />
       </div>
    </div>
  );
}
