import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./indianChicken.module.css";
import IndiaChickenImage from "./Images/Indian-Chicken-with-Tomato-and-Rice.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function IndianChicken() {
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
    <div className={styles.IndianChickenContainer}>
      <div className={styles.IndianChickenContents}>
        <div>
          <img
            src={IndiaChickenImage}
            alt="Indian Chicken with Tomato and Rice"
          />
        </div>

        {/* Content Section */}
        <div className={styles.IndianChickenInfo}>
          <header>
            <h1>Indian Chicken with Tomato and Rice</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Indian chicken</strong> with tomato and rice is a
              flavorful and satisfying one-pot dish that combines aromatic
              spices, tender chicken, and perfectly cooked rice. Inspired by the
              vibrant flavors of Indian cuisine, this recipe is easy to make and
              perfect for weeknight dinners or a cozy family meal.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 4 servings:</strong>
            </p>
            <ul>
              <li>4 chicken thighs or drumsticks (bone-in, skin-on)</li>
              <li>1 cup basmati rice, rinsed and drained</li>
              <li>1 large onion, finely chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>1-inch piece of ginger, minced</li>
              <li>
                2 medium tomatoes, finely chopped (or 1 cup canned diced
                tomatoes)
              </li>
              <li>1/2 cup plain yogurt</li>
              <li>2 tbsp vegetable oil or ghee</li>
              <li>1 tsp cumin seeds</li>
              <li>1 tsp ground turmeric</li>
              <li>1 tsp ground coriander</li>
              <li>1/2 tsp chili powder (adjust to taste)</li>
              <li>1 tsp garam masala</li>
              <li>2 cups chicken broth or water</li>
              <li>1/4 cup fresh cilantro, chopped (for garnish)</li>
              <li>Salt and freshly ground black pepper to taste</li>
            </ul>
            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Thaw the Raspberries</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                In a bowl, mix the yogurt with turmeric, chili powder, and a
                pinch of salt.
              </li>
              <li>
                Coat the chicken pieces with the marinade and set aside for at
                least 30 minutes (or refrigerate overnight for deeper flavor).
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Base</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Heat oil or ghee in a large pot or deep skillet over medium
                heat.
              </li>
              <li>
                Add the cumin seeds and let them sizzle for a few seconds.
              </li>
              <li>
                Stir in the onions and sauté until golden brown, about 8-10
                minutes.
              </li>
              <li>
                Add the garlic, ginger, and coriander, and cook for another 2
                minutes.
              </li>
            </ol>
            <p>
              <strong>Step 3: Cook the Chicken</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Add the marinated chicken to the pot and brown on all sides,
                about 5 minutes.
              </li>
              <li>
                Stir in the chopped tomatoes and cook until they soften and form
                a thick sauce, about 5-7 minutes.
              </li>
            </ol>
            <p>
              <strong>Step 4: Add the Rice and Liquid</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Stir the rinsed rice into the pot, ensuring it is well coated
                with the tomato mixture.
              </li>
              <li>
                Pour in the chicken broth, season with salt, and bring to a
                boil.
              </li>
            </ol>
            <p>
              <strong>Step 5: Simmer and Cook</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Reduce the heat to low, cover the pot, and let it simmer for
                20-25 minutes, or until the rice is tender and the chicken is
                fully cooked (internal temperature of 75°C/165°F).
              </li>
              <li>Remove from heat and let it rest, covered, for 5 minutes.</li>
            </ol>
            <p>
              <strong>Step 6: Serve</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Fluff the rice with a fork and garnish with fresh cilantro.
              </li>
              <li>
                Serve hot with a side of raita (yogurt sauce) or a simple
                cucumber salad.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Spice Level:</strong> Adjust the chili powder to your
                preferred level of heat.
              </li>
              <li>
                <strong>Tomato Alternative:</strong> If fresh tomatoes are out
                of season, use canned diced tomatoes for consistent flavor.
              </li>
              <li>
                <strong>Vegetarian Option:</strong> Replace chicken with
                chickpeas or paneer for a plant-based version.
              </li>
            </ul>

            <p>
              This <strong>Indian Chicken with Tomato and Rice</strong> is a
              wholesome, flavorful dish that brings the essence of Indian spices
              to your kitchen. With its combination of tender chicken, fragrant
              rice, and vibrant tomatoes, it’s a one-pot wonder that’s as easy
              to make as it is delicious.
            </p>
            <p>
              Try this recipe today and enjoy a comforting meal that's sure to
              become a family favourite!
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
                href="/frozen-raspberry-coulis"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Frozen Raspberry Coulis: A Versatile and Refreshing Delight
                </p>
              </a>
              <a
                href="/raspberry-mascarpone-sponge-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Raspberry Mascarpone Sponge Cake: A Perfect Blend of Elegance
                  and Flavor
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
