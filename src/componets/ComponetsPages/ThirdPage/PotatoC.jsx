import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./potatoC.module.css";
import PotatoCImage from "./Images/imageye___-_Potato-Croquettes-with-Raw-Ham.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PotatoC() {
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
    <div className={styles.PotatoCContainer}>
      <div className={styles.PotatoCContents}>
        <div>
          <img src={PotatoCImage} alt="Potato Croquettes with Raw Ham" />
        </div>

        {/* Content Section */}
        <div className={styles.PotatoCInfo}>
          <header>
            <h1>Potato Croquettes with Raw Ham: A Crispy and Savory Treat</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Potato croquettes with raw ham</strong> are a
              mouthwatering combination of creamy mashed potatoes and savory
              cured ham, encased in a golden, crispy crust. Perfect as an
              appetizer, side dish, or snack, these croquettes are sure to
              please everyone at the table. Their rich flavor and satisfying
              crunch make them a crowd favorite for any occasion, from family
              dinners to festive gatherings. Let’s dive into the recipe for
              these irresistible potato croquettes with raw ham!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Croquettes:</strong>
            </p>
            <ul>
              <li>
                500g potatoes (starchy varieties like Russets or Yukon Gold work
                best)
              </li>
              <li>
                100g raw ham (such as prosciutto or serrano), finely chopped
              </li>
              <li>2 eggs yolks</li>
              <li>50g grated Parmesan cheese</li>
              <li>1 tbsp fresh parsley, finely chopped (optional)</li>
              <li>Salt and black pepper, to taste</li>
            </ul>
            <p>
              <strong>For Coating and Frying::</strong>
            </p>
            <ul>
              <li>2 eggs, beaten</li>
              <li>100g all-purpose flour</li>
              <li>150g breadcrumbs</li>
              <li>Vegetable oil, for frying</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Potato Mixture</strong>
            </p>
            <ol>
              <li>
                Peel the potatoes and cut them into chunks. Boil them in salted
                water for 15–20 minutes, or until tender.
              </li>
              <li>
                Drain the potatoes well and mash them in a large bowl until
                smooth. Allow them to cool slightly.
              </li>
              <li>
                Add the egg yolks, grated Parmesan, chopped raw ham, parsley (if
                using), salt, and pepper to the mashed potatoes. Mix thoroughly
                to combine.
              </li>
            </ol>
            <p>
              <strong>Step 2: Shape the Croquettes</strong>
            </p>
            <ol>
              <li>
                Take small portions of the potato mixture and shape them into
                cylinders or small balls, about 5 cm (2 inches) long.
              </li>
              <li>
                Place the shaped croquettes on a tray lined with parchment paper
                and refrigerate for 20–30 minutes to firm up.
              </li>
            </ol>
            <p>
              <strong>Step 3: Coat the Croquettes</strong>
            </p>
            <ol>
              <li>
                Set up a coating station with three shallow bowls: one with
                flour, one with beaten eggs, and one with breadcrumbs.
              </li>
              <li>
                Dip each croquette into the flour, then the beaten egg, and
                finally coat it in breadcrumbs, ensuring it’s evenly covered.
              </li>
            </ol>
            <p>
              <strong>Step 4: Fry the Croquettes</strong>
            </p>
            <ol>
              <li>
                Heat vegetable oil in a deep skillet or frying pan over
                medium-high heat. The oil should be hot enough to sizzle a
                breadcrumb when dropped in.
              </li>
              <li>
                Fry the croquettes in batches, turning occasionally, for about
                3–4 minutes, or until golden brown and crispy on all sides.
              </li>
              <li>
                Remove the croquettes with a slotted spoon and drain on paper
                towels to remove excess oil.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Serve the potato croquettes hot, garnished with a sprinkle of
                parsley or a side of your favorite dipping sauce, such as garlic
                aioli or a tangy tomato chutney.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Potato texture:</strong> Ensure the potatoes are
                well-drained and mashed smoothly to avoid lumps in the
                croquettes.
              </li>
              <li>
                <strong>Ham variations: </strong>Experiment with different cured
                meats like pancetta or speck for unique flavors.
              </li>
              <li>
                <strong>Crispier coating:</strong>For an extra crunchy texture,
                use panko breadcrumbs instead of regular breadcrumbs.
              </li>
              <li>
                <strong>Baking option:</strong> If you prefer a healthier
                alternative, bake the croquettes in a preheated oven at 200°C
                (400°F) for 20–25 minutes, flipping halfway through. Brush them
                lightly with oil for a golden finish.
              </li>
            </ul>

            <p>
              <strong>Potato croquettes with raw ham</strong> combine comfort
              and elegance in every bite. The creamy interior, highlighted by
              the rich, salty flavor of raw ham, contrasts beautifully with the
              crispy exterior, making these croquettes an irresistible treat.
              Whether you’re serving them as a starter, party snack, or side
              dish, they’re guaranteed to be a hit with family and friends.
            </p>
            <p>
              Try making these delightful croquettes at home and elevate your
              next meal with this classic, crowd-pleasing recipe!
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
                href="/apple-mascarpone-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Apple Mascarpone Cake: A Delightful Dessert for All Occasions
                </p>
              </a>

              <a
                href="/avocado-shrimp-and-cream-cheese-verrines"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Avocado, Shrimp, and Cream Cheese Verrines
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
