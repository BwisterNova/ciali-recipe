import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./stuffedVegetable.module.css";
import StuffedVegetableImage from "./Images/StuffedVegetableImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function StuffedVegetable() {
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
    <div className={styles.StuffedVegetableContainer}>
      <div className={styles.StuffedVegetableContents}>
        <div>
          <img
            src={StuffedVegetableImage}
            alt="My Grandmother’s Stuffed Vegetables"
          />
        </div>

        {/* Content Section */}
        <div className={styles.StuffedVegetableInfo}>
          <header>
            <h1>My Grandmother’s Stuffed Vegetables: A Family Tradition</h1>
            <p>December 8, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              There’s something deeply comforting about a dish that carries the
              warmth of family memories. <strong>Stuffed vegetables,</strong> a
              timeless recipe passed down from my grandmother, are more than
              just a meal—they’re a celebration of heritage, love, and simple,
              wholesome ingredients. Each vegetable, lovingly filled with a
              savory mixture, brings a harmony of flavors and textures to the
              table. Whether you’re serving this dish for a casual dinner or a
              special occasion, it’s guaranteed to win hearts.
            </p>
            <p>
              Let me take you through the steps to recreate this treasured
              family favorite.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Vegetables:</strong>
            </p>
            <ul>
              <li>2 large bell peppers</li>
              <li>2 medium zucchinis</li>
              <li>2 medium tomatoes</li>
              <li>2 small eggplants</li>
              <li>2 onions</li>
            </ul>
            <p>
              <strong>For the Stuffing:</strong>
            </p>
            <ul>
              <li>2 tbsp olive oil</li>
              <li>1 onion, chopped</li>
            </ul>
            <p>
              <strong>For Garnish:</strong>
            </p>
            <ul>
              <li>200g ground meat (beef, lamb, or a mix)</li>
              <li>100g cooked rice (about 1/2 cup)</li>
              <li>1 small onion, finely diced</li>
              <li>2 garlic cloves, minced</li>
              <li>2 tbsp fresh parsley, chopped</li>
              <li>1 tbsp fresh mint, chopped (optional)</li>
              <li>1 tsp ground paprika</li>
              <li>1/2 tsp ground cumin</li>
              <li>Salt and pepper, to taste</li>
              <li>2 tbsp olive oil</li>
            </ul>
            <p>
              <strong>For the Sauce:</strong>
            </p>
            <ul>
              <li>400g canned crushed tomatoes (about 1 1/2 cups)</li>
              <li>1 tsp sugar</li>
              <li>1 tbsp olive oil</li>
              <li>1/2 tsp dried oregano</li>
              <li>Salt and pepper, to taste</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Vegetables</strong>
            </p>
            <ol>
              <li>
                Wash the vegetables thoroughly. Cut the tops off the bell
                peppers, tomatoes, zucchinis, and eggplants to create a “lid.”
                Scoop out the seeds and pulp (reserve the pulp for later use).
                Hollow out the onions by cutting them in half and peeling back
                the inner layers, leaving just 2-3 outer layers intact.
              </li>
              <li>Set the prepared vegetables aside on a baking dish.</li>
            </ol>
            <p>
              <strong>Step 2: Make the Stuffing</strong>
            </p>
            <ol>
              <li>
                In a bowl, mix the ground meat, cooked rice, diced onion, minced
                garlic, parsley, mint (if using), and spices. Add a drizzle of
                olive oil and combine well.
              </li>
              <li>
                If the stuffing feels dry, add a tablespoon of the reserved
                vegetable pulp or a splash of water to moisten it.
              </li>
            </ol>
            <p>
              <strong>Step 3: Stuff the Vegetables</strong>
            </p>
            <ol>
              <li>
                Fill each vegetable cavity with the stuffing mixture, pressing
                gently to ensure it’s packed but not overflowing.
              </li>
              <li>
                Place the “lids” back on the vegetables for a charming
                presentation.
              </li>
            </ol>
            <p>
              <strong>Step 4: Prepare the Sauce</strong>
            </p>
            <ol>
              <li>
                In a saucepan, heat olive oil over medium heat. Add the crushed
                tomatoes, reserved vegetable pulp, sugar, oregano, salt, and
                pepper. Simmer for 10 minutes to allow the flavors to meld.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake the Stuffed Vegetables</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Pour the sauce into the baking dish, surrounding the stuffed
                vegetables. Drizzle a little olive oil over the vegetables for
                extra flavor.
              </li>
              <li>
                Cover the dish with aluminum foil and bake for 40-50 minutes, or
                until the vegetables are tender and the stuffing is fully
                cooked. Remove the foil in the last 10 minutes for a slightly
                caramelized top.
              </li>
            </ol>

            <p>
              <strong>Step 6: Serve and Enjoy</strong>
            </p>
            <ol>
              <li>
                Let the stuffed vegetables cool slightly before serving. Garnish
                with fresh parsley or mint, and serve with a side of crusty
                bread or a light salad.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Vegetable selection:</strong> Use whatever vegetables
                you have on hand—potatoes, squash, or even mushrooms work
                beautifully.
              </li>
              <li>
                <strong>Stuffing variations:</strong> Add grated cheese, chopped
                nuts, or dried fruits to the stuffing for added texture and
                flavor.
              </li>
              <li>
                <strong>Make ahead:</strong> Prepare the vegetables and stuffing
                in advance, then assemble and bake when ready to serve.
              </li>
              <li>
                <strong>Leftovers:</strong> These stuffed vegetables taste even
                better the next day, as the flavors continue to meld.
              </li>
            </ul>

            <p>
              <strong>My grandmother's stuffed vegetables</strong> are more than
              just a dish—they’re a story on a plate. The combination of tender
              vegetables, hearty filling, and rich tomato sauce creates a meal
              that’s as comforting as a hug from a loved one.
            </p>

            <p>
              Cooking this recipe allows me to relive cherished moments in the
              kitchen with my grandmother, and I hope it brings the same warmth
              and joy to your table. Gather your family, savor every bite, and
              create new memories with this timeless recipe.
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
                href="/traditional-vegetable-couscous"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Traditional Vegetable Couscous: A Heartwarming Moroccan
                  Classic
                </p>
              </a>

              <a
                href="/butternut-squash-and-ham-quiche"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Butternut Squash and Ham Quiche: A Seasonal Delight
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
