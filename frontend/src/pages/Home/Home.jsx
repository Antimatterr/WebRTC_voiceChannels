import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  function startRegister() {
    navigate("/register");
    console.log("register");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to ClubHouse!!" icon="Group">
        <p className={styles.text}>
          ClubHouse is the easiest way to talk over voice and text. Talk, chat,
          hang out, and stay close with your friends and communities. Join chat
          rooms, create your own rooms and invite your friends.
        </p>
        <div>
          <Button
            onclick={startRegister}
            text="Get started with ClubHouse"
          ></Button>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite link?</span>
          <Link style={signInLinkStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
