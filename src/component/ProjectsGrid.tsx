import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectView from "./ProjectView.jsx";
import { motion } from "framer-motion";

const Projects = ({ TimeHasExpired }: { TimeHasExpired: boolean }) => {
  const [githubProjects, setGithubProjects] = useState<any>(null);
  const [lastSeen, setLastSeen] = useState<any>(null);

  useEffect(() => {
    const storedTimeString = localStorage.getItem("githubProjectsTime"); 
    let hoursSinceLastUpdate;

    if (storedTimeString !== null) {
      hoursSinceLastUpdate = Math.floor(
        (Date.now() - parseInt(storedTimeString)) / 1000 / 60 / 60
      );
    } else {
      hoursSinceLastUpdate = 0;
    }

    if (storedTimeString) setLastSeen(hoursSinceLastUpdate === 0 ? "A few minutes ago" : hoursSinceLastUpdate);
  }, [githubProjects]);

  useEffect(() => {
    console.log("Time expired:", TimeHasExpired);
    const storedProjects = localStorage.getItem("githubProjects");
    
    if (storedProjects) {
      setGithubProjects(JSON.parse(storedProjects));
    }
  }, [TimeHasExpired]);

  return (
    <div className="Gitprojectcontainer">
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1>Github Projects Live</h1>
        Last update: {lastSeen}{" "}
        {lastSeen != null && String(lastSeen).match(/^[0-9]+$/)
          ? lastSeen <= 1
            ? "hour"
            : "hours"
          : ""}{" "}
      </div>
      <section className="ProjectGrid">
        {githubProjects && githubProjects.items ? (
          githubProjects.items.map((project: typeof githubProjects[0]) => (
            <motion.div
              key={project.id}
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {project.name!= "Mawhadmd" && <ProjectView key={project.id} project={project} />}
            </motion.div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
