import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./pizzaMargherita.module.css";
import PizzaImage from "./Images/Pizza-Margherita-Authentic-Italian-Recipe.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PizzaMargherita() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#comment-section") {
      const commentSection = document.getElementById("comment-section");
      if (commentSection) {
        commentSection.scrollIntoView({ behaviour: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.pizzaContainer}>
      <div className={styles.pizzaContents}>
        <div>
          <img
            src={PizzaImage}
            alt="Pizza Margherita : Authentic Italian Recipe"
          />
        </div>

        {/* Content Section */}
        <div className={styles.pizzaInfo}>
          <header>
            <h1>Pizza Margherita : Authentic Italian Recipe</h1>
            <p>December 20, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              The <strong>Pizza Margherita</strong> is a symbol of Italian
              cuisine, celebrated for its simplicity and authentic flavors.
              Comprising a thin crust, tomato sauce, mozzarella, and fresh
              basil, it embodies the colors of the Italian flag.{" "}
            </p>

            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <ul>
              <li>350 g of flour</li>
              <li>1 packet of baker’s yeast</li>
              <li>150 g of grated mozzarella</li>
              <li>100 g of fresh tomatoes</li>
              <li>5 basil leaves</li>
              <li>Olive oil</li>
              <li>Salt</li>
            </ul>

            <h3>Preparation:</h3>
            <ol style={{ paddingLeft: "20px" }}>
              <li>
                <strong>Preparing the Dough:</strong>{" "}
                <ul>
                  <li>In a large bowl, mix the flour with a pinch of salt.</li>
                  <li>
                    Dissolve the baker’s yeast in a bit of warm water and add it
                    to the flour mixture.
                  </li>
                  <li>Incorporate a tablespoon of olive oil.</li>
                  <li>
                    Knead the dough until it becomes homogeneous and elastic.
                  </li>
                  <li>
                    Cover the bowl with a damp cloth and let the dough rest for
                    about 30 minutes, until it doubles in size.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Preparing the Tomato Sauce:</strong>{" "}
                <ul>
                  <li>Peel and dice the tomatoes into small pieces.</li>
                  <li>
                    Cook them in a pan with a tablespoon of olive oil, a pinch
                    of salt, and pepper until a thick sauce forms.
                  </li>
                  <li>
                    Add a bouquet garni (thyme, bay leaf) to flavor the sauce.
                  </li>
                  <li>Let it simmer, stirring regularly.</li>
                </ul>
              </li>
              <li>
                <strong>Assembling the Pizza:</strong>{" "}
                <ul>
                  <li>Preheat the oven to 250°C (482°F).</li>
                  <li>
                    On a floured surface, roll out the dough into a circle about
                    25 cm (10 inches) in diameter.
                  </li>
                  <li>
                    Spread the tomato sauce over the dough, leaving a 1 cm (0.4
                    inch) border.
                  </li>
                  <li>
                    Evenly distribute the grated mozzarella over the tomato
                    sauce.
                  </li>
                  <li>Add a few fresh basil leaves on top.</li>
                </ul>
              </li>
              <li>
                <strong>Baking:</strong>{" "}
                <ul>
                  <li>
                    Place the pizza on a baking sheet lined with parchment
                    paper.
                  </li>
                  <li>
                    On a floured surface, roll out the dough into a circle about
                    25 cm (10 inches) in diameter.
                  </li>
                  <li>
                    Bake for 10 to 15 minutes, until the crust is golden and the
                    cheese has melted.
                  </li>
                  <li>
                    Upon removing from the oven, drizzle with a bit of olive oil
                    and add a few extra fresh basil leaves for garnish.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Serve the <strong>Pizza Margherita</strong> hot, accompanied by a
              green salad or a glass of{" "}
              <strong>
                Italian wine for an authentic culinary experience.
              </strong>
            </p>

            <p>
              This traditional recipe highlights the quality of the ingredients
              and the simplicity of preparation, essential characteristics of
              Italian cuisine.
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/dinner"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  className={styles.categoryLink}
                  onClick={() => navigate("/category/dinner")}
                >
                  <FiFolder /> Dinner
                </p>
              </a>
              <a
                href="/preparing-your-christmas-turkey-in-advance"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle /> Preparing Your Christmas Turkey in
                  Advance : Tips and Recipes
                </p>
              </a>
              <a
                href="/clementine-tart"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle /> Clementine Tart: A Citrusy Delight
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
