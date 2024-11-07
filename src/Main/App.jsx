import { useEffect, useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "../Styles/App.scss";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import ProjectsGrid from "../component/ProjectsGrid";
import AboutMe from "../component/AboutMe";

function App() {
  const EXPIRY_TIME = 12 * 60 * 60 * 1000; 
useEffect(()=>{
  const storedTime = localStorage.getItem('githubProjectsTime');
  const isExpired = storedTime? (Date.now() - parseInt(storedTime) > EXPIRY_TIME? true: false): false
  console.log(isExpired)
  if(isExpired) {
    console.log('fetching data')
    fetch('https://api.github.com/search/repositories?q=user:mawhadmd')
        .then(res => res.json())
        .then((res) => {
            localStorage.setItem('githubProjects', JSON.stringify(res));
            localStorage.setItem('githubProjectsTime', Date.now().toString());
           
        })
        .catch((e) => {
            console.error('Error fetching data:', e);
        });
}

},[])
 

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
