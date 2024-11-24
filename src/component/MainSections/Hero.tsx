import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import upwork from "../../assets/upwork.png";
import { refsprovider } from "../../Main/main";

var ArrayofspanStrings = [
  "<span>Backend</span></br> Developer",
  "<span>Tech</span></br> Enthusiast",
  "<span>Problem </span></br>Solver",
  "<span>Front-end</span></br> Specialist",
  "<span>Full-Stack</span></br> Developer",
  "<span>Innovative</span></br> Learner",
  "<span>UI/UX</span></br> Implementer",
  "<span>Technical</span></br> Explorer",
  "<span>SaaS </span></br>& App Builder",
  "<span>SEO </span></br>Strategist",
  "<span>Software</span></br> Developer",
  "<span>Web Scraping </span></br>Expert",
  "<span>Automation</span></br> Specialist",
];

const Hero = () => {
  const {heroref}:any = useContext(refsprovider)
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * ArrayofspanStrings.length + 1)
  );

  const [Sliderhover, setSliderhover] = useState<boolean>(false);

  const [h1heightandwidth, seth1height] = useState<{
    height: string | number;
    width: string | number;
  }>({
    height: "auto",
    width: "auto",
  });
  const slideref = useRef<HTMLDivElement | null>(null);
  const handleAnimationComplete = () => {
    if (slideref.current) {
      const newwidth: number = slideref.current.offsetWidth;
      const newHeight: number = slideref.current.offsetHeight;
      if (
        h1heightandwidth.height !== newHeight ||
        h1heightandwidth.width !== newwidth
      ) {
        seth1height({ height: newHeight, width: newwidth });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % ArrayofspanStrings.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  return (
    <main className="Hero" ref={heroref}>
      <motion.div>
        <motion.div whileInView={{y:[200,0], opacity:[0,1]}} viewport={{once: true}} transition={{duration: 0.5, delay:0}}>
        <h1  className="Slideingtext" style={{ ...h1heightandwidth }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              onHoverStart={() => {
                setSliderhover(true);
              }}
              onHoverEnd={() => {
                setSliderhover(false);
              }}
              ref={slideref}
              initial={{ transform: "translateY(-100%)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              exit={{transform: "translateY(-100%)",  opacity: 0 }}
              onAnimationStart={handleAnimationComplete}
              dangerouslySetInnerHTML={{
                __html: ArrayofspanStrings[currentIndex],
              }}
              transition={{
                duration: 0.3,
              }}
              key={currentIndex}
            >
              {/* Using dangerouslySetInnerHTML property */}
            </motion.div>
          </AnimatePresence>
        </h1>
        </motion.div>
        <motion.p whileInView={{y:[200,0], opacity:[0,1]}} viewport={{once: true}} transition={{duration: 0.5, delay:0.3}} className="slogan">Builds With Passion</motion.p>
        <motion.p whileInView={{skew:[10,0], y:[200,0], opacity:[0,1]}} viewport={{once: true}} transition={{duration: 0.5, delay:0.6}} className="smalldesc">
          Motivated Self Taught with an ongoing degree in computer science, I
          expertise in designing websites, managing database and building a
          fully maintained and tested Full Stack Application.
        </motion.p>
        <motion.ul whileInView={{y:[200,0], opacity:[0,1]}} viewport={{once: true}} transition={{duration: 0.5, delay:1}}>
          <li>
            <a href="https://www.linkedin.com/in/mhmdawad/">
            <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Mawhadmd">
            <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://x.com/Mawhadmd">
            <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.upwork.com/freelancers/~018ac5044285e8e175">
            <img src={upwork} alt="upwork" />
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </main>
  );
};

export default Hero;
