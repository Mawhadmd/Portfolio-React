import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import tools from "../assets/tool-box.png"
import Aboutme from "../assets/info1.png"
import Skills from "../assets/skill.png"
import Resume from "../assets/resume_4822907.png"
import Experience from "../assets/experience.png"
interface NavBarListProps {
    left: boolean
}

const NavBarList = (props: NavBarListProps) => {
    const [ulstyles,setulstyles] = useState<any>()
    useEffect(()=>{
        addEventListener('scroll',()=>{
            let top = document.documentElement.scrollTop
            if(top>50){
                setulstyles({top: `${top + 100}px`})
            }else{
                setulstyles({})
            }

        }
    )
       
    },[])
    return (
        <motion.ul
        className= {props.left? 'Navlist left':'Navlist'}
        style={ulstyles}
        whileInView={!props.left? { y: [-70, 0], opacity: [0, 1] }: {}}
        viewport={!props.left? { once: false }: {}}
        transition={!props.left? { duration: 0.4 }: {}}
      >
        {!props.left?
        <>
        <li>Tools</li>
        <li>AboutMe</li>
        <li>Skills</li>
        <li>Resume</li>
        <li>Experience</li></>:
        <>
        <li><img src={tools} alt="Tools" /> Tools</li>
        <li><img src={Aboutme} alt="AboutMe" />AboutMe</li>
        <li><img src={Skills} alt="Skills" />Skills</li>
        <li><img src={Resume} alt="Resume" />Resume</li>
        <li><img src={Experience} alt="Experience" />Experience</li>
        </>
        }
      </motion.ul>
    );
};

export default NavBarList;