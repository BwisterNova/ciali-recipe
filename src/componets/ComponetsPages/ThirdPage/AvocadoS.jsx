import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./avocadoS.module.css";
import AvocadoSImage from "./Images/imageye___-_Avocado-Shrimp-and-Cream-Cheese-Verrines.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AvocadoS() {
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
    <div className={styles.AvocadoSContainer}>
      <div className={styles.AvocadoSContents}>
        <div>
          <img
            src={AvocadoSImage}
            alt="Avocado, shrimp, and cream cheese verrines"
          />
        </div>

        {/* Content Section */}
        <div className={styles.AvocadoSInfo}>
          <header>
            <h1>Avocado, shrimp, and cream cheese verrines</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Avocado, shrimp, and cream cheese verrines </strong> are
              the perfect blend of creamy, fresh, and savory flavors served in a
              chic, layered presentation. This dish is ideal for dinner parties,
              festive celebrations, or even as a light snack when you want to
              impress your guests with minimal effort. The combination of ripe
              avocado, succulent shrimp, and smooth cream cheese creates a
              harmonious balance that’s as delightful to look at as it is to
              eat. Let’s explore how to make this easy and elegant appetizer!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 4 Verrines:</strong>
            </p>
            <ul>
              <li>2 ripe avocados</li>
              <li>200g cooked shrimp (peeled and deveined)</li>
              <li>150g cream cheese (softened)</li>
              <li>1 tbsp lemon or lime juice</li>
              <li>1 tsp olive oil</li>
              <li>1 garlic clove (optional, minced)</li>
              <li>Salt and black pepper, to taste</li>
              <li>Fresh dill or chives, chopped (for garnish)</li>
              <li>
                Cherry tomatoes or cucumber slices (optional, for garnish)
              </li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Avocado Layer</strong>
            </p>
            <ol>
              <li>
                Cut the avocados in half, remove the pit, and scoop the flesh
                into a bowl.
              </li>
              <li>
                Mash the avocado with a fork until smooth, leaving a few small
                chunks for texture.
              </li>
              <li>
                Add the lemon or lime juice, olive oil, salt, and pepper. Mix
                well to combine.
              </li>
              <li>
                If desired, stir in the minced garlic for an extra kick of
                flavor.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Cream Cheese Layer</strong>
            </p>
            <ol>
              <li>
                In a separate bowl, mix the cream cheese with the sour cream or
                Greek yogurt until smooth and creamy.
              </li>
              <li>
                Season with a pinch of salt and pepper. Adjust the consistency
                by adding a teaspoon of water if needed for easier layering.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Verrines</strong>
            </p>
            <ol>
              <li>
                Take four small glass cups or jars to showcase the beautiful
                layers.
              </li>
              <li>
                Begin with a layer of mashed avocado, filling about one-third of
                each cup.
              </li>
              <li>
                dd a layer of the cream cheese mixture, smoothing it gently with
                a spoon.
              </li>
              <li>
                Top each verrine with a generous portion of cooked shrimp.
              </li>
            </ol>
            <p>
              <strong>Step 4: Garnish and Serve</strong>
            </p>
            <ol>
              <li>
                Garnish the verrines with fresh dill or chives for a pop of
                color and flavor.
              </li>
              <li>
                Add a cherry tomato half or a cucumber slice on top for an extra
                decorative touch.
              </li>
              <li>
                Chill the verrines in the refrigerator for 10–15 minutes before
                serving.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Choosing avocados:</strong> Use ripe but firm avocados
                for the best texture. Overly soft avocados may turn mushy and
                affect the presentation.
              </li>
              <li>
                <strong>Shrimp variation:</strong> If you want a bolder flavor,
                toss the shrimp in a bit of garlic butter or chili oil before
                adding them to the verrines.
              </li>
              <li>
                <strong>Layering options:</strong>Feel free to add an extra
                layer, such as diced tomatoes, cucumber, or even a quinoa base
                for a more substantial dish.
              </li>
              <li>
                <strong>Make-ahead:</strong> You can prepare the avocado and
                cream cheese layers in advance, but assemble the verrines just
                before serving to keep the avocado fresh and vibrant.
              </li>
            </ul>

            <p>
              <strong>Avocado, shrimp, and cream cheese verrines</strong> are
              the perfect combination of simplicity and sophistication. Their
              vibrant layers and rich, refreshing flavors make them a standout
              appetizer for any gathering. Whether you’re hosting a formal
              dinner or a casual get-together, these verrines are guaranteed to
              impress your guests while requiring minimal effort in the kitchen.
            </p>
            <p>
              Try these delightful verrines for your next event, and watch them
              disappear in no time!
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
                href="/potato-croquettes-with-raw-ham"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Potato Croquettes with Raw Ham: A Crispy and Savory Treat
                </p>
              </a>

              <a
                href="/mushrooms-stuffed-with-cream-cheese"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Mushrooms Stuffed with Cream Cheese: A Simple Yet
                  Sophisticated Appetizer
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
