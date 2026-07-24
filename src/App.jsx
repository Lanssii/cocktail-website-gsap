import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <h1 className="text-3xl text-indigo-300">App</h1>
    </>
  );
}

export default App;
