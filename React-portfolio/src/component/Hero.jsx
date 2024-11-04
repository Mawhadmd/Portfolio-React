import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showA2, setShowA2] = useState(false);
  const [showA3, setShowA3] = useState(false);

  const AString = 
    "I'm a computer science student and dedicated full-stack developer specializing in crafting interactive, secure, and scalable web applications. With experience in React, Node.js, and Express.js, I develop dynamic applications backed by databases like MySQL, MongoDB, and PostgreSQL.";
  
  const AString2 = "My recent projects, such as a TodoList app with full authentication, a PHP-based chat app with AJAX, and an automated Python blogging platform using APIs and NLP, showcase my versatility and technical depth.";

  const AString3 = "I’m skilled in both frontend and backend, bringing practical experience in JavaScript, Python automation, PHP, and Java. Currently open to internship opportunities, excited to contribute to innovative projects and grow within a collaborative team.";
  const AString0 = "Software Developer | Web Scraping & Automation"
  const array1 = AString.split(' ');
  const array2 = AString2.split(' ');
  const array3 = AString3.split(' ');
  const array0 = AString0.split(' ');
  const animationseconds = 0.005
  useEffect(() => {

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
  }, []);

  const generateSpans = (arr) => {
    return arr.map((word, i) => (
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
        <h1>{generateSpans(array0)}</h1>
        <p >
          {generateSpans(array1)}
        </p>
        
      
          <p >
            {showA2&&generateSpans(array2)}
          </p>
      
        
        
          <p >
            {showA3&&generateSpans(array3)}
          </p>
       
      </div>
    </main>
  );
};

export default Hero;
