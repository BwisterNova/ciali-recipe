import React from "react";
import styles from "./AboutMe.module.css";
import AnnaWalkerImage from "../img/AnnaWalker.jpg";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <section className={styles.aboutMeContainer}>
      <h3>ABOUT ME</h3>
      <div className={styles.aboutInfo}>
        <img
          src={AnnaWalkerImage}
          alt="Anna Walker"
          className={styles.profileImage}
        />
        <div className={styles.aboutP}>
          <p className={styles.aboutMeText}>
            Welcome! I’m Anna Walker, a chef with a passion for turning simple
            ingredients into unforgettable meals. Cooking has been my creative
            outlet for as long as I can remember, and I believe that food is
            more than just sustenance—it’s a way to bring people together, spark
            joy, and tell stories.
          </p>
          <p className={styles.aboutMeText}>
            On this site, you’ll find a collection of my favorite recipes, each
            one crafted with love and tested in my own kitchen. Whether you’re
            looking for quick weekday dinners, indulgent desserts, or tips to
            elevate your cooking skills, I’m here to guide you every step of the
            way. Thank you for visiting—I can’t wait to share my culinary
            journey with you!
          </p>
        </div>
      </div>
      <a href="/about">
        {" "}
        <button
          onClick={() => navigate("/about")}
          className={styles.learnMoreButton}
          aria-label="Learn more about Anna Walker"
        >
          LEARN MORE
        </button>
      </a>
    </section>
  );
}
