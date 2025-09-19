import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./samosasW.module.css";
import SamosasWImage from "./Images/SamosasWImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SamosasW() {
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
    <div className={styles.SamosasWContainer}>
      <div className={styles.SamosasWContents}>
        <div>
          <img
            src={SamosasWImage}
            alt="Samosas with Minced Meat: A Crispy, Flavorful Snack"
          />
        </div>

        {/* Content Section */}
        <div className={styles.SamosasWInfo}>
          <header>
            <h1>Samosas with Minced Meat: A Crispy, Flavorful Snack</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Samosas with minced meat</strong> are a classic snack
              enjoyed around the world for their crispy exterior and savory,
              spiced filling. These delicious triangular pastries, traditionally
              from South Asia, are packed with flavorful minced meat,
              vegetables, and aromatic spices, making them perfect for any
              occasion—whether as an appetizer, a party snack, or even a light
              meal. The crunchiness of the golden pastry combined with the rich,
              spiced meat filling creates a delightful contrast that will leave
              your taste buds craving more. Let’s explore how to make this
              iconic snack at home!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Samosa Filling</strong>
            </p>
            <ul>
              <li>300g minced beef, lamb, or chicken (or a combination)</li>
              <li>1 medium onion, finely chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>1-inch piece of fresh ginger, grated</li>
              <li>1 green chili, finely chopped (optional, for heat)</li>
              <li>1/2 cup peas (optional)</li>
              <li>1 medium potato, peeled and diced</li>
              <li>1/2 tsp ground cumin</li>
              <li>1/2 tsp ground coriander</li>
              <li>1/2 tsp ground turmeric</li>
              <li>1 tsp garam masala</li>
              <li>1/2 tsp ground cinnamon</li>
              <li>1 tbsp soy sauce</li>
              <li>1 tbsp lemon juice</li>
              <li>2 tbsp vegetable oil</li>
              <li>Salt and pepper, to taste</li>
            </ul>
            <p>
              <strong>For the Dough</strong>
            </p>
            <ul>
              <li>2 cups all-purpose flour</li>
              <li>1/4 cup vegetable oil or melted butter</li>
              <li>1/2 tsp salt</li>
              <li>1/4 cup water (more if needed)</li>
              <li>1/4 tsp ground turmeric (optional, for color)</li>
            </ul>
            <p>
              <strong>For Frying</strong>
            </p>
            <ul>
              <li>Vegetable oil (for deep frying)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Filling</strong>
            </p>
            <ol>
              <li>
                In a large skillet, heat 2 tbsp of oil over medium heat. Add the
                chopped onion and sauté for 2–3 minutes until softened.
              </li>
              <li>
                Add the garlic, ginger, and green chili (if using) and cook for
                another minute until fragrant.
              </li>
              <li>
                Add the minced meat and cook, breaking it up with a spoon, until
                browned and cooked through.
              </li>
              <li>
                Add the diced potato, peas (if using), and all the spices:
                cumin, coriander, turmeric, garam masala, and cinnamon. Stir to
                combine.
              </li>
              <li>
                Pour in the soy sauce and lemon juice, and season with salt and
                pepper.
              </li>
              <li>
                Cover the skillet and let the mixture simmer for 10–12 minutes,
                or until the potatoes are tender and the flavors meld together.
              </li>
              <li>Remove from heat and set the filling aside to cool.</li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Dough</strong>
            </p>
            <ol>
              <li>
                In a large bowl, combine the flour, salt, and turmeric (if
                using). Add the oil or melted butter and mix well until the
                mixture resembles coarse crumbs.
              </li>
              <li>
                Slowly add water, a little at a time, until a smooth, stiff
                dough forms. Knead for about 5 minutes until the dough is
                elastic.
              </li>
              <li>
                Cover the dough with a damp cloth and let it rest for 15–20
                minutes.
              </li>
            </ol>
            <p>
              <strong>Step 3: Shape the Samosas</strong>
            </p>
            <ol>
              <li>
                Divide the dough into 8–10 equal portions. Roll each portion
                into a ball.
              </li>
              <li>
                Roll out each ball into a thin, oval shape (about 6 inches
                long). Cut the oval in half to create two semi-circles.
              </li>
              <li>
                Form a cone by folding each semi-circle in half and sealing the
                edge with a little water.
              </li>
              <li>
                Fill the cone with about 1–2 tablespoons of the meat filling.
                Pinch the open end of the cone to seal the samosa, forming a
                triangle shape. Ensure the filling is well-sealed to prevent it
                from spilling during frying.
              </li>
            </ol>
            <p>
              <strong>Step 4: Fry the Samosas</strong>
            </p>
            <ol>
              <li>
                Heat oil for deep frying in a large pan or wok over medium-high
                heat. The oil should be hot but not smoking (around
                350°F/175°C).
              </li>
              <li>
                Carefully drop the prepared samosas into the hot oil, a few at a
                time. Fry them for 4–5 minutes, turning occasionally, until
                golden brown and crispy.
              </li>
              <li>
                Remove the samosas from the oil and drain on paper towels to
                remove excess oil.
              </li>
            </ol>
            <p>
              <strong>Step 5: Fry the Samosas</strong>
            </p>
            <ol>
              <li>
                Serve the samosas hot with your favorite dipping sauces, such as
                tamarind chutney, mint yogurt sauce, or a simple spicy ketchup.
              </li>
              <li>Garish wth fresh cilantro if desired.</li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Spice level:</strong> Adjust the amount of green chili
                and spices according to your preferred heat level.
              </li>
              <li>
                <strong>Vegetarian option:</strong> You can replace the minced
                meat with a mixture of mashed potatoes, peas, and carrots for a
                delicious vegetarian version.
              </li>
              <li>
                <strong>Freezing:</strong> If you want to make a large batch
                ahead of time, freeze the samosas before frying. Place them on a
                baking sheet in a single layer and freeze until solid. Once
                frozen, transfer them to a zip-top bag or container. When ready
                to cook, fry them straight from the freezer.
              </li>
              <li>
                <strong>Baking option:</strong> If you prefer to bake the
                samosas, brush them with a little oil and bake them at 200°C
                (400°F) for 20–25 minutes, or until golden brown.
              </li>
            </ul>

            <p>
              <strong>Samosas with minced meat</strong> are an irresistible
              treat that combines bold flavors, crispy texture, and aromatic
              spices. Perfect for any occasion, these savory pastries will
              impress your guests and are sure to disappear quickly! Whether
              served at a party, as an appetizer, or as a snack, these homemade
              samosas are a fun and delicious way to enjoy a traditional dish
              with your own personal touch.
            </p>
            <p>
              Enjoy your freshly fried samosas with a side of chutney or dipping
              sauce, and savor every bite!
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
                href="/potato-tortilla"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Potato Tortilla: A Classic Spanish Dish for Every Occasion
                </p>
              </a>

              <a
                href="/spring-rolls-with-crab-chinese-cabbage-and-bamboo-shoots"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Spring Rolls with Crab, Chinese Cabbage, and Bamboo Shoots
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
