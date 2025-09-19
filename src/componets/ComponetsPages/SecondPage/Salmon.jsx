import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./salmon.module.css";
import salmonImage from "./Images/imageye___-_Salmon-and-spinach-lasagna.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Salmon() {
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
    <div className={styles.salmonContainer}>
      <div className={styles.salmonContents}>
        <div>
          <img src={salmonImage} alt="Salmon and Spinach Lasagna" />
        </div>

        {/* Content Section */}
        <div className={styles.salmonInfo}>
          <header>
            <h1>Salmon and Spinach Lasagna: A Delicious and Elegant Twist</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              For a fresh take on a classic comfort food, try this{" "}
              <strong>Salmon and Spinach Lasagna.</strong> This creamy,
              flavorful dish combines tender lasagna layers with rich salmon,
              vibrant spinach, and a luscious béchamel sauce. Perfect for family
              dinners or special occasions, this recipe brings a touch of
              sophistication to your table.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 6 servings:</strong>
            </p>
            <p>
              <strong>For then Filling</strong>
            </p>
            <ul>
              <li>
                400g (14 oz) fresh salmon fillet, skin removed and cut into
                small pieces
              </li>
              <li>300g (10 oz) fresh spinach, washed and chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>1 tbsp olive oil</li>
              <li>Salt and freshly ground black pepper</li>
            </ul>
            <p>
              <strong>For the Béchamel Sauce:</strong>
            </p>
            <ul>
              <li>50g (1/4 cup) unsalted butter</li>
              <li>50g (1/3 cup) all-purpose flour</li>
              <li>500ml (2 cups) milk, warmed</li>
              <li>A pinch of nutmeg (optional)</li>
              <li>Salt and pepper to taste</li>
            </ul>
            <p>
              <strong>For Assembly:</strong>
            </p>
            <ul>
              <li>250g (8 oz) lasagna sheets (fresh or no-boil)</li>
              <li>
                200g (7 oz) grated cheese (Mozzarella, Parmesan, or Gruyère)
              </li>
              <li>
                2 tbsp fresh dill or parsley, chopped (optional, for garnish)
              </li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Spinach and Salmon</strong>
            </p>
            <ol>
              <li>Heat olive oil in a large skillet over medium heat.</li>
              <li>Add the minced garlic and sauté until fragrant.</li>
              <li>
                Add the spinach and cook until wilted. Season with salt and
                pepper, then remove from heat and set aside.
              </li>
              <li>
                In the same skillet, lightly sauté the salmon pieces for 2-3
                minutes until just cooked through. Season with salt and pepper.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Béchamel Sauce</strong>
            </p>
            <ol>
              <li>In a medium saucepan, melt the butter over medium heat.</li>
              <li>
                Stir in flour and whisk continuously for 1-2 minutes to create a
                smooth roux.
              </li>
              <li>
                Gradually add the warm milk, whisking constantly to avoid lumps.
              </li>
              <li>
                Cook until the sauce thickens and coats the back of a spoon.
              </li>
              <li>
                Season with salt, pepper, and a pinch of nutmeg if desired.
                Remove from heat
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Lasagna</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F)..</li>
              <li>
                Spread a thin layer of béchamel sauce on the bottom of a baking
                dish.
              </li>
              <li>
                Add a layer of lasagna sheets, followed by a layer of mushroom
                filling, a drizzle of béchamel sauce, and a sprinkle of grated
                cheese.
              </li>
              <li>
                Repeat the layers until all ingredients are used, finishing with
                a generous layer of béchamel sauce and cheese on top.
              </li>
            </ol>
            <p>
              <strong>Step 4: Bake the Lasagna</strong>
            </p>
            <ol>
              <li>
                Cover the dish with aluminum foil and bake for 25 minutes.
              </li>
              <li>
                Remove the foil and bake for an additional 15 minutes, or until
                the top is golden and bubbly.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>Let the lasagna rest for 5-10 minutes before slicing.</li>
              <li>
                Garnish with fresh parsley and serve warm with a side salad or
                garlic bread.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Use Fresh Ingredients:</strong> Fresh salmon and spinach
                provide the best flavor, but frozen alternatives can work in a
                pinch.
              </li>
              <li>
                <strong>Cheese Alternatives:</strong> Ricotta or cream cheese
                can be layered with the spinach for added creaminess.
              </li>
              <li>
                <strong>Make It Ahead:</strong> Assemble the lasagna ahead of
                time and refrigerate until ready to bake.
              </li>
            </ul>

            <p>
              This <strong>Mushroom Lasagna</strong> is a celebration of earthy
              flavors and creamy textures. It’s a versatile dish that can be
              adapted to suit any occasion, from weeknight dinners to festive
              gatherings.
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
                href="/mushroom-lasagna"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Mushroom Lasagna: A Creamy and Savory Delight
                </p>
              </a>

              <a
                href="/cheap-soft-apple-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Cheap Soft Apple Cake: A Budget-Friendly, Moist Dessert
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
