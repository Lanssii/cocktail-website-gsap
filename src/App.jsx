import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
      {/* HACK: div with full height that will allow us to test the scroll based animations as we do not have much content for page to be scrolled itself */}
    </main>
  );
}

export default App;
