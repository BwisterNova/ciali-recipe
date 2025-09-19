import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./bakedButternut.module.css";
import BakedButternutImage from "./Images/BakedButternutImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function BakedButternut() {
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
    <div className={styles.BakedButternutContainer}>
      <div className={styles.BakedButternutContents}>
        <div>
          <img
            src={BakedButternutImage}
            alt="Baked Butternut Squash Gratin with Comté and Thyme"
          />
        </div>

        {/* Content Section */}
        <div className={styles.BakedButternutInfo}>
          <header>
            <h1>Baked Butternut Squash Gratin with Comté and Thyme</h1>
            <p>December 5, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              If you’re looking for a comforting and elegant side dish, this{" "}
              <strong>
                Baked Butternut Squash Gratin with Comté and Thyme
              </strong>
              is the perfect choice. Creamy layers of sweet butternut squash are
              enhanced by the nutty flavor of Comté cheese and the earthy aroma
              of thyme. This gratin is ideal for holiday feasts, Sunday roasts,
              or cozy weeknight dinners.
            </p>
            <p>
              Here’s how to prepare this delicious dish that will bring warmth
              and flavor to your table.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For 4-6 servings:</strong>
            </p>
            <ul>
              <li>
                1 medium butternut squash (about 1 kg or 2.2 lbs), peeled and
                thinly sliced
              </li>
              <li>200g (7 oz) Comté cheese, grated</li>
              <li>300ml (1 ¼ cups) heavy cream</li>
              <li>2 garlic cloves, minced</li>
              <li>2 tsp fresh thyme leaves (or 1 tsp dried thyme)</li>
              <li>1 tbsp olive oil</li>
              <li>Salt and freshly ground black pepper</li>
              <li>Optional: a pinch of nutmeg for added depth</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Butternut Squash</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Peel the butternut squash, remove the seeds, and slice it thinly
                (about 3-4 mm thick) using a sharp knife or a mandoline.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Cream Mixture</strong>
            </p>
            <ol>
              <li>
                In a small saucepan, combine the heavy cream, minced garlic,
                thyme, salt, pepper, and a pinch of nutmeg if desired.
              </li>
              <li>
                Heat the mixture gently over low heat until it’s warm but not
                boiling. This will infuse the cream with flavor.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Gratin</strong>
            </p>
            <ol>
              <li>Lightly grease a baking dish with olive oil..</li>
              <li>
                Arrange a layer of butternut squash slices in the dish, slightly
                overlapping them.
              </li>
              <li>
                Sprinkle a portion of the grated Comté cheese over the squash.
              </li>
              <li>
                Repeat the layers until all the squash and cheese are used,
                finishing with a generous layer of cheese on top.
              </li>
            </ol>
            <p>
              <strong>Step 4: Add the Cream and Bake</strong>
            </p>
            <ol>
              <li>
                Pour the warm cream mixture evenly over the squash layers,
                ensuring it seeps through.
              </li>
              <li>
                Cover the dish with aluminum foil and bake for 30 minutes.
              </li>
              <li>
                Remove the foil and continue baking for another 20-25 minutes,
                or until the squash is tender and the top is golden and bubbly.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Let the gratin cool for a few minutes before serving to allow
                the layers to set.
              </li>
              <li>
                Garnish with a few fresh thyme sprigs for a touch of color and
                aroma.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Cheese Substitution:</strong> If you don’t have Comté,
                Gruyère or Emmental make excellent substitutes, offering a
                similar nutty and creamy flavor.
              </li>
              <li>
                <strong>Even Slicing:</strong> Use a mandoline for uniformly
                thin slices, ensuring even cooking.
              </li>
              <li>
                <strong>Add Crunch:</strong> For a crispy topping, sprinkle some
                breadcrumbs mixed with a little olive oil and grated cheese
                before the final baking stage.
              </li>
            </ul>

            <p>
              This{" "}
              <strong>
                Baked Butternut Squash Gratin with Comté and Thyme
              </strong>{" "}
              is a wonderful way to showcase the rich flavors of seasonal
              squash. The combination of creamy layers, melted cheese, and
              fragrant thyme creates a dish that’s both simple and indulgent.
            </p>

            <p>
              Perfect as a side dish or even as a vegetarian main course, this
              gratin is sure to become a favorite on your table. Give it a try
              and enjoy the ultimate comfort food experience!
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
                href="/butternut-squash-and-ham-quiche"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Butternut Squash and Ham Quiche: A Seasonal Delight
                </p>
              </a>

              <a
                href="/capon-stuffed-with-chestnuts-and-mushrooms"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Capon Stuffed with Chestnuts and Mushrooms
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
