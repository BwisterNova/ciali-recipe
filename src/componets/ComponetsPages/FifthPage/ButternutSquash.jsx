import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./butternutSquash.module.css";
import ButternutSquashImage from "./Images/ButternutSquashImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ButternutSquash() {
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
    <div className={styles.ButternutSquashContainer}>
      <div className={styles.ButternutSquashContents}>
        <div>
          <img
            src={ButternutSquashImage}
            alt="Butternut Squash and Ham Quiche: A Seasonal Delight"
          />
        </div>

        {/* Content Section */}
        <div className={styles.ButternutSquashInfo}>
          <header>
            <h1>Butternut Squash and Ham Quiche: A Seasonal Delight</h1>
            <p>December 5, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              If you’re looking for a dish that’s perfect for brunch, lunch, or
              a light dinner, look no further than this{" "}
              <strong>Butternut Squash and Ham Quiche.</strong>This recipe
              combines the creamy sweetness of roasted butternut squash with the
              savory flavors of ham and cheese, all nestled in a flaky crust.
              It’s a delicious way to enjoy the comforting flavors of fall and
              winter.
            </p>
            <p>
              Let’s explore how to prepare this easy, crowd-pleasing quiche
              that’s perfect for any occasion.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For 4-6 servings:</strong>
            </p>
            <ul>
              <li>1 sheet of shortcrust pastry (store-bought or homemade)</li>
              <li>400g (14 oz) butternut squash, peeled and diced</li>
              <li>150g (5 oz) cooked ham, diced</li>
              <li>3 eggs</li>
              <li>200ml (3/4 cup) heavy cream</li>
              <li>100ml (1/3 cup) milk</li>
              <li>
                100g (3.5 oz) grated cheese (Gruyère, Emmental, or Cheddar)
              </li>
              <li>1 tbsp olive oil</li>
              <li>Salt and freshly ground black pepper</li>
              <li>A pinch of nutmeg (optional)</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Butternut Squash</strong>
            </p>
            <ol>
              <li>Preheat your oven to 200°C (400°F).</li>
              <li>
                Place the diced butternut squash on a baking tray. Drizzle with
                olive oil, season with salt and pepper, and toss to coat.
              </li>
              <li>
                Roast in the oven for 20-25 minutes, or until tender and lightly
                caramelized. Remove from the oven and let cool slightly.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Pastry</strong>
            </p>
            <ol>
              <li>
                Roll out the shortcrust pastry and line a 9-inch (23 cm) tart
                pan with it. Trim the edges and prick the bottom with a fork.
              </li>
              <li>
                Blind bake the pastry: cover it with parchment paper and fill it
                with baking weights or dried beans. Bake at 180°C (350°F) for 10
                minutes. Remove the weights and bake for an additional 5 minutes
                until lightly golden.
              </li>
            </ol>
            <p>
              <strong>Step 3: Make the Filling</strong>
            </p>
            <ol>
              <li>
                In a mixing bowl, whisk together the eggs, cream, and milk.
                Season with salt, pepper, and a pinch of nutmeg if desired.
              </li>
              <li>Add the grated cheese and stir to combine.</li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Quiche</strong>
            </p>
            <ol>
              <li>
                Spread the roasted butternut squash evenly over the pastry
                shell.
              </li>
              <li>Scatter the diced ham on top of the squash.</li>
              <li>
                Pour the egg and cream mixture over the filling, ensuring it’s
                evenly distributed.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake the Quiche</strong>
            </p>
            <ol>
              <li>Reduce the oven temperature to 180°C (350°F).</li>
              <li>
                Bake the quiche for 30-35 minutes, or until the filling is set
                and the top is golden brown.
              </li>
            </ol>

            <p>
              <strong>Step 6: Serve</strong>
            </p>
            <ol>
              <li>Allow the quiche to cool for 5-10 minutes before slicing.</li>
              <li>
                Serve warm with a crisp green salad or a bowl of soup for a
                complete meal.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Customize Your Filling:</strong> Feel free to add extras
                like sautéed onions, spinach, or herbs for added flavor.
              </li>
              <li>
                <strong>Cheese Alternatives:</strong>Try swapping the Gruyère
                for goat cheese or feta for a different twist.
              </li>
              <li>
                <strong>Make it ahead:</strong> This quiche can be made in
                advance and reheated, making it perfect for meal prep or
                entertaining.
              </li>
            </ul>

            <p>
              This <strong>Butternut Squash and Ham Quiche</strong>is a
              versatile and flavorful dish that highlights the natural sweetness
              of squash paired with the savory taste of ham and cheese. Whether
              served as a main course or a side dish, it’s sure to be a hit with
              friends and family.
            </p>

            <p>
              Try this recipe today and enjoy a taste of cozy, seasonal comfort!
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
                href="/my-grandmothers-stuffed-vegetables"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  My Grandmother’s Stuffed Vegetables: A Family Tradition
                </p>
              </a>

              <a
                href="/baked-butternut-squash-gratin-with-comte-and-thyme"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Baked Butternut Squash Gratin with Comté and Thyme
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
