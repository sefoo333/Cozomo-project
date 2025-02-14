import Image from "next/image";
import Home2 from "./_componants/Home";
import Recycling from "./_componants/Recycling";
import Cozmo from "./_componants/about_projects/Cozmo";
import Projects from "./_componants/Projects";
import Contact from "./_componants/Contact";
import Footer from "./_componants/Footer";
import Window from "./_componants/Window";

export default function Home() {
  return (
    <div className="parent relative max-md:px-[30px]">
      <Home2 />
       <Recycling />
       <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
}
