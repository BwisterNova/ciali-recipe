import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./pumpkinCake.module.css";
import PumpkinCakeImage from "./Images/imageye___-_Pumpkin-Apple-Cake-A-Cozy-Fall-Delight.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PumpkinCake() {
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
    <div className={styles.PumpkinCakeContainer}>
      <div className={styles.PumpkinCakeContents}>
        <div>
          <img src={PumpkinCakeImage} alt="Pumpkin Apple Cake" />
        </div>

        {/* Content Section */}
        <div className={styles.PumpkinCakeInfo}>
          <header>
            <h1>Pumpkin Apple Cake: A Cozy Fall Delight</h1>
            <p>November 29, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              What’s better than a dessert that combines the earthy sweetness of
              pumpkin and the crisp tanginess of apples? This{" "}
              <strong>pumpkin apple cake</strong> is the perfect treat for cozy
              autumn afternoons or festive gatherings. Moist, flavorful, and
              spiced with warm aromas, it’s a delightful way to celebrate the
              best flavors of fall. Whether you enjoy it with a cup of tea or as
              a dessert centerpiece, this cake is sure to impress.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Cake:</strong>
            </p>
            <ul>
              <li>200g pumpkin puree (about 1 cup)</li>
              <li>150g grated apple (about 1 medium apple)</li>
              <li>200g all-purpose flour (about 1 1/2 cups)</li>
              <li>150g sugar (about 3/4 cup)</li>
              <li>2 large eggs</li>
              <li>100ml vegetable oil (about 1/2 cup)</li>
              <li>1 tsp vanilla extract</li>
              <li>1 tsp baking powder</li>
              <li>1/2 tsp baking soda</li>
              <li>1 tsp ground cinnamon</li>
              <li>1/2 tsp ground nutmeg</li>
              <li>1/4 tsp ground cloves</li>
              <li>Pinch of salt</li>
            </ul>

            <p>
              <strong>Optional Toppings:</strong>
            </p>
            <ul>
              <li>Powdered sugar for dusting</li>
              <li>Cream cheese frosting</li>
              <li>Chopped nuts or pumpkin seeds</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Ingredients</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F). Grease and line a 20cm
                (8-inch) round or square baking pan with parchment paper.
              </li>
              <li>
                If using fresh pumpkin, steam or roast it until tender, then
                blend into a smooth puree. Grate the apple and set it aside.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Batter</strong>
            </p>
            <ol>
              <li>
                In a large mixing bowl, whisk together the pumpkin puree, grated
                apple, sugar, eggs, oil, and vanilla extract until well
                combined.
              </li>
              <li>
                In a separate bowl, sift together the flour, baking powder,
                baking soda, spices, and salt.
              </li>
              <li>
                Gradually fold the dry ingredients into the wet mixture until
                just combined. Avoid overmixing to keep the cake tender.
              </li>
            </ol>
            <p>
              <strong>Step 3: Bake the Cake</strong>
            </p>
            <ol>
              <li>
                Pour the batter into the prepared pan, spreading it evenly.
              </li>
              <li>
                Bake for 30-35 minutes, or until a toothpick inserted into the
                center comes out clean.
              </li>
              <li>
                Let the cake cool in the pan for 10 minutes, then transfer it to
                a wire rack to cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 4: Add the Finishing Touches</strong>
            </p>
            <ol>
              <li>
                Dust the cake with powdered sugar for a simple finish, or top
                with cream cheese frosting for extra indulgence.
              </li>
              <li>
                Sprinkle with chopped nuts or pumpkin seeds for added crunch and
                visual appeal.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Pumpkin puree:</strong> Canned pumpkin works perfectly,
                but homemade puree will give your cake a fresh, vibrant flavor.
              </li>
              <li>
                <strong>Apple variety:</strong> Use a tart apple like Granny
                Smith for a tangy contrast, or a sweeter variety like Fuji for
                extra sweetness.
              </li>
              <li>
                <strong>Spice blend:</strong> Adjust the spice mix to your
                liking—add more cinnamon for warmth or ginger for a zesty kick.
              </li>
            </ul>

            <p>
              This <strong>pumpkin apple cake</strong> is the epitome of autumn
              comfort. With its moist texture, balanced flavors, and fragrant
              spices, it’s a versatile dessert that shines at family dinners,
              holiday tables, or casual tea breaks.
            </p>

            <p>
              Easy to make and packed with seasonal goodness, this cake will
              quickly become a favorite for pumpkin and apple lovers alike. Give
              it a try, and savor the delicious taste of fall in every bite!
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
                href="/light-strawberry-roll-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Light Strawberry Roll Cake: A Fresh and Fluffy Delight
                </p>
              </a>

              <a
                href="/how-to-prepare-easy-pancakes"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  How to Prepare Easy Pancakes
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
