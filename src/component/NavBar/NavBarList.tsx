import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import tools from "../../assets/tool-box.png";
import Aboutme from "../../assets/info1.png";
import Skills from "../../assets/skill.png";
import Resume from "../../assets/resume_4822907.png";
import Projects from "../../assets/project_5956597.png";
import Experience from "../../assets/experience.png";
import up from "../../assets/up-arrow.png";
import { refsprovider } from '../../Main/main';

interface NavBarListProps {
    left: boolean;
}

const NavBarList = ({ left }: NavBarListProps) => {
    const [ulstyles, setulstyles] = useState<any>({});
    const { techstackref, aboutref, skillsref, expref, githubref }: any = useContext(refsprovider);

    useEffect(() => {
        const handleScroll = () => {
            let top = document.documentElement.scrollTop;
            if (top > 50) {
                setulstyles({ top: `${top + 100}px` });
            } else {
                setulstyles({});
            }
        };

        // Adding the event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {left && (
                <div className='leftulcontainer' style={{...ulstyles}}>  
                <motion.ul className='Navlist left' style={{position:"static"}} >
                    <li onClick={() => {aboutref.current.scrollIntoView()}}><img src={Aboutme} alt="AboutMe" /> AboutMe</li>
                    <li onClick={() => {skillsref.current.scrollIntoView()}}><img src={Skills} alt="Skills" /> Skills</li>
                    <li onClick={() => {techstackref.current.scrollIntoView()}}><img src={tools} alt="TechStack" /> TechStack</li>
                    <li onClick={() => {}}><img src={Resume} alt="Resume" /> Resume</li>
                    <li onClick={() => {expref.current.scrollIntoView()}}><img src={Experience} alt="Experience" /> Experience</li>
                    <li onClick={() => {githubref.current.scrollIntoView()}}><img src={Projects} alt="Experience" /> Projects</li>
                  
                </motion.ul>
                <div onClick={()=>{document.documentElement.scrollTop = 0}}><img  src={up} alt='Go up' /></div>
                </div>
            )}

            {!left && (
                <motion.ul
                    whileInView={{ y: [-70, 0], opacity: [0, 1] }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className='Navlist'
                >
                    <li onClick={() => {techstackref.current.scrollIntoView()}}>TechStack</li>
                    <li onClick={() => {aboutref.current.scrollIntoView()}}>AboutMe</li>
                    <li onClick={() => {skillsref.current.scrollIntoView()}}>Skills</li>
                    <li onClick={() => {}}>Resume</li>
                    <li onClick={() => {expref.current.scrollIntoView()}}>Experience</li>
                </motion.ul>
            )}
        </>
    );
};

export default NavBarList;
