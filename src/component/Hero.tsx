import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { h1 } from 'framer-motion/client';


const AString = 
"I'm a computer science student and dedicated full-stack developer specializing in crafting interactive, secure, and scalable web applications. With experience in React, Node.js, and Express.js, I develop dynamic applications backed by databases like MySQL, MongoDB, and PostgreSQL.";

const AString2 = "My recent projects, such as a TodoList app with full authentication, a PHP-based chat app with AJAX, and an automated Python blogging platform using APIs and NLP, showcase my versatility and technical depth.";

const AString3 = "I’m skilled in both frontend and backend, bringing practical experience in JavaScript, Python automation, PHP, and Java. Currently open to internship opportunities, excited to contribute to innovative projects and grow within a collaborative team.";
const AString0 = "Software Developer | Web Scraping & Automation"
var ArrayofspanStrings = [
  "Developer – experienced with JavaScript, React, Node.js, and backend technologies.",
  "Web Programmer – created and manipulated web applications and layouts.",
  "Tech Enthusiast – explored various aspects of coding and technology, including APIs, web scraping, and app development.",
  "Problem Solver – worked on solutions like authentication and complex layouts in web development.",
  "Front-end Specialist – strong focus on the visual and user-facing parts of applications.",
  "Full-Stack Developer – knowledge of both the backend (e.g., Express, MySQL) and frontend technologies.",
  "Innovative Learner – continually building new projects to enhance learning.",
  "UI/UX Implementer – interested in creating appealing themes and user interfaces.",
  "Technical Explorer – proactive in testing out new libraries, tools, and frameworks.",
  "SaaS & App Builder – inclined toward developing useful applications.",
  "SEO Strategist – understanding of the importance of SEO, as seen from interest in keyword strategies.",
  "Software Developer – broad development skills that span across different technologies and solutions.",
  "Web Scraping Expert – experienced in creating scripts to extract data and automate tasks efficiently.",
  "Automation Specialist – builds processes that streamline workflows and perform repetitive tasks automatically."
];

const array1 = AString.split(' ');
const array2 = AString2.split(' ');
const array3 = AString3.split(' ');
const array0 = AString0.split(' ');
const animationseconds = 0.01
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random()*14+1));
  const [showA2, setShowA2] = useState<boolean>(false);
  const [showA3, setShowA3] = useState<boolean>(false);
  const [Sliderhover, setSliderhover] = useState<boolean>(false);
  const [abtme, setabtme] = useState<boolean>(false)
  const [h1height, seth1height] = useState<{ height: string | number }>({ height: 'auto' });
  const slideref = useRef<HTMLDivElement | null>(null);
  const handleAnimationComplete = () => {
   if (slideref.current) {
    const newHeight: number = slideref.current.offsetHeight;
    if (h1height.height !== newHeight) {
      seth1height({ height: newHeight });
    }
  }
  }
  useEffect(()=>{console.log(Sliderhover)}, [Sliderhover])
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ArrayofspanStrings.length);
    }, Sliderhover? 10000: 3000);
  
    return () => clearInterval(interval);
  }, [Sliderhover]);
  
  useEffect(() => {
    if (abtme){
    const array2Timeout = setTimeout(() => {
      setShowA2(true);
    }, array1.length * (animationseconds*1000)); 

  
    const array3Timeout = setTimeout(() => {
      setShowA3(true);
    }, (array1.length + array2.length) * (animationseconds * 1000)); 

    return () => {
      clearTimeout(array2Timeout);
      clearTimeout(array3Timeout);
    };
  }
  }, [abtme]);

  const generateSpans = (arr: string[]) => {
    return arr.map((word: string, i: number) => (
      <span key={`${word}-${i}`} style={{ overflow: 'hidden' }}>
        <motion.span 
          style={{ display: 'flex', width: 'fit-content', height: 'fit-content'}}
          initial={{ transform: 'translateY(-200px)' }} 
          animate={{ transform: 'translateY(0px)' }}
          transition={{
            duration: 1,
            ease: 'ease',
            delay: animationseconds * i 
          }}
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  return (
    <main>
      <div>
          <h1 
      className='SliderSpan'
      style={h1height}
      >
          <AnimatePresence mode='wait' initial={false}>
          <motion.div
          onHoverStart={()=>{setSliderhover(true)}}
          onHoverEnd={()=>{setSliderhover(false)}}
          ref={slideref}
          initial={{ transform: 'translateY(-100%)', opacity: 0 }}
          animate={{ transform: 'translateY(0px)', opacity: 1,  }}
          exit={{ transform: 'translateY(100%)', opacity: 0 }}
          onAnimationStart={
            handleAnimationComplete
          }
          transition={{
            duration: 0.3
          }}
          key={currentIndex}
        >
          {ArrayofspanStrings[currentIndex]}
        </motion.div>
      </AnimatePresence>
         
        </h1>
        <button onClick={()=>setabtme(true)}>About Me</button>
        <p >
          {abtme && generateSpans(array1)}
        </p>
        
      
          <p >
            {abtme && showA2&&generateSpans(array2)}
          </p>
      
        
        
          <p >
            {abtme && showA3&&generateSpans(array3)}
          </p>
       
      </div>
    </main>
  );
};

export default Hero;
