import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./springRolls.module.css";
import SpringRollsImage from "./Images/imageye___-_Spring-Rolls-with-Crab-Chinese-Cabbage-and-Bamboo-Shoots.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SpringRolls() {
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
    <div className={styles.SpringRollsContainer}>
      <div className={styles.SpringRollsContents}>
        <div>
          <img
            src={SpringRollsImage}
            alt="Spring Rolls with Crab, Chinese Cabbage, and Bamboo Shoots"
          />
        </div>

        {/* Content Section */}
        <div className={styles.SpringRollsInfo}>
          <header>
            <h1>Spring Rolls with Crab, Chinese Cabbage, and Bamboo Shoots</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>
                Spring rolls with crab, Chinese cabbage, and bamboo shoots
              </strong>{" "}
              offer a perfect balance of flavors and textures, with the delicate
              sweetness of crab meat, the crunchiness of fresh bamboo shoots,
              and the mild, tender leaves of Chinese cabbage. These crispy,
              light rolls are a wonderful option for any occasion, whether as an
              appetizer, snack, or light meal. The savory filling wrapped in a
              crisp, golden wrapper makes these spring rolls a delicious treat
              that is sure to impress your guests with their sophisticated
              flavors. Let’s explore how to prepare these delicious spring rolls
              from scratch!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Filling</strong>
            </p>
            <ul>
              <li>200g crab meat (fresh or canned)</li>
              <li>1/2 small head of Chinese cabbage, finely shredded</li>
              <li>1/2 cup bamboo shoots, julienned (fresh or canned)</li>
              <li>1/2 medium carrot, julienned</li>
              <li>2 green onions, finely chopped</li>
              <li>2 tbsp soy sauce</li>
              <li>1 tbsp sesame oil</li>
              <li>1 tbsp rice vinegar</li>
              <li>1/2 tsp grated fresh ginger</li>
              <li>1/2 tsp garlic, minced</li>
              <li>1/2 tsp sugar (optional, for a touch of sweetness)</li>
              <li>
                Fresh cilantro or parsley, chopped (optional, for garnish)
              </li>
            </ul>
            <p>
              <strong>For the Spring Rolls</strong>
            </p>
            <ul>
              <li>
                10-12 spring roll wrappers (or rice paper wrappers for a lighter
                option)
              </li>
              <li>Vegetable oil for frying (or canola oil)</li>
            </ul>
            <p>
              <strong>For Dipping Sauce (Optional):</strong>
            </p>
            <ul>
              <li>1/4 cup soy sauce</li>
              <li>1 tbsp rice vinegar</li>
              <li>1 tbsp sesame oil</li>
              <li>1 tsp honey or sugar</li>
              <li>A pinch of red pepper flakes (optional, for heat)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Filling</strong>
            </p>
            <ol>
              <li>
                If you are using fresh crab, gently pick through the crab meat
                to remove any shells. If using canned crab meat, drain it well.
              </li>
              <li>
                In a large bowl, combine the crab meat, finely shredded Chinese
                cabbage, bamboo shoots, julienned carrot, and chopped green
                onions.
              </li>
              <li>
                In a separate small bowl, whisk together the soy sauce, sesame
                oil, rice vinegar, grated ginger, minced garlic, and sugar (if
                using).
              </li>
              <li>
                Pour the sauce over the vegetable and crab mixture, and gently
                toss everything together until the filling is well-coated with
                the sauce. Taste and adjust seasoning if needed.
              </li>
              <li>
                Let the filling rest for a few minutes to allow the flavors to
                meld.
              </li>
            </ol>
            <p>
              <strong>Step 2: Assemble the Spring Rolls</strong>
            </p>
            <ol>
              <li>
                Prepare the spring roll wrappers according to the package
                instructions. If you’re using rice paper wrappers, dip each
                sheet in warm water for a few seconds until soft.
              </li>
              <li>Lay each softened wrapper flat on a clean surface.</li>
              <li>
                Spoon about 2-3 tablespoons of the filling onto the lower third
                of the wrapper. Be sure not to overfill, as it may be harder to
                roll.
              </li>
              <li>
                Fold the sides of the wrapper inwards, then roll it up tightly,
                sealing the edge with a little water. Repeat with the remaining
                wrappers and filling.
              </li>
            </ol>
            <p>
              <strong>Step 3: Fry the Spring Rolls</strong>
            </p>
            <ol>
              <li>
                Heat vegetable oil in a deep skillet or wok over medium-high
                heat. You’ll need enough oil to submerge the spring rolls
                halfway.
              </li>
              <li>
                Carefully drop the spring rolls into the hot oil, a few at a
                time. Fry for about 3-4 minutes, turning occasionally, until
                golden brown and crispy on all sides.
              </li>
              <li>
                Remove the spring rolls from the oil and drain on paper towels
                to remove excess oil.
              </li>
            </ol>
            <p>
              <strong>Step 4: Make the Dipping Sauce</strong>
            </p>
            <ol>
              <li>
                In a small bowl, whisk together the soy sauce, rice vinegar,
                sesame oil, honey or sugar, and red pepper flakes (if using).
                Adjust the sweetness or spiciness to your liking.
              </li>
              <li>Serve the dipping sauce alongside the spring rolls.</li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Arrange the crispy spring rolls on a serving platter and garnish
                with fresh cilantro or parsley if desired.
              </li>
              <li>
                Serve immediately with the dipping sauce on the side. Enjoy the
                crunchy texture and savory filling!
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Crab alternatives:</strong> If you prefer, you can use
                shrimp or a combination of shrimp and crab for a different
                twist. For a vegetarian version, substitute the crab with
                mushrooms, tofu, or additional vegetables like bell peppers or
                zucchini.
              </li>
              <li>
                <strong>Rice paper version:</strong> If you’re using rice paper
                wrappers, you can either fry them for a crispy texture or serve
                them fresh for a lighter, healthier option.
              </li>
              <li>
                <strong>Make ahead:</strong> The spring rolls can be assembled
                ahead of time and stored in the fridge for up to 1 hour before
                frying. This can help reduce prep time for busy gatherings.
              </li>
              <li>
                <strong>Serving suggestions:</strong>Pair the spring rolls with
                a light salad or serve them alongside some steamed jasmine rice
                for a full meal.
              </li>
            </ul>

            <p>
              This{" "}
              <strong>
                spring rolls with crab, Chinese cabbage, and bamboo shoots
              </strong>{" "}
              are a delightful blend of savory, sweet, and crunchy flavors. The
              combination of crab with fresh vegetables and aromatic spices
              makes each bite a perfect balance of textures and tastes. Whether
              you’re hosting a dinner party, preparing a light lunch, or simply
              craving something delicious and unique, these spring rolls will
              become a go-to favorite. With their crispy, golden exterior and
              flavorful filling, they are sure to be a crowd-pleaser!
            </p>
            <p>
              Enjoy these spring rolls with a tangy dipping sauce and savor the
              burst of flavors in every bite!
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/lunch"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/lunch")} />
                  Lunch
                </p>
              </a>

              <a
                href="/samosas-with-minced-meat"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Samosas with Minced Meat: A Crispy, Flavorful Snack
                </p>
              </a>

              <a
                href="/cake-with-sun-dried-vegetables-and-mozzarella"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Cake with Sun-Dried Vegetables and Mozzarella: A Savory
                  Delight for Every Occasion
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
