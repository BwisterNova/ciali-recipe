import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./mushroomLasagna.module.css";
import mushroomLasagnaImage from "./Images/imageye___-_Mushroom-Lasagna.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function MushroomLasagna() {
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
    <div className={styles.mushroomLasagnaContainer}>
      <div className={styles.mushroomLasagnaContents}>
        <div>
          <img src={mushroomLasagnaImage} alt="Mushroom Lasagna" />
        </div>

        {/* Content Section */}
        <div className={styles.mushroomLasagnaInfo}>
          <header>
            <h1>Mushroom Lasagna: A Creamy and Savory Delight</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              For those who love the earthy flavor of mushrooms and crave the
              comforting layers of a classic lasagna, this{" "}
              <strong>Mushroom Lasagna</strong> is the perfect dish. It’s a
              delightful twist on the traditional meat-based lasagna, featuring
              layers of tender pasta, creamy béchamel sauce, and a rich mushroom
              filling. Whether you’re catering to vegetarians or just looking
              for a hearty yet elegant meal, this recipe is sure to impress.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 6 servings:</strong>
            </p>
            <p>
              <strong>For the Mushroom Filling</strong>
            </p>
            <ul>
              <li>
                500g (1 lb) mixed mushrooms (button, cremini, shiitake, or
                portobello), thinly sliced
              </li>
              <li>2 cloves garlic, minced</li>
              <li>1 small onion, finely chopped</li>
              <li>2 tbsp olive oil</li>
              <li>1 tbsp fresh thyme or 1 tsp dried thyme</li>
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
              <li>500ml (2 cups) milk, warmed</li>
              <li>2 tbsp fresh parsley, chopped (for garnish)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Mushroom Filling</strong>
            </p>
            <ol>
              <li>Heat olive oil in a large skillet over medium heat.</li>
              <li>Sauté the onion and garlic until soft and fragrant.k.</li>
              <li>
                Add the mushrooms and thyme, cooking until the mushrooms release
                their moisture and begin to brown, about 8-10 minutes.
              </li>
              <li>
                Season with salt and pepper. Remove from heat and set aside.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Béchamel Sauce</strong>
            </p>
            <ol>
              <li>In a medium saucepan, melt the butter over medium heat.</li>
              <li>
                Add the flour and whisk continuously for 1-2 minutes to create a
                smooth roux.
              </li>
              <li>
                Gradually pour in the warm milk, whisking constantly to avoid
                lumps.
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
                <strong>Mushroom Choices:</strong> Use a mix of mushrooms for a
                richer flavor. Wild mushrooms like chanterelles or porcini can
                elevate the dish.
              </li>
              <li>
                <strong>Cheese Alternatives:</strong> Ricotta or mascarpone can
                be added for creamier layers.
              </li>
              <li>
                <strong>Make It Ahead:</strong> The lasagna can be assembled
                ahead of time and refrigerated until ready to bake.
              </li>
            </ul>

            <p>
              This <strong>Mushroom Lasagna</strong> is a celebration of earthy
              flavors and creamy textures. It’s a versatile dish that can be
              adapted to suit any occasion, from weeknight dinners to festive
              gatherings.
            </p>
            <p>
              Try this recipe today, and let the layers of rich mushroom filling
              and silky béchamel sauce warm your heart and palate. Enjoy!
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
                href="/homemade-chicken-cordon-bleu"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Homemade Chicken Cordon Bleu
                </p>
              </a>

              <a
                href="/salmon-and-spinach-lasagna"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Salmon and Spinach Lasagna: A Delicious and Elegant Twist
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
