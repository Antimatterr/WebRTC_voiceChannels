import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#ffff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItem: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      {/* doesnt allow page to refresh and which is a child component of navbar hence navbar.module.css will not appy to this link so we will use inline style*/}
      <Link style={brandStyle} to="/">
        <img className="logo" src="/images/Group.png" alt="logo" />
        <span style={logoText}>ClubHouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
