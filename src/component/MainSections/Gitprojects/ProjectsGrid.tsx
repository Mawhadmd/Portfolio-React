import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectView from "./ProjectView.js";
import { motion } from "framer-motion";
import { refsprovider } from "../../../Main/main.js";

const Projects = ({ TimeHasExpired }: { TimeHasExpired: boolean }) => {
  const [githubProjects, setGithubProjects] = useState<any>(null);
  const [lastSeen, setLastSeen] = useState<any>(null);
  const [displayed, setdisplayed] = useState<boolean>(false);
  const [rmore, setrmore] = useState<number>(-1);
  const { githubref }: any = useContext(refsprovider);

  useEffect(() => {
    if (rmore >= 0) {
      const timeout = setTimeout(() => {
        setdisplayed(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [rmore]);

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

    if (storedTimeString)
      setLastSeen(
        hoursSinceLastUpdate === 0 ? "A few minutes ago" : hoursSinceLastUpdate
      );
  }, [githubProjects]);

  useEffect(() => {
    console.log("Time expired:", TimeHasExpired);
    const storedProjects = localStorage.getItem("githubProjects");

    if (storedProjects) {
      setGithubProjects(JSON.parse(storedProjects));
    }
  }, [TimeHasExpired]);

  return (
    <div  className="Gitprojectcontainer" ref={githubref}>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1>Github Projects Live</h1>
        Last update: {lastSeen}{" "}
        {lastSeen != null && String(lastSeen).match(/^[0-9]+$/)
          ? lastSeen <= 1
            ? "hour"
            : "hours"
          : ""}{" "}
      </div>
      <section style={{height: rmore<0? `${((Math.round(githubProjects?.items?.length) / 3) * 120)}px` : `${((Math.round(githubProjects?.items?.length) / 3) * 120) + 180}px`  }}  className="ProjectGrid">
        {githubProjects && githubProjects.items ? (
          githubProjects.items.map(
            (project: (typeof githubProjects)[0], index: number) => (
          
                project.name != "Mawhadmd" && (
                  <ProjectView
                    setrmore={setrmore}
                    rmore={rmore == index ? displayed : false}
                    key={index}
                    project={project}
                    index={index}
                    setdisplayed= {setdisplayed}
                  />
                )
          
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
