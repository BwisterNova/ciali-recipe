import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./homadeChicken.module.css";
import HomadeChickenImage from "./Images/Homemade-Chicken-Cordon-Bleu.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function HomadeChicken() {
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
    <div className={styles.HomadeChickenContainer}>
      <div className={styles.HomadeChickenContents}>
        <div>
          <img src={HomadeChickenImage} alt="Homemade Chicken Cordon Bleu" />
        </div>

        {/* Content Section */}
        <div className={styles.HomadeChickenInfo}>
          <header>
            <h1>Homemade Chicken Cordon Bleu</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Chicken Cordon Bleu</strong> is a classic dish that
              combines tender chicken breast, savory ham, and gooey melted
              cheese, all wrapped in a crispy breadcrumb coating. Making it at
              home is easier than you think and guarantees a fresh, flavorful
              result. This recipe will guide you through creating this gourmet
              dish that’s perfect for weeknight dinners or special occasions.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 4 servings:</strong>
            </p>
            <ul>
              <li>4 slices of ham</li>
              <li>4 slices of Swiss or Gruyère cheese</li>
              <li>1 cup all-purpose flour</li>
              <li>2 large eggs, beaten</li>
              <li>11/2 cups breadcrumbs (panko or regular)</li>
              <li>1/2 cup grated Parmesan cheese (optional)</li>
              <li>1 tsp garlic powder</li>
              <li>1 tsp paprika</li>
              <li>Salt and freshly ground black pepper to taste</li>
              <li>
                2-3 tbsp vegetable oil (for frying) or cooking spray (for
                baking)
              </li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the chicken</strong>
            </p>
            <ol>
              <li>
                Butterfly the chicken breasts by slicing them horizontally,
                leaving one edge intact, and open them like a book.
              </li>
              <li>
                Place the chicken between two sheets of plastic wrap and gently
                pound with a meat mallet until about 1/4-inch thick.
              </li>
            </ol>
            <p>
              <strong>Step 2: Assemble the Filling</strong>
            </p>
            <ol>
              <li>
                Lay one slice of ham and one slice of cheese on one side of the
                flattened chicken breast.
              </li>
              <li>
                Fold the other half of the chicken over the filling, securing
                the edges with toothpicks to seal.
              </li>
            </ol>
            <p>
              <strong>Step 3: Set Up the Coating Station</strong>
            </p>
            <ol>
              <li>
                Place the flour in one shallow dish, the beaten eggs in another,
                and the breadcrumbs mixed with Parmesan, garlic powder, paprika,
                salt, and pepper in a third.
              </li>
            </ol>
            <p>
              <strong>Step 4: Coat the chicken</strong>
            </p>
            <ol>
              <li>
                Dredge each stuffed chicken breast in the flour, shaking off thw
                excess.
              </li>
              <li>Dip it into the beaten eggs, ensuring it's fully coated.</li>
              <li>
                Roll it the breadcrumb mixture, pressing gently to adhere.
              </li>
            </ol>
            <p>
              <strong>Step 5: Cook the chicken</strong>
            </p>
            <ul>
              <li>
                <strong>For Pan-Frying:</strong>
              </li>
              <ol style={{ marginLeft: "-10px" }}>
                <li>Heat oil in a large skillet over medium heat.</li>
                <li>
                  Fry the chicke for 4-5 minuted per side until golden brown and
                  cooked through (internal temperature of 75°C/165°F).
                </li>
              </ol>
              <li>
                <strong>For Baking:</strong>
              </li>
              <ol style={{ marginLeft: "-10px" }}>
                <li>Preheat the oven to 200°C (400°F).</li>
                <li>
                  Place the breaded chicken on a baking sheet lined with
                  parchment paper and lightly spray with cooking spray.
                </li>
                <li>
                  Bake for 25-30 mintues, or until golden brown and cooked
                  through.
                </li>
              </ol>
            </ul>
            <p>
              <strong>Step 6: Serve</strong>
            </p>
            <ol>
              <li>Remove the toothpicks before serving.</li>
              <li>
                Serve hot with a side of mashed potatoes, steamed vegetables, or
                a crisp green salad.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Cheese Choices:</strong> Swiss or Gruyère are
                traditional, but mozzarella or cheddar work for a twist.
              </li>
              <li>
                <strong>Seal It Well:</strong> Use toothpicks or kitchen twine
                to prevent the cheese from oozing out during cooking.
              </li>
              <li>
                <strong>Crisper:</strong>For extra crunch, use panko
                breadcrumbs.
              </li>
            </ul>

            <p>
              Homemade <strong>Chicken Cordon Bleu</strong> offers a delightful
              combination of flavors and textures. The golden crust, savory ham,
              and melty cheese make it a meal that’s both comforting and
              elegant. Impress your family or guests with this easy-to-follow
              recipe that turns a classic favorite into a showstopping homemade
              dish.
            </p>
            <p>
              Try it today and enjoy the satisfaction of crafting this timeless
              recipe in your own kitchen!
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
                href="/green-cabbage-stew"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Green Cabbage Stew: A Hearty and Nutritious Dish
                </p>
              </a>

              <a
                href="/mushroom-lasagna"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Mushroom Lasagna: A Creamy and Savory Delight
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
