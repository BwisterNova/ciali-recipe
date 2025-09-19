import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./porkTenderlion.module.css";
import PorkTenderlionImage from "./Images/PorkTenderlionImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PorkTenderlion() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#comment-section") {
      const commentSection = document.getElementById("comment-section");
      if (commentSection) {
        commentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.PorkTenderlionContainer}>
      <div className={styles.PorkTenderlionContents}>
        <div>
          <img src={PorkTenderlionImage} alt="Pork Tenderloin in Puff Pastry" />
        </div>

        {/* Content Section */}
        <div className={styles.PorkTenderlionInfo}>
          <header>
            <h1>Pork Tenderloin in Puff Pastry</h1>
            <p>December 4, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Delicate, tender, and wrapped in golden puff pastry,{" "}
              <strong>pork tenderloin in puff pastry</strong> is an elegant and
              flavorful dish that’s perfect for special occasions or a
              comforting dinner. This recipe combines the juiciness of the meat
              with the crispness of the pastry and offers a beautiful
              presentation for your dining table.
            </p>

            <p>
              Let’s explore how to prepare this irresistible dish step by step.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For 4 serving:</strong>
            </p>
            <ul>
              <li>1 pork tenderloin (approximately 600g)</li>
              <li>1 sheet of puff pastry</li>
              <li>1 tbsp olive oil</li>
              <li>2 tbsp Dijon mustard</li>
              <li>1 egg yolk (for the egg wash)</li>
              <li>
                100g (3.5 oz) of mushrooms, finely chopped (optional for a
                duxelles filling)
              </li>
              <li>1 small onion, finely chopped</li>
              <li>1 garlic clove, minced</li>
              <li>2 slices of ham or cured ham (optional)</li>
              <li>Salt and freshly ground black pepper</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Pork Tenderloin</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Heat the olive oil in a skillet over medium heat. Sear the pork
                tenderloin on all sides until golden brown. This step locks in
                the juices. Season with salt and pepper, then set aside to cool.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Mushroom Duxelles (Optional)</strong>
            </p>
            <ol>
              <li>
                In the same skillet, sauté the onions and garlic until softened.
              </li>
              <li>
                Add the finely chopped mushrooms and cook until the mixture is
                dry. Season with salt and pepper. Set aside to cool.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Dish</strong>
            </p>
            <ol>
              <li>Roll out the puff pastry on a flat surface.</li>
              <li>
                Spread a layer of Dijon mustard in the center of the pastry.
              </li>
              <li>
                Optional: Add a layer of the mushroom duxelles or place slices
                of ham over the mustard.
              </li>
              <li>
                Place the cooled pork tenderloin on top of the mustard (or ham).
              </li>
              <li>
                Wrap the puff pastry tightly around the pork tenderloin, sealing
                the edges by pressing firmly. Trim any excess pastry and use it
                for decoration if desired.
              </li>
            </ol>
            <p>
              <strong>Step 4: Bake</strong>
            </p>
            <ol>
              <li>
                Place the wrapped tenderloin seam-side down on a baking sheet
                lined with parchment paper.
              </li>
              <li>
                Brush the puff pastry with egg yolk for a shiny, golden crust.
              </li>
              <li>
                Bake for 25-30 minutes, or until the pastry is golden brown and
                the internal temperature of the pork reaches 63°C (145°F).
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Let the pork tenderloin rest for 5 minutes before slicing.
              </li>
              <li>
                Serve with a side of roasted vegetables, a green salad, or
                mashed potatoes for a complete meal.
              </li>
            </ol>

            <p>
              This recipe for <strong>pork tenderloin in puff pastry</strong>{" "}
              brings together tender, juicy meat and flaky, buttery pastry in a
              dish that’s both comforting and refined. With its rich flavors and
              stunning presentation, it’s sure to impress your guests or make an
              ordinary dinner feel extraordinary.
            </p>

            <p>
              Try this recipe for your next special occasion or Sunday dinner
              and savor every bite!
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/dinner"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/dinner")} />
                  Dinner
                </p>
              </a>

              <a
                href="/capon-stuffed-with-chestnuts-and-mushrooms"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Capon Stuffed with Chestnuts and Mushrooms
                </p>
              </a>

              <a
                href="/how-to-prepare-shrimp-pizza"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  How to Prepare Shrimp Pizza: A Delicious Seafood Twist
                </p>
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* Comment Section */}
      <div className={styles.commentArea} id={"comment-section"}>
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
