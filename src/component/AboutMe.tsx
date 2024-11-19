import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const AboutMe = () => {
  const [showA2, setShowA2] = useState<boolean>(false);
  const [showA3, setShowA3] = useState<boolean>(false);
  const [showA4, setShowA4] = useState<boolean>(false);
  const [abtme, setabtme] = useState<boolean>(false);
  const paragraphscontainerrefs = useRef<any>();
  const AString =
    "Hi! I’m Mohammed Awad; please call me Awad. I'm a Full-Stack Developer. I completed High School in Al Ain, Abu Dhabi, with a score of 97.03, which placed me at the top of my class. I'm Currently in my third year of a Bachelor of Computer Science. I received the dean’s honor due to my hard work and getting a 3.9 out of 4 GPA in the last semester. I have multiple projects that demonstrate my capabilities and efficiency at work.";
  const AString2 =
    "At this moment, I only have multiple small projects that I worked on, one of them was a PHP Chat-app with Ajax, The other one was my most recent one which is a React, Node js Toto-List. Initially, I used Express and implemented Auth and Database, then migrated to Firebase for Auth and Supabase for Database.";
  const AString3 =
    "I’m currently invested in learning Figma, and Tailwind,  And planning to build a big project that is actually worth exhibiting. I’ve not worked with clients before, hence it’ll be my pleasure to have my first job with you. ";
  const AString4 =
    "In the meanwhile, I use LeetCode to enhance my understanding of Data Structure and understand why and how each algorithm works. And Python for side web scraping, because who hates web scraping :)? It’s fascinating.";
  const animationseconds = 0.004;
  const array1 = AString.split(" ");
  const array2 = AString2.split(" ");
  const array3 = AString3.split(" ");
  const array4 = AString4.split(" ");

  useEffect(() => {
    if (abtme) {
      const array2Timeout = setTimeout(() => {
        setShowA2(true);
      }, array1.length * (animationseconds * 1000));

      const array3Timeout = setTimeout(() => {
        setShowA3(true);
      }, (array1.length + array2.length) * (animationseconds * 1000));
      const array4Timeout = setTimeout(() => {
        setShowA4(true);

      }, (array1.length + array2.length + array3.length) * (animationseconds * 1000));

      return () => {
        clearTimeout(array2Timeout);
        clearTimeout(array3Timeout);
        clearTimeout(array4Timeout);
      };
    }
  }, [abtme]);
  const generateSpans = (arr: string[]) => {
    return arr.map((word: string, i: number) => (
      <span key={`${word}-${i}`} style={{ overflow: "hidden" }}>
        <motion.span
          style={{
            display: "flex",
            width: "fit-content",
            height: "fit-content",
          }}
          initial={{ transform: "translateY(-200px)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{
            duration: 1,
            ease: "ease",
            delay: animationseconds * i,
          }}
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  return (
    <div className="AboutMe">
      <motion.h2 whileInView={{ y:[-100,0],opacity:[0,1], letterSpacing: ['50px','0px']}} viewport={{once: true}} transition={{duration: 0.4}} >AboutMe</motion.h2>
      <motion.div 
      onViewportEnter={()=>{setabtme(true);}}
      viewport={{once: true, amount: 'some'}}
      ref={paragraphscontainerrefs}>
        <p>{abtme && generateSpans(array1)}</p>

        <p>{abtme && showA2 && generateSpans(array2)}</p>

        <p>{abtme && showA3 && generateSpans(array3)}</p>
        <p>{abtme && showA4 && generateSpans(array4)}</p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
