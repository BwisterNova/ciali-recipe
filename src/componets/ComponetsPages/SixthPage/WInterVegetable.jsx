import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./winterVegetable.module.css";
import WinterVegetableImage from "./Images/WinterVegetableImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function WinterVegetable() {
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
    <div className={styles.WinterVegetableContainer}>
      <div className={styles.WinterVegetableContents}>
        <div>
          <img
            src={WinterVegetableImage}
            alt="Winter Vegetable Flan: A Comforting Seasonal Recipe"
          />
        </div>

        {/* Content Section */}
        <div className={styles.WinterVegetableInfo}>
          <header>
            <h1>Winter Vegetable Flan: A Comforting Seasonal Recipe</h1>
            <p>December 1, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Warm, comforting, and packed with the goodness of winter
              vegetables, this <strong>Winter Vegetable Flancon?</strong> is a
              versatile dish that can be served as a light main course, a side
              dish, or even as part of a festive spread. Made with seasonal
              produce and a creamy egg mixture, it’s both nutritious and
              delicious.
            </p>
            <p>
              Here’s how to create this simple yet elegant dish that will
              brighten up your winter table.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For 4-6 servings:</strong>
            </p>
            <ul>
              <li>2 medium carrots, peeled and diced</li>
              <li>1 small butternut squash, peeled and diced</li>
              <li>1 small leek, thinly sliced</li>
              <li>150g (5 oz) fresh spinach leaves</li>
              <li>4 large eggs</li>
              <li>200ml (3/4 cup) heavy cream</li>
              <li>100ml (1/3 cup) milk</li>
              <li>
                100g (3.5 oz) grated cheese (Parmesan, Gruyère, or Cheddar)
              </li>
              <li>1 tbsp olive oil</li>
              <li>Salt and freshly ground black pepper</li>
              <li>1 tsp dried thyme or rosemary (optional)</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Vegetables</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>Heat the olive oil in a large skillet over medium heat.</li>
              <li>
                Add the carrots, butternut squash, and leeks. Sauté for 8-10
                minutes until slightly softened.
              </li>
              <li>
                Add the spinach and cook for another 2-3 minutes until wilted.
                Season with salt, pepper, and herbs if desired. Remove from heat
                and let cool slightly.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the the Egg Mixture</strong>
            </p>
            <ol>
              <li>
                In a large mixing bowl, whisk together the eggs, cream, and milk
                until smooth.
              </li>
              <li>
                Stir in half of the grated cheese and season with salt and
                pepper.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Flan</strong>
            </p>
            <ol>
              <li>Grease a medium-sized baking dish or individual ramekins.</li>
              <li>Spread the sautéed vegetables evenly in the dish.</li>
              <li>
                Pour the egg mixture over the vegetables, ensuring they are well
                coated
              </li>
              <li>Sprinkle the remaining cheese on top.</li>
            </ol>
            <p>
              <strong>Step 4: Bake the Flan</strong>
            </p>
            <ol>
              <li>
                Place the flan in the preheated oven and bake for 30-35 minutes,
                or until the center is set and the top is golden brown.
              </li>
              <li>
                If using ramekins, reduce the baking time to 20-25 minutes.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Let the flan cool for a few minutes before slicing or serving.
              </li>
              <li>
                Pair it with a crisp green salad or a slice of crusty bread for
                a complete meal.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Vegetable Variations:</strong> Feel free to substitute
                or add other winter vegetables like parsnips, sweet potatoes, or
                broccoli.
              </li>
              <li>
                <strong>Cheese Options:</strong> Try different cheeses to suit
                your taste. Goat cheese or feta can add a tangy twist.
              </li>
              <li>
                <strong>Meal Prep Friendly:</strong> This flan can be made ahead
                and reheated, making it perfect for meal prep or entertaining.
              </li>
            </ul>

            <p>
              This <strong> Winter Vegetable Flan</strong> is a delightful way
              to enjoy seasonal produce in a comforting and flavorful dish. Its
              creamy texture, vibrant colors, and wholesome ingredients make it
              a hit with both kids and adults.
            </p>

            <p>
              Whether you’re hosting a dinner party or looking for a simple meal
              idea, this vegetable flan is sure to impress. Try it out this
              winter and savor the cozy flavors!
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
                href="/pumpkin-stuffed-with-mushrooms-onions-and-bacon"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Pumpkin Stuffed with Mushrooms, Onions, and Bacon: A Savory
                  Fall Delight
                </p>
              </a>

              <a
                href="/capon-supreme-with-morels"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Capon Supreme with Morels: A Refined Holiday Recipe
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
