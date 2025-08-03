import "./App.css";
import BlobCursor from "./components/animation/BlobCusor";
import Header from "./components/header";
import About from "./components/sections/About";
import Banner from "./components/sections/Banner";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import Skill from "./components/sections/Skill";
import { useWindowSize } from "./hooks/use-window-size";

function App() {
  const { isMobile } = useWindowSize();

  return (
    <>
      {/* <LoadingScreenEffect /> */}
      <Header />

      <main className="relative">
        <div className="">
          <Banner />
          <About />
          <Projects />
          <Skill />
          <Contact />
        </div>
      </main>
      {!isMobile && (
        <BlobCursor
          blobType="circle"
          fillColor="transparent"
          trailCount={1}
          sizes={[30]}
          opacities={[1]}
          shadowColor="transparent"
          useFilter={false}
        />
      )}
    </>
  );
}

export default App;
