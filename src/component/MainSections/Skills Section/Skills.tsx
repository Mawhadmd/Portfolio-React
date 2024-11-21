import React, { useContext, useEffect, useRef, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import database from "../../../assets/database-storage.png";
import softwareeng from "../../../assets/software-development.png";
import backend from "../../../assets/backend.png";
import fullstack from "../../../assets/full-stack-developer.png";
import frontend from "../../../assets/FrontEnd.png";
import WebScraping from "../../../assets/web-crawler.png";
import Slidingskills from "./SlidingSkills";
import { refsprovider } from "../../../Main/main";
import { assetsArray } from "./iconassests";

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

const ComponentName = () => {
  const [animate, setanimate] = useState<boolean>(false);
  const { skillsref, techstackref }: any = useContext(refsprovider);
  return (
    <>
      <motion.section
      ref={skillsref}
        onViewportEnter={() => {
          setanimate(true);
        }}
        viewport={{ amount: 0.5 }}
        className="Skills"
      >
        {Data.map((item: SkillData, index: number) => {
          return (
            <motion.div
            ref={techstackref}
              key={index}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.2 * index,
                ease: easeInOut,
              }}
              animate={
                animate
                  ? {
                      opacity: [0, 1],
                      x: [
                        (Math.random() * 700 + 300) *
                          (Math.random() < 0.5 ? 1 : -1),
                        0,
                      ],
                      y: [
                        (Math.random() * 700 + 300) *
                          (Math.random() < 0.5 ? 1 : -1),
                        0,
                      ],
                    }
                  : { opacity: 0 }
              }
              layout
              className="SkillBlock"
            >
              <img src={item.Icon} alt="Webdev" />
              <h1>{item.Skill}</h1>
              <p>{item.Description}</p>
            </motion.div>
          );
        })}
      </motion.section>
      <div className="Slidingskills">
        <Slidingskills assetsArray={assetsArray} />
        <Slidingskills assetsArray={assetsArray} />
      </div>
    </>
  );
};

export default ComponentName;
