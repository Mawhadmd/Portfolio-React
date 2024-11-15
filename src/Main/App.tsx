import { useEffect, useState } from "react";
import "../Styles/App.scss";
import React from 'react'

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import ProjectsGrid from "../component/ProjectsGrid";


function App() {
  const [TimeHasExpired, SetExpired] = useState<boolean>(true)
  const EXPIRY_TIME = 12 * 60 * 60 * 1000; 

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
 


  return (
    <>
      <NavBar />
      <Hero />
      <ProjectsGrid TimeHasExpired = {TimeHasExpired} />
      <Footer />
    </>
  );
}

export default App;
