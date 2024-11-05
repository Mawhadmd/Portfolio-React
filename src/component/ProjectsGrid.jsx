import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectView from "./ProjectView.jsx";

const Projects = () => {
    const [githubProjects, setGithubProjects] = useState(null);
    const [lastseen, setlastseen] = useState(null);
    const EXPIRY_TIME = 6 * 60 * 60 * 1000; 
    useEffect(()=>{
        const storedTime = localStorage.getItem('githubProjectsTime');
        var timegone = Math.floor((Date.now() - parseInt(storedTime)) / 1000 / 60 / 60)
        if(storedTime)
        setlastseen(timegone == 0? "A few minutes ago": timegone)
    },[githubProjects])
    useEffect(() => {
        const storedData = localStorage.getItem('githubProjects');
        const storedTime = localStorage.getItem('githubProjectsTime');

        const isExpired = storedTime && (Date.now() - parseInt(storedTime) > EXPIRY_TIME);

        if (storedData && !isExpired) {
            setGithubProjects(JSON.parse(storedData));
        } else {
            fetch('https://api.github.com/search/repositories?q=user:mawhadmd')
                .then(res => res.json())
                .then((res) => {
                    setGithubProjects(res);
                    localStorage.setItem('githubProjects', JSON.stringify(res));
                    localStorage.setItem('githubProjectsTime', Date.now().toString());
                   
                })
                .catch((e) => {
                    console.error('Error fetching data:', e);
                });
        }
    }, []);

    return (
        <>
           <div style={{textAlign: 'center', padding: '10px'}}>Last update: {lastseen} {lastseen <= 1? 'hour': 'hours'} </div>
        <section className='ProjectGrid'>
         
            {githubProjects && githubProjects.items
                ? githubProjects.items.map((project) => (
                      <ProjectView key={project.id} project={project} />
                  ))
                : <p>Loading...</p>}
        </section>
        </>
    );
};

Projects.propTypes = {};

export default Projects;
