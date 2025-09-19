import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./easyPancakes.module.css";
import EasyPancakesImage from "./Images/EasyPancakesImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function EasyPancakes() {
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
    <div className={styles.EasyPancakesContainer}>
      <div className={styles.EasyPancakesContents}>
        <div>
          <img src={EasyPancakesImage} alt="How to Prepare Easy Pancakes" />
        </div>

        {/* Content Section */}
        <div className={styles.EasyPancakesInfo}>
          <header>
            <h1>How to Prepare Easy Pancakes</h1>
            <p>November 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              What’s better than a dessert that combines the earthy sweetness of
              There’s nothing quite like a stack of warm, fluffy pancakes to
              start your day on a delicious note. Pancakes are a classic
              breakfast favorite, and the best part? They’re incredibly easy to
              make! With just a few pantry staples, you can whip up a batch of
              these delightful treats in no time.
            </p>
            <p>
              Whether you enjoy them plain, topped with syrup, or loaded with
              your favorite fruits, this easy pancake recipe is sure to become a
              go-to in your kitchen. Let’s dive in!
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For Approximately 10 Pancakes:</strong>
            </p>
            <ul>
              <li>1 ½ cups (190g) all-purpose flour</li>
              <li>2 tbsp granulated sugar</li>
              <li>1 tbsp baking powder</li>
              <li>½ tsp salt</li>
              <li>1 ¼ cups (300ml) milk (dairy or plant-based)</li>
              <li>1 large egg</li>
              <li>3 tbsp melted butter or vegetable oil</li>
              <li>1 tsp vanilla extract (optional)</li>
            </ul>

            <p>
              <strong>Optional Toppings:</strong>
            </p>
            <ul>
              <li>Maple syrup</li>
              <li>Fresh fruits (berries, bananas)</li>
              <li>Whipped cream</li>
              <li>Nut butter or chocolate spread</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Batter</strong>
            </p>
            <ol>
              <li>
                In a large mixing bowl, combine the flour, sugar, baking powder,
                and salt. Whisk to combine.
              </li>
              <li>
                In another bowl, whisk together the milk, egg, melted butter,
                and vanilla extract (if using).
              </li>
              <li>
                Gradually pour the wet ingredients into the dry ingredients,
                stirring gently until just combined. It’s okay if the batter is
                slightly lumpy—overmixing can make the pancakes dense.
              </li>
            </ol>
            <p>
              <strong>Step 2: Heat the Pan</strong>
            </p>
            <ol>
              <li>
                Heat a non-stick skillet or griddle over medium heat. Lightly
                grease it with butter or oil.
              </li>
            </ol>
            <p>
              <strong>Step 3: Cook the Pancakes</strong>
            </p>
            <ol>
              <li>
                Pour about ¼ cup of batter onto the skillet for each pancake.
                Use the back of a spoon to gently spread the batter into a
                circle if needed.
              </li>
              <li>
                Cook for 2-3 minutes, or until bubbles form on the surface and
                the edges look set.
              </li>
              <li>
                Flip the pancake and cook for another 1-2 minutes, until golden
                brown on both sides.
              </li>
              <li>
                Repeat with the remaining batter, greasing the skillet as
                needed.
              </li>
            </ol>
            <p>
              <strong>Step 4: Serve</strong>
            </p>
            <ol>
              <li>
                Stack the pancakes on a plate and top with your favorite
                toppings. Serve warm and enjoy!
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Fluffier pancakes:</strong> For extra fluffy pancakes,
                let the batter rest for 5-10 minutes before cooking.
              </li>
              <li>
                <strong>Even cooking:</strong> Keep the heat at medium to avoid
                burning the pancakes while ensuring they cook through.
              </li>
              <li>
                <strong>Custom flavors:</strong> Add chocolate chips,
                blueberries, or a pinch of cinnamon to the batter for a fun
                twist.
              </li>
            </ul>

            <p>
              Making <strong>easy Pancakes</strong> at home is simple,
              satisfying, and always a hit with family and friends. With this
              foolproof recipe, you’ll have golden, fluffy pancakes ready to
              enjoy in no time. Perfect for breakfast, brunch, or even as a
              sweet snack, they’re a treat that never goes out of style.
            </p>

            <p>
              Grab your skillet and start flipping—your delicious stack of
              pancakes awaits! 🥞
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
                href="/pumpkin-apple-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Pumpkin Apple Cake: A Cozy Fall Delight
                </p>
              </a>

              <a
                href="/my-holiday-paella"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  My Holiday Paella: A Festive Feast for Special Occasions
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
