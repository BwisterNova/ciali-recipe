import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./mushroomS.module.css";
import MushroomSImage from "./Images/imageye___-_Mushrooms-Stuffed-with-Cream-Cheese.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function MushroomS() {
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
    <div className={styles.MushroomSContainer}>
      <div className={styles.MushroomSContents}>
        <div>
          <img src={MushroomSImage} alt="Mushrooms Stuffed with Cream Cheese" />
        </div>

        {/* Content Section */}
        <div className={styles.MushroomSInfo}>
          <header>
            <h1>
              Mushrooms Stuffed with Cream Cheese: A Simple Yet Sophisticated
              Appetizer
            </h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Mushrooms stuffed with cream cheese</strong> are a
              delectable appetizer that’s quick to prepare and always a
              crowd-pleaser. These bite-sized treats combine the earthy flavor
              of mushrooms with the creamy richness of cream cheese, resulting
              in a dish that’s both comforting and elegant. Perfect for dinner
              parties, festive gatherings, or even a cozy night in, stuffed
              mushrooms are versatile enough to suit any occasion. Let’s dive
              into this easy recipe!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 12 stuffed mushrooms:</strong>
            </p>
            <ul>
              <li>12 large button or cremini mushrooms</li>
              <li>150g (about 5 oz) cream cheese, softened</li>
              <li>2 tbsp grated Parmesan cheese</li>
              <li>1 garlic clove, minced</li>
              <li>1 tbsp fresh parsley, finely chopped</li>
              <li>1/2 tsp dried thyme or oregano (optional)</li>
              <li>Salt and black pepper, to taste</li>
              <li>1 tbsp olive oil</li>
              <li>2 tbsp breadcrumbs (for topping)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Mushrooms</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Clean the mushrooms gently with a damp cloth and remove the
                stems. Reserve the stems for the filling.
              </li>
              <li>
                Lightly brush the mushroom caps with olive oil and arrange them
                on a baking sheet, hollow side up.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Filling</strong>
            </p>
            <ol>
              <li>Finely chop the reserved mushroom stems.</li>
              <li>
                Heat a small pan over medium heat and sauté the chopped stems
                with a drizzle of olive oil until softened, about 3–4 minutes.
                Let them cool slightly.
              </li>
              <li>
                In a bowl, mix the cream cheese, Parmesan cheese, minced garlic,
                sautéed mushroom stems, parsley, thyme (if using), salt, and
                pepper until smooth.
              </li>
            </ol>
            <p>
              <strong>Step 3: Stuff the Mushrooms</strong>
            </p>
            <ol>
              <li>
                Spoon the cream cheese mixture into each mushroom cap, filling
                them generously.
              </li>
              <li>
                Sprinkle a pinch of breadcrumbs over each stuffed mushroom for a
                crispy topping.
              </li>
            </ol>
            <p>
              <strong>Step 4: Bake</strong>
            </p>
            <ol>
              <li>
                Bake the mushrooms in the preheated oven for 15–20 minutes, or
                until the mushrooms are tender and the topping is golden brown.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Remove the mushrooms from the oven and let them cool slightly.
              </li>
              <li>
                Arrange them on a serving platter, garnish with a sprinkle of
                fresh parsley, and serve warm.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Choosing Mushrooms:</strong> Use large mushrooms like
                button or cremini for easy stuffing. Avoid overly small
                mushrooms, as they can be difficult to fill.
              </li>
              <li>
                <strong>Flavor variations:</strong> Add diced cooked bacon,
                chopped spinach, or sun-dried tomatoes to the cream cheese
                mixture for a unique twist.
              </li>
              <li>
                <strong>Make-ahead option:</strong> Assemble the stuffed
                mushrooms up to a day in advance and refrigerate. Bake just
                before serving for the best flavor and texture.
              </li>
              <li>
                <strong>Serving suggestion:</strong> Pair these mushrooms with a
                glass of white wine or champagne for a sophisticated touch.
              </li>
            </ul>

            <p>
              <strong>Mushrooms stuffed with cream cheese</strong> are an
              effortless yet impressive appetizer that’s guaranteed to delight
              your guests. The combination of creamy filling and tender
              mushrooms, topped with a crisp breadcrumb layer, is irresistibly
              delicious. Whether you’re planning a holiday menu or looking for a
              simple snack idea, these stuffed mushrooms will never disappoint.
            </p>
            <p>
              Give this recipe a try, and enjoy the perfect balance of flavors
              in every bite!
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
                href="/avocado-shrimp-and-cream-cheese-verrines"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Avocado, Shrimp, and Cream Cheese Verrines
                </p>
              </a>

              <a
                href="/potato-tortilla"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Potato Tortilla: A Classic Spanish Dish for Every Occasion
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
