import { useEffect, useRef, useState } from "react";
import "../Styles/App.scss";
import React from "react";

import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer";
import Hero from "../component/MainSections/Hero";
import ProjectsGrid from "../component/MainSections/Gitprojects/ProjectsGrid";
import AboutMe from "../component/MainSections/AboutMe";
import Skills from "../component/MainSections/Skills Section/Skills";
import Experience from "../component/MainSections/Experience";
import NavBarList from "../component/NavBar/NavBarList";
import useThrottle from "../CustomeHook/useThrottle";



function App() {
  const [TimeHasExpired, SetExpired] = useState<boolean>(true);
  const EXPIRY_TIME = 12 * 60 * 60 * 1000;
  const lastchangetime = useRef<any>(Date.now());
  const throttle = useThrottle(setxandy,150)
  function setxandy({ x, y }: {x:number, y:number}){
 
    document.documentElement.style.setProperty("--x", `${Math.round(x)}`);
    document.documentElement.style.setProperty("--y", `${Math.round(y)}`);
  
}
  useEffect(() => {
    


    function handlethrottle(e:MouseEvent){
        throttle(e)
    }
    window.addEventListener("mousemove",({x,y})=>setxandy({x,y}));
    return () => {
      window.addEventListener("mousemove", ({x,y})=>setxandy({x,y}));
  };
  },[]);
  
  useEffect(() => {
    //gets data form github if 6 hours passed since last update
    const storedTime = localStorage.getItem("githubProjectsTime");
    let fetchon = storedTime
      ? Date.now() - parseInt(storedTime) > EXPIRY_TIME
      : true;
    if (storedTime) SetExpired(fetchon);

    if (fetchon) {
      console.log("fetching data");
      fetch("https://api.github.com/search/repositories?q=user:mawhadmd")
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("githubProjects", JSON.stringify(res));
          localStorage.setItem("githubProjectsTime", Date.now().toString());
          SetExpired(true);
          window.location.reload();
        })
        .catch((e) => {
          console.error("Error fetching data:", e);
        });
    }
  }, []);


  return (
    <>
      {/* <div className="Loadingscreen" style={loaded}> 

    </div> */}
      <div className="container">
        <NavBar />
        <NavBarList left={true} />
        <Hero />
      </div>
      <AboutMe />
      <Skills />
      <Experience />

      <ProjectsGrid TimeHasExpired={TimeHasExpired} />
      <Footer />
    </>
  );
}

export default App;
