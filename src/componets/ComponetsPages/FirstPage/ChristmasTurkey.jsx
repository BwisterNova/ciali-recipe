import { FiArrowRightCircle, FiFolder } from "react-icons/fi";
import styles from "../FirstPage/christmasTurkey.module.css";
import TurkeyImage from "./Images/Preparing-Your-Christmas-Turkey-in-Advance-Tips-and-Recipes.jpg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ChristmasTurkey() {
  const navigate = useState();
  const location = useLocation();

  //for the leave a comment section
  useEffect(() => {
    if (location.hash === "#comment-section") {
      const commentSection = document.getElementById("comment-section");
      if (commentSection) {
        commentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.ChristmasTurkeyContainer}>
      <div className={styles.ChristmasTurkeyContents}>
        <div>
          <img src={TurkeyImage} alt="Preparing Your Christmas Turkey" />
        </div>

        {/* Content Section */}
        <div className={styles.ChristmasTurkeyInfo}>
          <header>
            <h1>
              Preparing Your Christmas Turkey in Advance : Tips and Recipes
            </h1>
            <p>December 21, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              A{" "}
              <strong>
                stuffed turkey is a quintessential dish for the holiday season,
              </strong>
              cherished for its generosity and comforting flavors. To fully
              enjoy your guests on the big day, it’s wise to prepare your{" "}
              <strong>turkey</strong> in advance. Here are some tips and recipes
              to ensure success.
            </p>

            {/* Additional Content */}
            <h3>Why Prepare Your Turkey in Advance?</h3>
            <ul>
              <li>
                <strong>Time Savings:</strong> By planning ahead, you reduce
                stress and time spent in the kitchen on Christmas Day.
              </li>
              <li>
                <strong>Flavor Development:</strong> Advance preparation allows
                flavors to meld harmoniously, resulting in a more savory dish.
              </li>
            </ul>

            <h3>Key Steps for Advance Preparation</h3>
            <ol>
              <li>
                <strong>Choosing the Turkey:</strong> Select a quality turkey
                suitable for the number of guests (approximately 1 pound per
                person).
              </li>
              <li>
                <strong>Preparing the Stuffing:</strong> Prepare your stuffing
                the day before using fresh ingredients. Classic combinations
                include chestnuts and mushrooms, or foie gras and dried fruits.
              </li>
              <li>
                <strong>Seasoning:</strong> Generously season the turkey (inside
                and out) with aromatic herbs, salt, and pepper.
              </li>
              <li>
                <strong>Chilling:</strong> Let the seasoned turkey rest in the
                refrigerator overnight, covered, to allow the flavors to infuse.
              </li>
              <li>
                <strong>Cooking:</strong> On the day of serving, remove the
                turkey from the refrigerator an hour before cooking to bring it
                to room temperature. Preheat the oven to 350°F and roast
                according to your recipe, basting regularly to maintain
                moisture.
              </li>
            </ol>

            <h4>Recommended Recipes</h4>
            <ul>
              <li>
                <strong>Turkey Stuffed with Chestnuts and Mushrooms:</strong> A
                traditional pairing that always delights guests.
              </li>
              <li>
                <strong>Roast Turkey with Dried Fruits and Vegetables:</strong>{" "}
                A recipe that combines the sweetness of dried fruits with the
                savoriness of roasted vegetables for a balanced and festive
                dish.
              </li>
            </ul>

            <h3>Additional Tips</h3>
            <ul>
              <li>
                <strong>Accompanying Sauce:</strong> Prepare a port or cranberry
                sauce the day before to save time and enhance the turkey’s
                flavors.
              </li>
              <li>
                <strong>Storage:</strong> If preparing the turkey several days
                in advance, store it cooked in the refrigerator and gently
                reheat in the oven on the day of serving to preserve its
                juiciness.
              </li>
            </ul>

            <p>
              By following these tips, you can fully enjoy your guests while
              offering them a delicious and perfectly prepared Christmas turkey.
            </p>

            {/* For Video Tutorial on chickenTurkey */}
            <div>
              <p>
                <strong>
                  For a video demonstration on preparing a stuffed roast turkey,
                  you can watch the following:
                </strong>
              </p>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/jPozmQncn18"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className={styles.infoButtom}>
              <a
                href="/uncategorized"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder /> Uncategorized
                </p>
              </a>
              <a
                href="/pizza-margherita"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowRightCircle /> Pizza Margherita : Authentic Italian
                  Recipe
                </p>
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* Comment Section */}
      <div className={styles.commentArea} id="comment-section">
        <h3>Leave a comment</h3>
        <form>
          <p>
            <textarea
              name="message"
              id="commentSection"
              cols="30"
              rows="10"
              required
            ></textarea>
          </p>

          <input
            className={styles.userInfo}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            className={styles.userInfo}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            className={styles.userInfo}
            type="url"
            name="url"
            id="url"
            placeholder="Website"
          />
          <p>
            <input type="checkbox" value={"yes"} />
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>

          <input type="submit" value="Post Comment" className={styles.button} />
        </form>
      </div>
    </div>
  );
}
