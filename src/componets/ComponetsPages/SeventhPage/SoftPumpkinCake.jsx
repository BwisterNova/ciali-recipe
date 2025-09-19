import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./softPumpkinCake.module.css";
import SoftPumpkinCakeImage from "./Images/imageye___-_Soft-pumpkin-cake.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SoftPumpkinCake() {
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
    <div className={styles.SoftPumpkinCakeContainer}>
      <div className={styles.SoftPumpkinCakeContents}>
        <div>
          <img src={SoftPumpkinCakeImage} alt="Alsatian Christmas Stollen" />
        </div>

        {/* Content Section */}
        <div className={styles.SoftPumpkinCakeInfo}>
          <header>
            <h1>Soft Pumpkin Cake: A Perfect Fall Treat</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Soft pumpkin cake</strong> is the epitome of autumn
              comfort. With its moist, tender texture and rich, spiced flavor,
              this cake is a true celebration of the season’s best ingredients.
              Whether you’re enjoying it for a cozy afternoon snack, a family
              gathering, or a holiday dessert, this pumpkin cake is sure to
              impress. It’s not only soft and fluffy, but the combination of
              warm spices and the natural sweetness of pumpkin creates a
              comforting treat that everyone will love. Let’s explore how to
              make this delicious and easy-to-bake cake!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Cake:</strong>
            </p>
            <ul>
              <li>1 1/2 cups all-purpose flour</li>
              <li>1 tsp baking powder</li>
              <li>1 tsp baking soda</li>
              <li>1/2 tsp ground cinnamon</li>
              <li>1/2 tsp ground nutmeg</li>
              <li>1/4 tsp ground ginger</li>
              <li>1/4 tsp salt</li>
              <li>1/2 cup unsalted butter, softened (about 1 stick)</li>
              <li>1 cup granulated sugar</li>
              <li>100g marzipan, chopped into small pieces</li>
              <li>2 large eggs</li>
              <li>1 1/2 cups canned pumpkin puree</li>
              <li>1/4 cup milk (or buttermilk for extra richness)</li>
              <li>1 tsp vanilla extract</li>
            </ul>
            <p>
              <strong>For the Cream Cheese Frosting (Optional):</strong>
            </p>
            <ul>
              <li>8 oz cream cheese, softened</li>
              <li>1/4 cup unsalted butter, softened</li>
              <li>2 cups powdered sugar</li>
              <li>1 tsp vanilla extract</li>
              <li>A pinch of salt</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Preheat the Oven and Prepare the Pan</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Grease and flour a 9-inch round cake pan or an 8×8-inch square
                pan. You can also line the bottom with parchment paper for easy
                removal.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Cake Batter</strong>
            </p>
            <ol>
              <li>
                In a medium bowl, whisk together the flour, baking powder,
                baking soda, cinnamon, nutmeg, ginger, and salt. Set aside.
              </li>
              <li>
                In a large mixing bowl, cream the softened butter and granulated
                sugar together until light and fluffy, about 3–4 minutes using a
                hand mixer or stand mixer.
              </li>
              <li>
                Add the eggs, one at a time, beating well after each addition.
              </li>
              <li>
                Stir in the pumpkin puree, milk, and vanilla extract until the
                mixture is smooth and well combined.
              </li>
              <li>
                Gradually add the dry ingredients to the wet ingredients, mixing
                until just combined. Be careful not to overmix, as this can make
                the cake dense.
              </li>
            </ol>
            <p>
              <strong>Step 3: Bake the Cake</strong>
            </p>
            <ol>
              <li>
                Pour the batter into the prepared cake pan and spread it out
                evenly with a spatula.
              </li>
              <li>
                Bake for 30–35 minutes, or until a toothpick inserted into the
                center comes out clean. The top should be golden brown and
                spring back slightly when touched.
              </li>
              <li>
                Let the cake cool in the pan for about 10 minutes, then transfer
                it to a wire rack to cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 4: Make the Cream Cheese Frosting (Optional)</strong>
            </p>
            <ol>
              <li>
                In a medium bowl, beat the softened cream cheese and butter
                until smooth and creamy.
              </li>
              <li>
                Gradually add the powdered sugar, beating until the frosting is
                light and fluffy.
              </li>
              <li>
                Stir in the vanilla extract and a pinch of salt to balance the
                sweetness. If the frosting is too thick, add a little milk until
                it reaches the desired consistency.
              </li>
            </ol>
            <p>
              <strong>Step 5: Frost the Cake and Serve</strong>
            </p>
            <ol>
              <li>
                Once the cake has cooled completely, spread the cream cheese
                frosting evenly over the top using a spatula.
              </li>
              <li>
                If desired, garnish with a sprinkle of cinnamon or chopped
                pecans for added flavor and texture.
              </li>
              <li>
                Slice and serve the cake. It’s perfect on its own, or you can
                pair it with a cup of coffee or hot tea for a cozy treat.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Choosing the right pumpkin:</strong>Use pure pumpkin
                puree, not pumpkin pie filling, which contains added sugar and
                spices.
              </li>
              <li>
                <strong>Spice variations:</strong> Adjust the amount of
                cinnamon, nutmeg, and ginger according to your taste
                preferences. You can also add cloves or allspice for a more
                robust flavor.
              </li>
              <li>
                <strong>Make it healthier:</strong> Substitute some of the
                butter with applesauce or yogurt to reduce fat content without
                compromising on moisture.
              </li>
              <li>
                <strong>Storage:</strong> This cake can be stored at room
                temperature for up to 3 days or refrigerated for up to 5 days.
                The flavors only get better after a day or two!
              </li>
            </ul>

            <p>
              <strong>Soft pumpkin cake</strong> is a wonderfully moist and
              flavorful dessert that perfectly captures the essence of fall. The
              combination of spices, pumpkin, and a smooth, creamy frosting
              makes this cake irresistible to both pumpkin lovers and casual
              dessert fans alike. It’s a fantastic treat for any occasion, from
              family dinners to holiday celebrations.
            </p>
            <p>
              Give this easy pumpkin cake recipe a try, and enjoy the comforting
              flavors of autumn in every bite!
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/desserts"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/desserts")} />
                  Desserts
                </p>
              </a>

              <a
                href="/alsatian-christmas-stollen"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Alsatian Christmas Stollen: A Traditional Holiday Delight
                </p>
              </a>

              <a
                href="/quick-tuna-tart-with-shortcrust-pastry"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Quick Tuna Tart with Shortcrust Pastry: The Best Recipe
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
