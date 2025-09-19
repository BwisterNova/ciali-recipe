import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./pumpkinStuffed.module.css";
import PumpkinStuffedImage from "./Images/PumpkinStuffedImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PumpkinStuffed() {
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
    <div className={styles.PumpkinStuffedContainer}>
      <div className={styles.PumpkinStuffedContents}>
        <div>
          <img
            src={PumpkinStuffedImage}
            alt="Pumpkin Stuffed with Mushrooms, Onions, and Bacon"
          />
        </div>

        {/* Content Section */}
        <div className={styles.PumpkinStuffedInfo}>
          <header>
            <h1>
              Pumpkin Stuffed with Mushrooms, Onions, and Bacon: A Savory Fall
              Delight
            </h1>
            <p>December 2, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              As the cooler months roll in, what better way to embrace the
              flavors of fall than with a savory{" "}
              <strong>
                pumpkin stuffed with mushrooms, onions, and bacon?
              </strong>{" "}
              This dish brings together earthy, roasted pumpkin with the savory
              richness of bacon, the umami of mushrooms, and the sweetness of
              caramelized onions. It’s an impressive yet simple recipe that’s
              perfect for holiday dinners, family meals, or a cozy evening at
              home.
            </p>
            <p>
              Let’s explore how to prepare this hearty, flavorful dish that will
              bring the best of autumn to your table.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For 2-4 servings (depending on pumpkin size):</strong>
            </p>
            <ul>
              <li>
                1 medium-sized pumpkin (such as a sugar pie or a similar variety
                for roasting)
              </li>
              <li>200g (7 oz) bacon, chopped</li>
              <li>
                200g (7 oz) mushrooms, sliced (button, cremini, or a mix of wild
                mushrooms)
              </li>
              <li>1 large onion, thinly sliced</li>
              <li>2 cloves garlic, minced</li>
              <li>2 tbsp olive oil</li>
              <li>1 tbsp butter</li>
              <li>½ cup (120ml) vegetable or chicken stock</li>
              <li>1 tsp fresh thyme (or ½ tsp dried thyme)</li>
              <li>Salt and freshly ground black pepper, to taste</li>
              <li>Fresh parsley, chopped (for garnish)</li>
              <li>Optional: grated cheese (Parmesan or Gruyère) for topping</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Pumpkin</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>

              <li>
                Carefully cut off the top of the pumpkin and scoop out the seeds
                and stringy pulp. You can save the seeds for roasting later if
                you like!
              </li>
              <li>
                Drizzle the inside of the pumpkin with a little olive oil and
                sprinkle with salt and pepper. Place the pumpkin, cut side down,
                on a baking sheet.
              </li>
              <li>
                Roast the pumpkin for 30-40 minutes, or until it’s tender when
                pierced with a fork. The cooking time will depend on the size of
                your pumpkin, so check for tenderness and adjust as needed.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Filling</strong>
            </p>
            <ol>
              <li>
                While the pumpkin is roasting, heat the olive oil and butter in
                a large skillet over medium heat.
              </li>
              <li>
                Add the chopped bacon and cook until it’s crispy and browned,
                about 5-7 minutes. Remove the bacon from the skillet and set it
                aside, leaving the rendered fat in the pan.
              </li>
              <li>
                In the same skillet, add the sliced onions and cook until
                softened and caramelized, about 10 minutes. Stir occasionally to
                avoid burning.
              </li>
              <li>
                Add the minced garlic and sliced mushrooms to the skillet. Sauté
                until the mushrooms have released their moisture and browned,
                about 5-7 minutes
              </li>
              <li>
                Stir in the thyme, cooked bacon, and vegetable or chicken stock.
                Let it simmer for another 2-3 minutes, then season with salt and
                pepper to taste.
              </li>
              <li>
                Once the filling has cooked down and most of the liquid has
                evaporated, remove from heat.
              </li>
            </ol>
            <p>
              <strong>Step 3: Stuff the Pumpkin</strong>
            </p>
            <ol>
              <li>
                Once the pumpkin is roasted and tender, carefully flip it over
                and scoop out any additional pulp to create a hollow cavity. Be
                careful not to damage the skin.
              </li>
              <li>
                Fill the hollow pumpkin with the mushroom, onion, and bacon
                mixture. Use a spoon to pack the stuffing tightly. If desired,
                top with a sprinkle of grated cheese for a golden, melted
                finish.
              </li>
            </ol>
            <p>
              <strong>Step 4: Final Roast</strong>
            </p>
            <ol>
              <li>
                Place the stuffed pumpkin back on the baking sheet and return it
                to the oven. Roast for an additional 10-15 minutes, or until the
                top is slightly browned and the cheese (if used) has melted.
              </li>
              <li>
                Remove the pumpkin from the oven and let it cool for a few
                minutes before serving.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Slice the stuffed pumpkin into wedges or serve whole for a
                dramatic presentation. Garnish with fresh chopped parsley for a
                pop of color and added freshness.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Choosing the Right Pumpkin:</strong> For roasting,
                select a pumpkin that has a thick, sturdy skin. Varieties like
                sugar pie, Cinderella, or kabocha work well.
              </li>
              <li>
                <strong>Customize the Filling:</strong> Feel free to add other
                ingredients like spinach, cheese, or herbs to the filling. A
                little bit of cream can also be added for richness.
              </li>
              <li>
                <strong>Serving Suggestions:</strong> This dish pairs
                beautifully with a light salad or roasted potatoes. It also
                works wonderfully as a side dish or a vegetarian main course (if
                you omit the bacon).
              </li>
            </ul>

            <p>
              This{" "}
              <strong>
                {" "}
                pumpkin stuffed with mushrooms, onions, and bacon
              </strong>
              is a perfect fall dish that combines the sweetness of pumpkin with
              the savory richness of bacon and mushrooms. It’s a satisfying and
              visually stunning way to enjoy seasonal ingredients and can be
              served at a family gathering or as a special treat for yourself.
            </p>

            <p>
              Give it a try this autumn and enjoy the comforting flavors of a
              hearty, seasonal meal!
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
                href="/easy-ice-cream-log-for-christmas"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Easy Ice Cream Log for Christmas: A Delightful Frozen Treat
                </p>
              </a>

              <a
                href="/winter-vegetable-flan"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Winter Vegetable Flan: A Comforting Seasonal Recipe
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
