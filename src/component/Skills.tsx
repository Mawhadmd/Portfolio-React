import React, { useEffect, useRef, useState } from "react";
import database from "../assets/database-storage.png";
import softwareeng from "../assets/software-development.png";
import backend from "../assets/backend.png";
import fullstack from "../assets/full-stack-developer.png";
import frontend from "../assets/FrontEnd.png";
import WebScraping from "../assets/web-crawler.png";
import { animate, delay, easeInOut, motion } from "framer-motion";
// Import all images from the assets folder
import css from '../assets/css.png';
import html from '../assets/html.png';
import express from '../assets/expressjs.webp';
import flask from '../assets/flask.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind1.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import mysql from '../assets/mysql.webp';
import nodejs from '../assets/Node.js_logo.svg.png';
import php from '../assets/PHP-logo.svg.png';
import postgresql from '../assets/Postgresql_elephant.svg.png';
import python from '../assets/Python-logo-notext.svg.png';
import react from '../assets/react-icon_svg_.webp';
import scss from '../assets/scss.svg';
import sql from '../assets/sql.png';
import typescript from '../assets/Typescript_logo.svg.png';
import gimp from '../assets/gimp.png';


export const assetsArray = [

  { name: 'CSS', image: css },
  { name: 'Gimp', image: gimp },
  { name: 'HTML', image: html },
  { name: 'Express', image: express },
  { name: 'Flask', image: flask },
  { name: 'Git', image: git },
  { name: 'GitHub', image: github },
  { name: 'Tailwind', image: tailwind },
  { name: 'Java', image: java },
  { name: 'JavaScript', image: javascript },
  { name: 'MySQL', image: mysql },
  { name: 'Node.js', image: nodejs },
  { name: 'PHP', image: php },
  { name: 'PostgreSQL', image: postgresql },
  { name: 'Python', image: python },
  { name: 'React', image: react },
  { name: 'SCSS', image: scss },
  { name: 'SQL', image: sql },
  { name: 'TypeScript', image: typescript },
];


interface SkillData {
  Icon: string;
  Skill: string;
  Description: string;
}

const Data: SkillData[] = [
  {
    Icon: backend, // Placeholder for an icon
    Skill: "Back-End Development",
    Description:
      "Proficient in building robust server-side applications using Node.js, Express.js, and Python. Skilled in designing RESTful APIs and managing back-end logic.",
  },
  {
    Icon: fullstack, // Placeholder for an icon
    Skill: "Full-Stack Development",
    Description:
      "Experience in developing full-stack applications using React.js for front-end and Node.js/Express.js for back-end with seamless integration of databases.",
  },
  {
    Icon: WebScraping, // Placeholder for an icon
    Skill: "Web Scraping & Automation",
    Description:
      "Strong expertise in Python web scraping using libraries like BeautifulSoup, Selenium, and HTTPX. Automated repetitive tasks to streamline workflows.",
  },
  {
    Icon: database, // Placeholder for an icon
    Skill: "Database Management",
    Description:
      "Skilled in designing and managing relational and non-relational databases using MySQL, PostgreSQL, and MongoDB, ensuring high-performance querying and data integrity.",
  },
  {
    Icon: frontend, // Placeholder for an icon
    Skill: "Front-End Development",
    Description:
      "Developed user-friendly interfaces with attention to accessibility and usability, applying principles of responsive design using HTML, CSS, and Sass.",
  },
  {
    Icon: softwareeng, // Placeholder for an icon
    Skill: "Software Engineering",
    Description:
      "Knowledge of software engineering principles like SDLC, Agile methodologies, and team collaboration for delivering scalable and maintainable solutions.",
  },
];

const Slidingskills = () => {
  const Items = ({i,img}:{i:number,img:{name:string, image:string}}) => {
    return(
      <div className="iteminslider">
        <img alt={`Item ${i}`}  src={img.image}></img>
      </div>
    )
  }
  const items = [];
  for (let k = 0; k < assetsArray.length; k++) {
    items.push(<Items key={k} i={k} img={assetsArray[k]} />);
  }
  return(
    <>
    {items}

    </>
  );
}

const ComponentName = () => {
const [animate,setanimate] = useState<boolean>(false)

  return (
    <>
    
    <motion.section onViewportEnter={()=>{setanimate(true)}} viewport={{amount:0.5}} className="Skills">
      {Data.map((item: SkillData, index: number) => {
        return (
          <motion.div
          key={index} 
          viewport={{once:true}}
          transition={
            {
                type: 'spring',
                duration:1,
                delay:0.2*index,
                ease: easeInOut
            }
          }
          animate={
           animate? { opacity: [0, 1],
           x: [(Math.random() * 700 + 300) * (Math.random() < 0.5 ? 1 : -1), 0],
           y: [(Math.random() * 700 + 300) * (Math.random() < 0.5 ? 1 : -1), 0]}: {opacity: 0}
          }
          
          layout
          
          className="SkillBlock">

            <img src={item.Icon} alt="Webdev" />
            <h1>{item.Skill}</h1>
            <p>{item.Description}</p>
           
          </motion.div>
        );
      })}
      
    </motion.section>
    <div className="Slidingskills">
    <Slidingskills/>
    <Slidingskills/>
    </div>
    </>
  );
};

export default ComponentName;
