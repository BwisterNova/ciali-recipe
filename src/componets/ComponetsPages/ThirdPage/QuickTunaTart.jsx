import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./quickTunaTart.module.css";
import QuickTunaTartImage from "./Images/imageye___-_Quick-Tuna-Tart-with-Shortcrust-Pastry-The-Best-Recipe.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function QuickTunaTart() {
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
    <div className={styles.QuickTunaTartContainer}>
      <div className={styles.QuickTunaTartContents}>
        <div>
          <img
            src={QuickTunaTartImage}
            alt="Quick Tuna Tart with Shortcrust Pastry"
          />
        </div>

        {/* Content Section */}
        <div className={styles.QuickTunaTartInfo}>
          <header>
            <h1>Quick Tuna Tart with Shortcrust Pastry: The Best Recipe</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Looking for a quick, flavorful dish that’s perfect for any
              occasion? This{" "}
              <strong>quick tuna tart with shortcrust pastry</strong>is a
              versatile recipe that can serve as a light dinner, lunch, or even
              as an appetizer for a gathering. With its crispy crust, creamy
              filling, and savory tuna flavor, this tart is a crowd-pleaser.
            </p>
            <p>
              The best part? It’s incredibly easy to prepare, making it an ideal
              recipe for busy days. Let’s get started!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Tart Base:</strong>
            </p>
            <ul>
              <li>
                1 sheet of ready-made shortcrust pastry (or homemade, if
                preferred)
              </li>
            </ul>
            <p>
              <strong>For the Filling:</strong>
            </p>
            <ul>
              <li>
                12 cans of tuna in olive oil (approximately 150g, drained)
              </li>
              <li>200ml heavy cream (about 3/4 cup)</li>
              <li>2 large eggs</li>
              <li>1 small onion, finely chopped</li>
              <li>1 handful of grated cheese (Gruyère or Parmesan)</li>
              <li>1 tbsp Dijon mustard</li>
              <li>Salt and pepper to taste</li>
              <li>
                Optional: a sprinkle of dried herbs (thyme, oregano, or parsley)
              </li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Pastry Base</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Roll out the shortcrust pastry and press it into a tart pan.
                Trim any excess edges and prick the base with a fork to prevent
                bubbling.
              </li>
              <li>
                Blind bake the pastry for 10 minutes by placing parchment paper
                over it and filling it with baking weights or dried beans.
                Remove the weights and bake for an additional 5 minutes.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Filling</strong>
            </p>
            <ol>
              <li>
                In a mixing bowl, whisk together the eggs, cream, mustard, salt,
                and pepper until smooth.
              </li>
              <li>
                Stir in the finely chopped onion, drained tuna, and half of the
                grated cheese. Mix well to combine.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Tart</strong>
            </p>
            <ol>
              <li>
                Pour the filling mixture into the pre-baked tart shell,
                spreading it evenly.
              </li>
              <li>
                Sprinkle the remaining grated cheese over the top for a golden
                finish.
              </li>
            </ol>
            <p>
              <strong>Step 4: Bake the Tart</strong>
            </p>
            <ol>
              <li>
                Place the tart in the oven and bake for 25-30 minutes, or until
                the filling is set and the top is golden brown.
              </li>
              <li>
                Allow the tart to cool for 5 minutes before slicing and serving.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Tuna options:</strong> Opt for high-quality canned tuna
                in olive oil for the best flavor. If using tuna in water, add a
                drizzle of olive oil for richness.
              </li>
              <li>
                <strong>Customize it: </strong>Add sliced tomatoes, olives, or
                capers to the filling for extra flavor.
              </li>
              <li>
                <strong>Make it healthier:</strong> Substitute some of the
                butter with applesauce or yogurt to reduce fat content without
                compromising on moisture.
              </li>
              <li>
                <strong>Make it lighter:</strong> Swap heavy cream for crème
                fraîche or a plant-based alternative for a lighter version.
              </li>
            </ul>

            <p>
              This <strong>quick tuna tart with shortcrust pastry</strong> is a
              delicious and effortless recipe that’s perfect for any time of the
              day. Its crispy base, creamy filling, and savory tuna make it a
              dish that’s sure to become a family favorite.
            </p>
            <p>
              Pair it with a fresh green salad or enjoy it as is—it’s a recipe
              that’s as versatile as it is tasty. Try it today and enjoy the
              simple joys of a homemade tart!
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/dinner"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/dinner")} />
                  Desserts
                </p>
              </a>

              <a
                href="/soft-pumpkin-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Soft Pumpkin Cake: A Perfect Fall Treat
                </p>
              </a>

              <a
                href="/apple-mascarpone-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Apple Mascarpone Cake: A Delightful Dessert for All Occasions
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
