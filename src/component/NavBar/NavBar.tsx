import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion, transform } from "framer-motion";
import NavBarList from "./NavBarList";

const NavBar = () => {
  const storedData: any = JSON.parse(
    localStorage.getItem("githubProjects") ?? "null"
  );
  let url;
  let avatar;

  if (storedData && storedData.message != null) {
    console.log(storedData, storedData.message);
    url = "#";
    avatar = "src/assets/loading.png";
  } else {
    url = storedData && storedData.items[0].owner.html_url;
    avatar = storedData && storedData.items[0].owner.avatar_url;
  }

  return (
    <nav className="navbar">
      <motion.div
        whileInView={{ y: [-200, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <a href={url}>
          <img className="avatar" src={avatar} alt="I" />
        </a>
        <p>Mo. Awad</p>
      </motion.div>
      <NavBarList left={false} />
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
