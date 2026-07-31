import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import OpenSource from "./components/OpenSource/OpenSource";
import TechStack from "./components/TechStack/TechStack";
import Journey from "./components/Journey/Journey";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <OpenSource />
        <TechStack />
        <Journey />
      </main>
    </>
  );
}

export default App;
