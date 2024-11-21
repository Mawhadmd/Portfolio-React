import React, { useEffect, useRef, useState } from "react";
import uparr from "../../../assets/up-arrow.png";
import { motion } from "framer-motion";
interface pojectviewtypes {
  project: any;
  rmore: boolean;
  index: number;
  setrmore: any;
  setdisplayed: any
}
const ProjectView = ({ project, index, rmore, setrmore, setdisplayed }: pojectviewtypes) => {
  const [load, setload] = useState<boolean>(false);
  const viewref = useRef<any>();
  const scrollintoview = () => {
    let time = setTimeout(() => {
      viewref.current.scrollIntoView();
    },500);
    return () => clearTimeout(time);
  };
  useEffect(() => {
    setload(false);
    let delay = setTimeout(
      () => {
        setload(true);
      },

     0
    );
    return () => clearTimeout(delay);
  }, [rmore]);

  return (
    <motion.div
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
      {rmore ? (
        load && (
          <>
            <p className="pjktdesc">{project.description}</p>
            <button
              onClick={() => {
                setrmore(-4);
                scrollintoview();

              }}
              style={{ margin: "10px 0px" }}
            >
              Read Less
            </button>
            <a target="_blank" href={project.html_url}>
              <button>
                <img src={uparr} alt="Arrow" />
                Github
              </button>
            </a>
          </>
        )
      ) : (
        <button
          onClick={() => {
            setrmore(index);
            setdisplayed(false)
            scrollintoview();
          }}
          style={{ margin: "10px 0px" }}
        >
          Read More
        </button>
      )}
    </motion.div>
  );
};

ProjectView.propTypes = {};

export default ProjectView;
