import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./cakeW.module.css";
import CakeWImage from "./Images/CakeWImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CakeW() {
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
    <div className={styles.CakeWContainer}>
      <div className={styles.CakeWContents}>
        <div>
          <img
            src={CakeWImage}
            alt="Cake with Sun-Dried Vegetables and Mozzarella"
          />
        </div>

        {/* Content Section */}
        <div className={styles.CakeWInfo}>
          <header>
            <h1>
              Cake with Sun-Dried Vegetables and Mozzarella: A Savory Delight
              for Every Occasion
            </h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Looking for a unique, savory cake that’s both flavorful and
              satisfying? This{" "}
              <strong>cake with sun-dried vegetables and mozzarella</strong> is
              a perfect choice! Combining the richness of sun-dried tomatoes,
              roasted vegetables, and the creamy texture of mozzarella cheese,
              this savory cake is a delicious twist on traditional baking.
              Whether served as an appetizer, a side dish, or even as a light
              meal on its own, it’s sure to impress your guests with its depth
              of flavor and delightful texture. Plus, it’s easy to make and
              versatile, allowing you to customize it to your taste!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Filling</strong>
            </p>
            <ul>
              <li>
                1 cup all-purpose flour (or gluten-free flour for a gluten-free
                option)
              </li>
              <li>1 tsp baking powder</li>
              <li>1/2 tsp baking soda</li>
              <li>1/4 tsp salt</li>
              <li>2 large eggs</li>
              <li>1/2 cup olive oil</li>
              <li>1/2 cup milk (or a dairy-free milk alternative)</li>
              <li>1 cup sun-dried tomatoes, chopped</li>
              <li>
                1 cup mixed roasted vegetables (e.g., zucchini, bell pepper,
                eggplant), finely chopped
              </li>
              <li>1 cup shredded mozzarella cheese</li>
              <li>
                1/4 cup grated Parmesan cheese (optional, for extra flavor)
              </li>
              <li>1 tbsp fresh basil, chopped</li>
              <li>1/2 tsp dried oregano</li>
              <li>1/4 tsp black pepper</li>
              <li>
                1 tbsp pine nuts or sunflower seeds (optional, for crunch)
              </li>
            </ul>
            <p>
              <strong>For the Serving (Optional)</strong>
            </p>
            <ul>
              <li>Fresh basil leaves</li>
              <li>Balsamic glaze (optional, for drizzling)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Vegetables</strong>
            </p>
            <ol>
              <li>
                If you’re using roasted vegetables, chop them into small,
                bite-sized pieces. If you’re starting with fresh vegetables,
                chop them and roast them in the oven at 200°C (400°F) for 20-25
                minutes with a bit of olive oil and salt until soft and lightly
                charred. Let them cool before adding to the batter.
              </li>
              <li>
                Chop the sun-dried tomatoes into small pieces. If they are
                packed in oil, drain them before use.
              </li>
            </ol>
            <p>
              <strong>Step 2: Mix the Dry Ingredients</strong>
            </p>
            <ol>
              <li>
                In a large bowl, sift together the flour, baking powder, baking
                soda, and salt. Set aside.
              </li>
            </ol>
            <p>
              <strong>Step 3: Mix the Wet Ingredients</strong>
            </p>
            <ol>
              <li>
                In another bowl, whisk the eggs, olive oil, and milk together
                until smooth and combined.
              </li>
            </ol>
            <p>
              <strong>Step 4: Combine the Ingredients</strong>
            </p>
            <ol>
              <li>
                Slowly add the wet ingredients to the dry ingredients, stirring
                gently until just combined.
              </li>
              <li>
                Fold in the sun-dried tomatoes, roasted vegetables, mozzarella
                cheese, Parmesan cheese (if using), basil, oregano, black
                pepper, and pine nuts (if using). Mix until everything is evenly
                distributed throughout the batter.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake the Cake</strong>
            </p>
            <ol>
              <li>
                Preheat the oven to 180°C (350°F). Grease and flour a loaf pan
                or a round cake pan (about 8 inches in diameter) or line it with
                parchment paper.
              </li>
              <li>
                Pour the batter into the prepared pan, smoothing the top with a
                spatula.
              </li>
              <li>
                Bake for 35-40 minutes, or until a toothpick inserted into the
                center of the cake comes out clean and the top is golden brown.
              </li>
            </ol>
            <p>
              <strong>Step 6: Cool and Serve</strong>
            </p>
            <ol>
              <li>
                Let the cake cool in the pan for 10 minutes, then remove it from
                the pan and transfer it to a wire rack to cool completely.
              </li>
              <li>
                Once cooled, slice the cake and serve. If desired, drizzle with
                balsamic glaze and garnish with fresh basil leaves for a fresh,
                tangy finish.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Vegetable options:</strong> Feel free to customize the
                cake with your favorite vegetables! You can use roasted sweet
                potatoes, mushrooms, spinach, or even artichokes for different
                flavors and textures.
              </li>
              <li>
                <strong>Cheese varieties:</strong> For a different flavor
                profile, experiment with different cheeses like goat cheese,
                feta, or cheddar.
              </li>
              <li>
                <strong>Storage:</strong> This savory cake keeps well for up to
                2-3 days in an airtight container at room temperature, and it
                also freezes well. Just slice it before freezing for easy
                portions!
              </li>
            </ul>

            <p>
              This{" "}
              <strong>cake with sun-dried vegetables and mozzarella </strong>
              offers a perfect balance of savory flavors and satisfying
              textures. It’s an excellent option for brunches, picnics, or
              casual dinners and can be served warm or at room temperature. The
              combination of sun-dried tomatoes, roasted vegetables, and melty
              mozzarella creates a deliciously moist and flavorful cake that’s
              sure to become a favorite in your savory baking repertoire.
            </p>
            <p>
              Enjoy this savory delight with a side of salad or a drizzle of
              balsamic glaze for an even more elevated experience!
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
                href="/spring-rolls-with-crab-chinese-cabbage-and-bamboo-shoots"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Spring Rolls with Crab, Chinese Cabbage, and Bamboo Shoots
                </p>
              </a>

              <a
                href="/revisited-blinis-with-buckwheat-and-smoked-salmon"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Revisited Blinis with Buckwheat and Smoked Salmon
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
