import React, { useEffect, useRef, useState } from "react";
import uparr from "../../../assets/up-arrow.png";
import { motion } from "framer-motion";
interface pojectviewtypes {
  project: any;
  rmore: boolean;
  index: number;
  setrmore: any;
  setdisplayed: any;
}
const ProjectView = ({
  project,
  index,
  rmore,
  setrmore,
  setdisplayed,
}: pojectviewtypes) => {
  const [load, setload] = useState<boolean>(true);
  const viewref = useRef<any>();

  return (
    <motion.div
      onHoverEnd={() => {
        setrmore(-4);
      }}
      onHoverStart={() => {
        setrmore(index);
        setdisplayed(false);
      }}
      ref={viewref}
      layout
      style={{
        height: !rmore ? "120px" : "300px",
      }}
      className="ProjectView"
      key={project.id}
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <h3 className="projectname">{project.name}</h3>
      {rmore && (
        (
          <>
            <p className="pjktdesc">{project.description}</p>

            <div style={{ display: "flex", gap: "10px" }}>
              <a target="_blank" href={project.homepage}>
                <button>
                  <img src={uparr} alt="Arrow" />
                  Live Demo
                </button>
              </a>
              <a target="_blank" href={project.html_url}>
                <button>
                  <img src={uparr} alt="Arrow" />
                  Github
                </button>
              </a>
            </div>
          </>
        )
      )}
    </motion.div>
  );
};

ProjectView.propTypes = {};

export default ProjectView;
