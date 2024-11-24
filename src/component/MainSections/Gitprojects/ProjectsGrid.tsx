import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectView from "./ProjectView.js";
import { refsprovider } from "../../../Main/main.js";
interface items {
  Firstgrid: Array<React.JSX.Element>;
  Secondsgrid: Array<React.JSX.Element>;
  Thirdgrid: Array<React.JSX.Element>;
}
const Projects = ({ TimeHasExpired }: { TimeHasExpired: boolean }) => {
  const [githubProjects, setGithubProjects] = useState<any>(null);

  const [lastSeen, setLastSeen] = useState<any>(null);
  const [displayed, setdisplayed] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(true);
  const [rmore, setrmore] = useState<number>(-1);
  const [items, setitems] = useState<items>({
    Firstgrid: [],
    Secondsgrid: [],
    Thirdgrid: [],
  });

  const { githubref }: any = useContext(refsprovider);


  useEffect(() => {
    if (rmore >= 0) {
      const timeout = setTimeout(() => {
        setdisplayed(true);
      }, 50);
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

  useEffect(() => {
    if (!loading && githubProjects && githubProjects.items) {
      // Temporary arrays to hold the items for each grid
      const firstGridItems: Array<React.JSX.Element> = [];
      const secondGridItems: Array<React.JSX.Element> = [];
      const thirdGridItems: Array<React.JSX.Element> = [];
      var removeone = 0;
      githubProjects.items.forEach((project: any, index: number) => {
        if (project.name == "Mawhadmd") {
          removeone--;
          return;
        }
        index = index + removeone
        const projectView = (
          <ProjectView
            setrmore={setrmore}
            rmore={rmore === index ? displayed : false}
            key={(index)} // Ensure this key is unique
            project={project}
            index={index}
            setdisplayed={setdisplayed}
          />
        );

        // Push the component into the appropriate grid array
        if (index % 3 === 0) {
          firstGridItems.push(projectView);
        } else if (index % 3 === 1) {
          secondGridItems.push(projectView);
        } else {
          thirdGridItems.push(projectView);
        }
      });

      // Update state once after processing all items
      setitems({
        Firstgrid: firstGridItems,
        Secondsgrid: secondGridItems,
        Thirdgrid: thirdGridItems,
      });
    }

    setloading(false);
  }, [githubProjects,rmore,displayed]);
  return (
    <div className="Gitprojectcontainer" ref={githubref}>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1>Projects</h1>
        Last update: {lastSeen}{" "}
        {lastSeen != null && String(lastSeen).match(/^[0-9]+$/)
          ? lastSeen <= 1
            ? "hour"
            : "hours"
          : ""}{" "}
      </div>
      <div className="TheBiggerGrid">
        {loading && <p>Loading...</p>}
        <section className="ProjectGrid">{items?.Firstgrid}</section>
        <section className="ProjectGrid">{items?.Secondsgrid}</section>
        <section className="ProjectGrid">{items?.Thirdgrid}</section>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
