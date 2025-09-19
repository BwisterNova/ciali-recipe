import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./chickenRisotto.module.css";
import ChickenRisottoImage from "./Images/imageye___-_Eggs-with-Ham-A-Simple-and-Delicious-Classic.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ChickenRisotto() {
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
    <div className={styles.ChickenRisottoContainer}>
      <div className={styles.ChickenRisottoContents}>
        <div>
          <img
            src={ChickenRisottoImage}
            alt="Chicken Risotto: The Best Recipe"
          />
        </div>

        {/* Content Section */}
        <div className={styles.ChickenRisottoInfo}>
          <header>
            <h1>Chicken Risotto: The Best Recipe</h1>
            <p>November 5, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Rich, creamy, and deeply satisfying,{" "}
              <strong>chicken risotto</strong> is a timeless Italian dish that’s
              perfect for cozy dinners or special occasions. Made with tender
              chicken, Arborio rice, and flavorful stock, this recipe is all
              about simple ingredients coming together in harmony.
            </p>
            <p>
              Whether you’re new to making risotto or a seasoned cook, this
              easy-to-follow recipe will guide you to a perfectly creamy and
              delicious result every time. Let’s dive in!
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For Four Servings:</strong>
            </p>
            <ul>
              <li>2 tbsp olive oil</li>
              <li>1 tbsp butter</li>
              <li>
                1 tbsp butter or olive oil1 medium onion, finely choppedSalt and
                freshly ground black pepper to taste
              </li>
              <li>2 garlic cloves, minced</li>
              <li>300g Arborio or Carnaroli rice (about 1 1/2 cups)</li>
              <li>250ml dry white wine (about 1 cup)</li>
              <li>1 liter chicken stock, kept warm (about 4 cups)</li>
              <li>300g cooked chicken breast or thigh, shredded or diced</li>
              <li>50g grated Parmesan cheese (about 1/2 cup)</li>
              <li>2 tbsp chopped fresh parsley</li>
              <li>Salt and freshly ground black pepper, to taste</li>
            </ul>

            <p>
              <strong>Optional Add-ins:</strong>
            </p>
            <ul>
              <li>100g mushrooms, sliced</li>
              <li>1 cup frozen peas</li>
              <li>Lemon zest for a fresh finish</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Base</strong>
            </p>
            <ol>
              <li>
                Heat the olive oil and butter in a large pan over medium heat.
              </li>
              <li>
                Add the chopped onion and cook until softened, about 3-4
                minutes. Stir in the garlic and cook for another minute until
                fragrant.
              </li>
            </ol>
            <p>
              <strong>Step 2: Toast the Rice</strong>
            </p>
            <ol>
              <li>
                Add the Arborio rice to the pan, stirring to coat it in the oil
                and butter. Cook for 2-3 minutes until the rice becomes slightly
                translucent around the edges.
              </li>
            </ol>
            <p>
              <strong>Step 3: Add the Wine</strong>
            </p>
            <ol>
              <li>
                Pour in the white wine and stir continuously until it’s mostly
                absorbed by the rice. This step adds a lovely depth of flavor to
                the dish.
              </li>
            </ol>
            <p>
              <strong>Step 4: Cook the Risotto</strong>
            </p>
            <ol>
              <li>
                Begin adding the warm chicken stock one ladleful at a time,
                stirring frequently. Allow the stock to be absorbed before
                adding the next ladle.
              </li>
              <li>
                Continue this process for about 18-20 minutes, or until the rice
                is tender and creamy but still slightly al dente.
              </li>
            </ol>
            <p>
              <strong>Step 5: Add the Chicken</strong>
            </p>
            <ol>
              <li>
                Stir in the shredded or diced chicken and allow it to heat
                through. If using optional add-ins like mushrooms or peas, add
                them at this stage.
              </li>
            </ol>
            <p>
              <strong>Step 6: Finish the Dish</strong>
            </p>
            <ol>
              <li>
                Remove the pan from the heat and stir in the grated Parmesan
                cheese. Taste and adjust the seasoning with salt and pepper.
              </li>
              <li>
                Garnish with fresh parsley and, if desired, a touch of lemon
                zest for brightness.
              </li>
            </ol>
            <p>
              <strong>Step 7: Serve</strong>
            </p>
            <ol>
              <li>
                Serve the risotto immediately while it’s hot and creamy. Pair it
                with a crisp green salad or garlic bread for a complete meal.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Rice choice:</strong> Arborio or Carnaroli rice is
                essential for achieving the creamy texture of risotto. Avoid
                long-grain rice.
              </li>
              <li>
                <strong>Stock temperature:</strong> Keep the chicken stock warm
                during the cooking process to maintain the risotto’s
                consistency.
              </li>
              <li>
                <strong>Don’t rush:</strong> Stirring frequently and adding the
                stock gradually ensures the rice releases its starch for a silky
                texture.
              </li>
              <li>
                <strong>Cheese:</strong> For an extra indulgent touch, mix in a
                small knob of butter with the Parmesan at the end.
              </li>
            </ul>

            <p>
              This <strong>chicken risotto</strong> recipe combines simplicity
              with elegance, making it a dish you’ll want to return to again and
              again. Its creamy texture and hearty flavors make it perfect for a
              comforting family meal or an impressive dinner party main course.
            </p>

            <p>
              Give this recipe a try, and bring the warmth of Italian cooking to
              your table. Buon appetito!
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
                href="/eggs-with-ham-a-simple-and-delicious-classic"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Eggs with Ham: A Simple and Delicious Classic
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
