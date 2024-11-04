import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "../Styles/App.scss";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import ProjectsGrid from "../component/ProjectsGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <ProjectsGrid />
      <Footer />
    </>
  );
}

export default App;
