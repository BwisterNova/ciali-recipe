import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./kondel.module.css";
import KnodelImage from "./Images/imageye___-_Knodel-Austrian-Savory-Bread-Dumplings.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Knodel() {
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
    <div className={styles.KnodelContainer}>
      <div className={styles.KnodelContents}>
        <div>
          <img
            src={KnodelImage}
            alt="Knödel – Austrian Savory Bread Dumplings"
          />
        </div>

        {/* Content Section */}
        <div className={styles.KnodelInfo}>
          <header>
            <h1>Knödel – Austrian Savory Bread Dumplings</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Knödel,</strong> a staple of Austrian cuisine, are hearty
              and versatile bread dumplings that embody the essence of comfort
              food. Often served as a side dish or main course, these dumplings
              are made from simple ingredients like stale bread, eggs, and milk,
              making them a resourceful way to use leftovers. Knödel pair
              beautifully with rich gravies, stews, or even roasted meats,
              making them a favorite during colder months or festive occasions.
            </p>
            <h3>A Brief History of Knödel</h3>
            <p>
              Knödel’s origins can be traced back to the Alpine regions, where
              sustenance came from what was readily available. Over time, these
              dumplings became a beloved dish not just in Austria, but also in
              neighboring Germany, Hungary, and the Czech Republic. Variations
              abound, from savory options like <strong>Speckknödel</strong>{" "}
              (with bacon) to sweet delights like{" "}
              <strong>Marillenknödel</strong> (filled with apricots).
            </p>
            {/* Additional Content */}
            <h3>Ingredients for Classic Savory Knödel</h3>
            <ul>
              <li>200g stale bread, cut into small cubes</li>
              <li>2 eggs</li>
              <li>150ml milk</li>
              <li>1 small onion, finely chopped</li>
              <li>1 tbsp butter</li>
              <li>1 tbsp chopped parsley</li>
              <li>1 pinch nutmeg (optional)</li>
              <li>Salt and pepper to taste</li>
              <li>Flour, as needed (for binding, if necessary)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Bread Mixture</strong>
            </p>
            <ol>
              <li>Place the stale bread cubes in a large mixing bowl.</li>
              <li>
                In a separate container, whisk together the eggs and milk, then
                pour the mixture over the bread. Let it soak for 10–15 minutes,
                stirring occasionally to ensure the bread absorbs the liquid
                evenly.
              </li>
            </ol>
            <p>
              <strong>Step 2: Cook the Onion</strong>
            </p>
            <ol>
              <li>
                Melt the butter in a small skillet over medium heat. Add the
                chopped onion and sauté until soft and translucent.
              </li>
              <li>Add the cooked onion and parsley to the bread mixture.</li>
            </ol>
            <p>
              <strong>Step 3: Form the Dough</strong>
            </p>
            <ol>
              <li>
                Season the mixture with salt, pepper, and a pinch of nutmeg if
                desired.
              </li>
              <li>
                Mix everything gently with your hands or a spoon. If the mixture
                feels too wet, add a little flour to bind it.
              </li>
              <li>
                Shape the mixture into round dumplings, about the size of a
                small orange.
              </li>
            </ol>
            <p>
              <strong>Step 4: Cook the Knödel</strong>
            </p>
            <ol>
              <li>
                Bring a large pot of salted water to a gentle simmer (not a full
                boil).
              </li>
              <li>
                Carefully lower the Knödel into the water. Cook for 15–20
                minutes, or until they float to the surface.
              </li>
            </ol>

            <h3>Serving Suggestions</h3>
            <ul>
              <li>
                <strong>As a side dish:</strong> Pair them with rich stews like
                goulash or beef roulade.
              </li>
              <li>
                <strong>With gravy:</strong> Serve alongside roasted meats and
                drench them in gravy.
              </li>

              <li>
                <strong>As a vegetarian main course:</strong> Enjoy them with
                sautéed mushrooms or a creamy sauce.
              </li>
            </ul>

            <h3>Tips for Perfect Knödel</h3>
            <ul>
              <li>
                Use stale bread for the best texture. Fresh bread can make the
                dumplings too soft.
              </li>
              <li>
                Don’t overcrowd the pot while cooking, as the Knödel need room
                to expand.
              </li>
              <li>
                Add bits of bacon, ham, or cheese to the dough for a flavorful
                twist.
              </li>
            </ul>

            <p>
              Knödel are more than just a dish—they’re a culinary tradition that
              brings people together over hearty meals. Whether you’re
              discovering them for the first time or revisiting a classic, these
              Austrian savory bread dumplings are a delightful addition to any
              table.
            </p>

            <li>Guten Appetit!</li>

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
                href="/pork-stir-fry-in-the-cookeo"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Pork Stir-Fry in the Cookeo
                </p>
              </a>

              <a
                href="/how-to-prepare-lasagna-soup"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  How to Prepare Lasagna Soup
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
