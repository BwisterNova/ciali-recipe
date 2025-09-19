import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./appleMascarpone.module.css";
import AppleMascarponeImage from "./Images/imageye___-_Apple-Mascarpone-Cake.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AppleMascarpone() {
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
    <div className={styles.AppleMascarponeContainer}>
      <div className={styles.AppleMascarponeContents}>
        <div>
          <img src={AppleMascarponeImage} alt="Apple Mascarpone Cake" />
        </div>

        {/* Content Section */}
        <div className={styles.AppleMascarponeInfo}>
          <header>
            <h1>
              Apple Mascarpone Cake: A Delightful Dessert for All Occasions
            </h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Apple mascarpone cake</strong> is a moist, flavorful
              dessert that perfectly combines the sweetness of apples with the
              creamy richness of mascarpone cheese. This cake is a wonderful way
              to celebrate the flavors of autumn, but it can be enjoyed
              year-round. With its soft texture and delicate sweetness, it’s the
              perfect treat for family gatherings, afternoon teas, or even as a
              special dessert for a holiday meal. Let’s dive into the recipe for
              this delicious apple mascarpone cake!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Cake:</strong>
            </p>
            <ul>
              <li>
                2 large apples (such as Granny Smith or Fuji), peeled, cored,
                and diced
              </li>
              <li>250g mascarpone cheese (about 1 cup)</li>
              <li>3 large eggs</li>
              <li>200g all-purpose flour (about 1 2/3 cups)</li>
              <li>150g granulated sugar (about 3/4 cup)</li>
              <li>1 tsp vanilla extract</li>
              <li>1 tsp baking powder</li>
              <li>1/2 tsp ground cinnamon</li>
              <li>1/4 tsp salt</li>
              <li>100g unsalted butter, melted (about 1/2 cup)</li>
              <li>50g milk (about 1/4 cup)</li>
              <li>Powdered sugar, for dusting (optional)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Preheat the Oven and Prepare the Pan</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Grease and flour a 9-inch (23 cm) round cake pan or line it with
                parchment paper for easy removal.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Apples</strong>
            </p>
            <ol>
              <li>
                Peel, core, and dice the apples into small pieces. If you prefer
                a softer texture, you can sauté the diced apples in a little
                butter and cinnamon for 5 minutes before adding them to the
                batter. This step will make them even more tender and flavorful.
                Set aside.
              </li>
            </ol>
            <p>
              <strong>Step 3: Make the Cake Batter</strong>
            </p>
            <ol>
              <li>
                In a large bowl, whisk together the mascarpone cheese, eggs,
                sugar, vanilla extract, melted butter, and milk until smooth and
                well combined.
              </li>
              <li>
                In a separate bowl, sift together the flour, baking powder,
                cinnamon, and salt.
              </li>
              <li>
                Gradually add the dry ingredients to the wet ingredients, mixing
                gently until a smooth batter forms.
              </li>
            </ol>
            <p>
              <strong>Step 4: Fold in the Apples</strong>
            </p>
            <ol>
              <li>
                Gently fold the diced apples into the cake batter using a
                spatula, ensuring they are evenly distributed throughout the
                batter.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake the Cake</strong>
            </p>
            <ol>
              <li>
                Pour the batter into the prepared cake pan and smooth the top
                with a spatula.
              </li>
              <li>
                Bake for 35–40 minutes, or until a toothpick inserted into the
                center of the cake comes out clean. The cake should be golden
                brown on top and spring back when lightly touched.
              </li>
              <li>
                Allow the cake to cool in the pan for 10 minutes before
                transferring it to a wire rack to cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 6: Serve</strong>
            </p>
            <ol>
              <li>
                Once the cake has cooled, dust it with powdered sugar for a
                simple, elegant finish.
              </li>
              <li>
                Slice and serve the cake on its own, or pair it with a dollop of
                whipped cream or vanilla ice cream for an extra indulgent treat.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Apple variety:</strong> Different apple varieties can
                provide different flavors and textures. Tart apples like Granny
                Smith give a nice contrast to the sweetness of the cake, while
                sweeter apples like Fuji or Gala add more natural sweetness.
              </li>
              <li>
                <strong>Moisture level: </strong>If the batter feels too thick,
                you can add an extra tablespoon of milk to achieve a smoother
                consistency.
              </li>
              <li>
                <strong>Make it your own:</strong>Add a handful of chopped nuts
                (such as walnuts or pecans) or a sprinkle of raisins or sultanas
                for added texture and flavor.
              </li>
              <li>
                <strong>Serving suggestion:</strong> This cake pairs wonderfully
                with a cup of hot tea or coffee.
              </li>
            </ul>

            <p>
              <strong>Apple mascarpone cake</strong> is a comforting,
              easy-to-make dessert that brings together the best of fall flavors
              in every bite. The combination of tender apples and creamy
              mascarpone cheese makes this cake moist and delicious, while the
              light spicing adds warmth and depth. Whether served at a family
              dinner, as a treat with coffee, or for a special occasion, this
              cake is sure to be a hit with everyone.
            </p>
            <p>
              Try making this apple mascarpone cake at home, and enjoy a slice
              of comforting sweetness with your loved ones!
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
                href="/quick-tuna-tart-with-shortcrust-pastry"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Quick Tuna Tart with Shortcrust Pastry: The Best Recipe
                </p>
              </a>

              <a
                href="/potato-croquettes-with-raw-ham"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Potato Croquettes with Raw Ham: A Crispy and Savory Treat
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
