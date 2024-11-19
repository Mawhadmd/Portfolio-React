import { useEffect, useState } from "react";
import "../Styles/App.scss";
import React from 'react'

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import ProjectsGrid from "../component/ProjectsGrid";
import AboutMe from "../component/AboutMe";
import Skills from "../component/Skills";
import Experience from "../component/Experience";
import NavBarList from "../component/NavBarList";


function App() {
  const [TimeHasExpired, SetExpired] = useState<boolean>(true)
  const [loaded, SetLoaded] = useState<any>({})
  const EXPIRY_TIME = 12 * 60 * 60 * 1000; 
useEffect(()=>{
  document.body.addEventListener('pointermove', ({x,y})=>{
    document.documentElement.style.setProperty('--x', `${Math.round(x)}`)
    document.documentElement.style.setProperty('--y', `${Math.round(y)}`)
  })
})
useEffect(()=>{ //gets data form github if 6 hours passed since last update
  const storedTime = localStorage.getItem('githubProjectsTime');
  let fetchon =storedTime? Date.now() - parseInt(storedTime) > EXPIRY_TIME: true
  if(storedTime)
    SetExpired(fetchon)

  if(fetchon) {
    console.log('fetching data')
    fetch('https://api.github.com/search/repositories?q=user:mawhadmd')
        .then(res => res.json())
        .then((res) => {
            localStorage.setItem('githubProjects', JSON.stringify(res));
            localStorage.setItem('githubProjectsTime', Date.now().toString());
            SetExpired(true)
            window.location.reload();
        })
        .catch((e) => {
            console.error('Error fetching data:', e);
        });
}

},[])
 
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(() => {
        SetLoaded({display: 'none'})
        // SetLoaded({transform: 'translate(-100%,-100%)'})
      }, 500);
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
    {/* <div className="Loadingscreen" style={loaded}> 

    </div> */}
      <div className="container">
      <NavBar />
      <NavBarList left={true}/>
      <Hero />
      </div>
      <AboutMe />
      <Skills/>
      <Experience/>
      <ProjectsGrid TimeHasExpired = {TimeHasExpired} />
      <Footer />
    </>
  );
}

export default App;
