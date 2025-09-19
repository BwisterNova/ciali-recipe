import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./spicyChicken.module.css";
import SpicyChickenImage from "./Images/imageye___-_Spicy-Chicken-Spring-Rolls-A-Flavorful-Crunchy-Delight.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SpicyChicken() {
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
    <div className={styles.SpicyChickenContainer}>
      <div className={styles.SpicyChickenContents}>
        <div>
          <img src={SpicyChickenImage} alt="Spicy Chicken Spring Rolls" />
        </div>

        {/* Content Section */}
        <div className={styles.SpicyChickenInfo}>
          <header>
            <h1>Spicy Chicken Spring Rolls: A Flavorful, Crunchy Delight</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Spicy chicken springs rolls</strong> is a mouthwatering
              appetizer or snack that combines crispy, golden wrappers with a
              flavorful, spicy chicken filling. Perfectly seasoned with aromatic
              spices and herbs, these spring rolls are an irresistible
              combination of crunch, heat, and savory goodness. Whether served
              as a snack, appetizer, or part of a larger meal, these spring
              rolls will undoubtedly satisfy your craving for something bold and
              flavorful. They’re easy to make and customizable, making them a
              perfect addition to any party or gathering.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Chicken Filling</strong>
            </p>
            <ul>
              <li>
                2 boneless, skinless chicken breasts (about 300g), cooked and
                shredded
              </li>
              <li>1 medium onion, finely chopped</li>
              <li>1 garlic clove, minced</li>
              <li>1 small red bell pepper, finely chopped</li>
              <li>1/2 cup shredded carrots</li>
              <li>1/2 cup bean sprouts (optional)</li>
              <li>2 tbsp soy sauce</li>
              <li>
                1 tbsp sriracha or chili garlic sauce (adjust for desired heat
                level)
              </li>
              <li>1 tbsp hoisin sauce (optional, for added sweetness)</li>
              <li>1 tsp grated fresh ginger</li>
              <li>1/2 tsp ground cumin</li>
              <li>1/4 tsp ground coriander</li>
              <li>1 tbsp sesame oil (or vegetable oil)</li>
              <li>Fresh cilantro, chopped (for garnish)</li>
              <li>Salt and pepper to taste</li>
            </ul>
            <p>
              <strong>For the Spring Rolls</strong>
            </p>
            <ul>
              <li>
                10-12 spring roll wrappers (or rice paper wrappers for a lighter
                option)
              </li>
              <li>Vegetable oil for frying</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Chicken Filling</strong>
            </p>
            <ol>
              <li>
                In a large skillet, heat the sesame oil over medium heat. Add
                the chopped onion, garlic, and red bell pepper. Sauté for about
                2–3 minutes, until softened.
              </li>
              <li>
                Add the shredded chicken to the skillet and stir to combine with
                the vegetables.
              </li>
              <li>
                Stir in the grated ginger, ground cumin, ground coriander, soy
                sauce, sriracha (or chili garlic sauce), hoisin sauce, and
                shredded carrots. Cook for an additional 2–3 minutes, allowing
                the flavors to meld together.
              </li>
              <li>
                Add the bean sprouts (if using) and cook for another minute.
                Taste and adjust seasoning with salt, pepper, or more sriracha
                for extra heat.
              </li>
              <li>
                Remove the filling from the skillet and set it aside to cool
                slightly.
              </li>
            </ol>
            <p>
              <strong>Step 2: Assemble the Spring Rolls</strong>
            </p>
            <ol>
              <li>
                Prepare the spring roll wrappers according to the package
                instructions. If using rice paper, dip each sheet in warm water
                for a few seconds to soften.
              </li>
              <li>
                Lay the wrapper flat on a clean surface and spoon about 2-3
                tablespoons of the chicken filling near the bottom edge of the
                wrapper.
              </li>
              <li>
                Fold in the sides and roll the wrapper tightly around the
                filling, sealing the edge with a little water. Repeat with the
                remaining wrappers and filling.
              </li>
            </ol>
            <p>
              <strong>Step 3: Fry the Spring Rolls</strong>
            </p>
            <ol>
              <li>
                Heat a generous amount of vegetable oil in a large frying pan or
                wok over medium-high heat.
              </li>
              <li>
                Fry the spring rolls in batches, turning them until golden brown
                and crispy on all sides, about 3–4 minutes per batch.
              </li>
              <li>
                Remove the spring rolls from the oil and drain them on paper
                towels to remove excess oil.
              </li>
            </ol>
            <p>
              <strong>Step 4: Serve and Garnish</strong>
            </p>
            <ol>
              <li>
                Serve the spring rolls hot with a dipping sauce on the side,
                such as sweet chili sauce, soy sauce, or a tangy lime dipping
                sauce..
              </li>
              <li>
                Garnish with freshly chopped cilantro for added freshness and
                color.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Adjusting spice levels:</strong> If you prefer a milder
                flavor, reduce the amount of sriracha or chili garlic sauce, or
                omit it entirely.
              </li>
              <li>
                <strong>Baking option:</strong> If you prefer a healthier
                option, brush the spring rolls with a bit of oil and bake them
                at 200°C (400°F) for 15-20 minutes, turning halfway through,
                until golden and crispy.
              </li>

              <li>
                <strong>Customize your filling:</strong> Feel free to add extra
                vegetables, such as mushrooms, zucchini, or cabbage, for more
                texture and flavor. You can also swap the chicken for shrimp or
                tofu for a different protein.
              </li>
            </ul>

            <p>
              <strong>Spicy chicken spring rolls</strong> offer a wonderful
              balance of crispy texture and bold, spicy flavor that will leave
              your taste buds craving more. With the versatility to cater to
              various spice levels and filling options, these spring rolls are
              the perfect choice for any occasion. Whether you’re hosting a
              party or simply looking for a satisfying snack, these spring rolls
              will not disappoint.
            </p>
            <p>
              Enjoy this crunchy, spicy delight with your favorite dipping sauce
              and watch them disappear in no time!
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/Dinner"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/Dinner")} />
                  Dinner
                </p>
              </a>

              <a
                href="/revisited-blinis-with-buckwheat-and-smoked-salmon"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Revisited Blinis with Buckwheat and Smoked Salmon
                </p>
              </a>

              <a
                href="/crustless-and-gluten-free-quiche"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Crustless (and Gluten-Free) Quiche: A Delicious and Versatile
                  Dish
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
