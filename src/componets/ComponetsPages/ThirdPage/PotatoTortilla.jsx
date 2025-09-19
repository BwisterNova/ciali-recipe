import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./potatoTortilla.module.css";
import PotatoTortillaImage from "./Images/imageye___-_Potato-Tortilla.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PotatoTortilla() {
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
    <div className={styles.PotatoTortillaContainer}>
      <div className={styles.PotatoTortillaContents}>
        <div>
          <img src={PotatoTortillaImage} alt="Potato Tortilla" />
        </div>

        {/* Content Section */}
        <div className={styles.PotatoTortillaInfo}>
          <header>
            <h1>Potato Tortilla: A Classic Spanish Dish for Every Occasion</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              The <strong>Potato tortilla,</strong> also known as{" "}
              <em>tortilla de patatas</em> in Spain, is a timeless dish that
              showcases the beauty of simplicity. With just a few basic
              ingredients—potatoes, eggs, onions, and olive oil—you can create a
              hearty, flavorful meal that works perfectly as a main course,
              appetizer, or even a snack. This Spanish classic is loved for its
              golden, crispy exterior and soft, creamy interior, making it a
              versatile dish that’s ideal for any occasion. Let’s dive into the
              steps to prepare this comforting and delicious dish at home!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <ul>
              <li>4 medium-sized potatoes, peeled and thinly sliced</li>
              <li>1 large onion, finely chopped (optional, but traditional)</li>
              <li>6 large eggs</li>
              <li>1/4 cup extra virgin olive oil</li>
              <li>Salt and pepper, to taste</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Potatoes and Onions</strong>
            </p>
            <ol>
              <li>
                Heat the olive oil in a large non-stick frying pan over medium
                heat.
              </li>
              <li>
                Add the sliced potatoes and cook gently, stirring occasionally,
                for about 10–12 minutes. The potatoes should soften but not
                brown.
              </li>
              <li>
                Add the chopped onion to the pan and continue cooking for
                another 8–10 minutes, or until both the potatoes and onions are
                tender. Season with a pinch of salt and pepper.
              </li>
              <li>
                Remove the potatoes and onions from the pan using a slotted
                spoon, letting any excess oil drain back into the pan.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Egg Mixture</strong>
            </p>
            <ol>
              <li>
                In a large bowl, whisk the eggs until smooth. Season with salt
                and pepper.
              </li>
              <li>
                Gently fold the cooked potatoes and onions into the eggs,
                ensuring everything is well-coated. Let the mixture rest for 5
                minutes to allow the flavors to meld.
              </li>
            </ol>
            <p>
              <strong>Step 3: Cook the Tortilla</strong>
            </p>
            <ol>
              <li>
                Heat a tablespoon of the reserved olive oil in the same frying
                pan over medium heat.
              </li>
              <li>
                Pour the egg and potato mixture into the pan, spreading it out
                evenly. Reduce the heat to low and cook for 8–10 minutes, or
                until the edges are set but the center is still slightly runny.
              </li>
              <li>
                To flip the tortilla, place a large plate over the pan and
                carefully invert it onto the plate
              </li>
              <li>
                Slide the tortilla back into the pan, uncooked side down, and
                cook for another 5–7 minutes, or until fully set and golden
                brown.
              </li>
            </ol>
            <p>
              <strong>Step 4: Serve</strong>
            </p>
            <ol>
              <li>
                Remove the tortilla from the pan and let it cool slightly before
                slicing.
              </li>
              <li>
                Serve warm, at room temperature, or even cold, accompanied by a
                simple salad, crusty bread, or as part of a tapas spread.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Choosing the right potatoes:</strong> Waxy or
                all-purpose potatoes work best as they hold their shape and
                provide a creamy texture.
              </li>
              <li>
                <strong>Onion variations:</strong> While traditional recipes
                include onions, you can leave them out if you prefer a simpler
                flavor. Alternatively, add chopped garlic or herbs like parsley
                for extra depth.
              </li>
              <li>
                <strong>Cooking method:</strong> If flipping the tortilla feels
                daunting, you can finish cooking it in the oven under a grill
                for a foolproof method.
              </li>
              <li>
                <strong>Storage:</strong> Leftover tortilla can be stored in the
                fridge for up to 3 days and reheated or enjoyed cold for a quick
                snack.
              </li>
            </ul>

            <p>
              The <strong>potato tortilla</strong>is a shining example of how
              humble ingredients can be transformed into a delicious and
              satisfying dish. Whether served as a centerpiece for a family
              meal, cut into small squares for a party, or packed into a picnic
              basket, this Spanish classic never disappoints.
            </p>
            <p>
              Simple yet versatile, the tortilla de patatas is a dish that
              brings people together, offering comfort and flavor in every bite.
              Try it out, and bring a taste of Spain to your kitchen today!
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
                href="/mushrooms-stuffed-with-cream-cheese"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Mushrooms Stuffed with Cream Cheese: A Simple Yet
                  Sophisticated Appetizer
                </p>
              </a>

              <a
                href="/samosas-with-minced-meat"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Samosas with Minced Meat: A Crispy, Flavorful Snack
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
