import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./eggWithHam.module.css";
import EggWithHamImage from "./Images/ChickenRisottoImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function EggWithHam() {
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
    <div className={styles.EggWithHamContainer}>
      <div className={styles.EggWithHamContents}>
        <div>
          <img
            src={EggWithHamImage}
            alt="Eggs with Ham: A Simple and Delicious Classic"
          />
        </div>

        {/* Content Section */}
        <div className={styles.EggWithHamInfo}>
          <header>
            <h1>Eggs with Ham: A Simple and Delicious Classic</h1>
            <p>November 8, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Sometimes, the simplest dishes are the most satisfying.{" "}
              <strong>Eggs with ham</strong> is a timeless classic that combines
              two versatile ingredients to create a meal that’s quick,
              delicious, and perfect for any time of day. Whether you’re
              preparing breakfast, brunch, or a light dinner, this dish is a
              go-to favorite.
            </p>
            <p>
              With just a few ingredients and minimal effort, you can whip up a
              dish that’s both hearty and comforting. Let’s get started!
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For Two Servings:</strong>
            </p>
            <ul>
              <li>4 large eggs</li>
              <li>4 slices of cooked ham (or prosciutto, if preferred)</li>
              <li>1 tbsp butter or olive oil</li>
              <li>Salt and freshly ground black pepper to taste</li>
              <li>Optional: chopped fresh parsley or chives for garnish</li>
            </ul>

            <h3>Variations</h3>
            <p>
              This dish is incredibly flexible, and you can adapt it to your
              taste or the occasion:
            </p>
            <ul>
              <li>
                <strong>Cheesy twist:</strong> Add grated cheese like cheddar,
                Gruyère, or Parmesan for an extra layer of flavor.
              </li>
              <li>
                <strong>Vegetable boost:</strong> Include sautéed mushrooms,
                spinach, or cherry tomatoes for a healthy touch.
              </li>
              <li>
                <strong>Spicy kick:</strong> ASprinkle with chili flakes or add
                a drizzle of hot sauce for some heat.
              </li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Ham</strong>
            </p>
            <ol>
              <li>Heat a large skillet over medium heat.</li>
              <li>
                Add the ham slices and cook for 1-2 minutes on each side until
                lightly browned and warmed through. Remove and set aside.
              </li>
            </ol>
            <p>
              <strong>Step 2:Cook the Eggs</strong>
            </p>
            <ol>
              <li>
                In the same skillet, melt the butter or heat the olive oil over
                medium heat.
              </li>
              <li>
                Crack the eggs into the skillet. For sunny-side-up eggs, cook
                until the whites are set and the yolks are still runny. For
                over-easy eggs, gently flip them and cook for an additional 30
                seconds.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Dish</strong>
            </p>
            <ol>
              <li>
                Place two slices of ham on each plate. Top each with two eggs.
              </li>
              <li>Season with salt and freshly ground black pepper.</li>
            </ol>
            <p>
              <strong>Step 4: Garnish and Serve</strong>
            </p>
            <ol>
              <li>
                Garnish with fresh parsley or chives, if desired, and serve
                immediately. Pair with crusty bread, a green salad, or sautéed
                potatoes for a complete meal.
              </li>
            </ol>

            <h3>Why You'll Love This Recipe</h3>
            <ul>
              <li>
                <strong>Quick and Easy:</strong> Ready in just 10 minutes!
              </li>
              <li>
                <strong>Minimal Ingredients:</strong> Uses pantry staples to
                create a delicious meal.
              </li>
              <li>
                <strong>Versatile:</strong> Works for breakfast, lunch, or
                dinner.
              </li>
            </ul>

            <p>
              <strong>Eggs with ham</strong> proves that simple ingredients can
              create something truly satisfying. Whether you’re cooking for
              yourself or feeding a crowd, this recipe is a reliable choice that
              delivers on flavor and comfort.
            </p>

            <p>
              Give it a try and enjoy the timeless combination of eggs and ham
              in all its glory!
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
                href="/italian-carbonara-pasta-without-cream"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Italian Carbonara Pasta Without Cream: The Authentic Recipe
                </p>
              </a>

              <a
                href="/chicken-risotto-the-best-recipe"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Chicken Risotto: The Best Recipe
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
