import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./bakedRice.module.css";
import BakedRiceImage from "./Images/imageye___-_Baked-Rice-Pudding-A-Creamy-Comforting-Dessert.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function BakedRice() {
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
    <div className={styles.BakedRiceContainer}>
      <div className={styles.BakedRiceContents}>
        <div>
          <img src={BakedRiceImage} alt="Baked Rice Pudding" />
        </div>

        {/* Content Section */}
        <div className={styles.BakedRiceInfo}>
          <header>
            <h1>Baked Rice Pudding: A Creamy, Comforting Dessert</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Rice pudding</strong> is a beloved dessert that brings
              warmth and comfort to any occasion. While stovetop versions are
              popular, <strong>baked rice pudding</strong> takes the classic
              dish to the next level. Baked to perfection, this version results
              in a creamy, custard-like texture with a golden top that adds a
              delightful contrast. It’s a perfect dessert for cozy nights,
              family gatherings, or a sweet treat after dinner.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <ul>
              <li>1 cup Arborio rice (or any short-grain rice)</li>
              <li>4 cups whole milk</li>
              <li>1 cup heavy cream</li>
              <li>1/2 cup granulated sugar</li>
              <li>2 large eggs</li>
              <li>1 tsp vanilla extract</li>
              <li>1/2 tsp ground cinnamon (optional)</li>
              <li>1/4 tsp ground nutmeg (optional)</li>
              <li>A pinch of salt</li>
              <li>Butter (for greasing the baking dish)</li>
              <li>Ground cinnamon or nutmeg, for garnish</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Rice</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 160°C (325°F). Grease a 2-liter (8×8 inch)
                baking dish with butter.
              </li>
              <li>
                Rinse the rice under cold water to remove excess starch, then
                place it in a large saucepan. Add 2 cups of water to the rice
                and bring it to a simmer. Cook the rice for 10–12 minutes, or
                until it’s partially cooked but still firm. Drain any excess
                water and set the rice aside.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Custard</strong>
            </p>
            <ol>
              <li>
                In a separate saucepan, combine the milk, heavy cream, sugar,
                vanilla extract, cinnamon, nutmeg, and salt. Heat the mixture
                over medium heat, stirring occasionally, until it is warm but
                not boiling.
              </li>
              <li>
                In a mixing bowl, beat the eggs until smooth. Gradually add a
                small amount of the warm milk mixture to the eggs, whisking
                constantly to temper the eggs. Slowly pour the egg mixture back
                into the saucepan with the remaining milk, whisking continuously
                until well combined.
              </li>
            </ol>
            <p>
              <strong>Step 3: Combine Rice and Custard</strong>
            </p>
            <ol>
              <li>
                Add the partially cooked rice to the buttered baking dish. Pour
                the warm custard mixture over the rice, stirring gently to
                combine.
              </li>
              <li>Spread the rice and custard evenly in the baking dish.</li>
            </ol>
            <p>
              <strong>Step 4: Bake the Rice Pudding</strong>
            </p>
            <ol>
              <li>
                Cover the baking dish with aluminum foil and bake in the
                preheated oven for 45 minutes.
              </li>
              <li>
                Spread the apple mixture evenly along one short edge of the
                dough, leaving a border of about 2 cm.If you like, you can top
                the quiche with a bit more cheese for a golden, cheesy top.
              </li>
              <li>
                After 45 minutes, remove the foil and stir the pudding gently.
                Continue baking for an additional 30–40 minutes, or until the
                top is golden brown and the pudding is set. The pudding will
                thicken as it cools.
              </li>
            </ol>
            <p>
              <strong>Step 5: Cool and Serve</strong>
            </p>
            <ol>
              <li>
                Allow the rice pudding to cool slightly before serving. It can
                be served warm or chilled, depending on your preference.
              </li>
              <li>
                Garnish with a sprinkle of ground cinnamon or nutmeg for added
                flavor and decoration.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Rice choice:</strong> Garnish with a sprinkle of ground
                cinnamon or nutmeg for added flavor and decoration.
              </li>
              <li>
                <strong>Make it sweeter:</strong>If you like a sweeter pudding,
                feel free to add extra sugar to taste. You can also drizzle
                honey or maple syrup on top before serving.
              </li>

              <li>
                <strong>Flavor variations:</strong> Add raisins, dried
                cranberries, or even chopped fresh fruit (like pears or apples)
                for extra flavor and texture.
              </li>
            </ul>

            <h3>Serving Suggestions</h3>

            <p>
              Baked rice pudding is perfect on its own, but you can also serve
              it with a dollop of whipped cream, a scoop of vanilla ice cream,
              or a drizzle of caramel sauce for an extra indulgent treat. Pair
              it with a hot cup of tea or coffee for a cozy dessert experience.
            </p>
            <p>
              <strong>Baked rice pudding</strong> is the ultimate comfort
              food—creamy, warm, and deeply satisfying. Its rich texture and
              sweet flavor make it a perfect choice for any season, but it’s
              especially wonderful as a comforting winter dessert. Whether
              you’re enjoying it fresh from the oven or as a chilled treat, this
              classic dessert is sure to become a favorite.
            </p>
            <p>Happy baking and enjoy</p>

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
                href="/salmon-blanquette-with-vegetables-and-poulette-sauce"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Salmon Blanquette with Vegetables and Poulette Sauce
                </p>
              </a>

              <a
                href="/easy-mascarpone-and-raspberry-christmas-yule-log"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Easy Mascarpone and Raspberry Christmas Yule Log
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
