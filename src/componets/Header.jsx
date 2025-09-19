import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

import styles from "../componets/header.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  function toggleMenu() {
    setNav(!nav);
  }

  return (
    <div>
      <header className={styles.header}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <i>
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
          </i>
          <i>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </i>
          <i>
            <a href="https://pinterest.com">
              <FaPinterest />
            </a>
          </i>
          <i>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </i>
        </div>

        {/* Header Container */}
        <div className={styles.headerContainer}>
          <a href="/">
            <h1>Ciali Recipes</h1>
          </a>
          <p>Quick, delicious meals that anyone can create</p>
        </div>

        {/* Navigation Bar */}
        <div className={styles.navBar}>
          {/* Menu Icon */}
          <div onClick={toggleMenu} className={styles.menuIcon_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          {/* Menu */}
          <nav className={`${styles.menu} ${nav ? styles.show : ""}`}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="category/dinner"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  DINNER
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="category/lunch"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  LUNCH
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="category/desserts"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  DESSERTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  ABOUT ME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
