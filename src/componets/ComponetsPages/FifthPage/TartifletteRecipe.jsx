import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./tartifletteRecipe.module.css";
import TartifletteRecipeImage from "./Images/imageye___-_Easy-and-Quick-Tartiflette-Recipe.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function TartifletteRecipe() {
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
    <div className={styles.TartifletteRecipeContainer}>
      <div className={styles.TartifletteRecipeContents}>
        <div>
          <img
            src={TartifletteRecipeImage}
            alt="Easy and Quick Tartiflette Recipe"
          />
        </div>

        {/* Content Section */}
        <div className={styles.TartifletteRecipeInfo}>
          <header>
            <h1>Easy and Quick Tartiflette Recipe</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Tartiflette, the quintessential French comfort food, originates
              from the Savoie region. Traditionally made with creamy Reblochon
              cheese, potatoes, lardons, and onions, it’s the ultimate indulgent
              dish for winter evenings. This{" "}
              <strong>easy and quick version</strong> simplifies the preparation
              without sacrificing the rich, satisfying flavors that make
              tartiflette a favorite. Perfect for busy weeknights or a cozy
              gathering, this recipe will have everyone coming back for seconds!
            </p>

            {/* Additional Content */}
            <h3>Ingredients </h3>
            <ul>
              <li>1kg potatoes (waxy variety, such as Yukon Gold)</li>
              <li>200g lardons (or diced smoked bacon)</li>
              <li>1 medium onion, finely sliced</li>
              <li>
                250g Reblochon cheese (or any soft-rind cheese like Brie or
                Camembert)
              </li>
              <li>100ml crème fraîche (or heavy cream)</li>
              <li>1 garlic clove, halved</li>
              <li>2 tbsp white wine (optional, but recommended)</li>
              <li>Salt and freshly ground pepper</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Potatoes</strong>
            </p>
            <ol>
              <li>
                Peel and slice the potatoes into thin rounds (about ½ cm thick).
              </li>
              <li>
                Place them in a large pot of salted water and bring to a boil.
                Cook for 10–12 minutes, or until just tender. Drain and set
                aside.
              </li>
            </ol>
            <p>
              <strong>Step 2: Cook the Lardons and Onions</strong>
            </p>
            <ol>
              <li>
                In a large skillet, sauté the lardons over medium heat until
                golden and crispy. Remove and set aside.
              </li>
              <li>
                In the same pan, add the sliced onion and cook in the rendered
                fat until soft and translucent (about 5 minutes). If using,
                deglaze the pan with white wine and let it reduce slightly.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Tartiflette</strong>
            </p>
            <ol>
              <li>Preheat your oven to 200°C (400°F).</li>
              <li>
                Rub a large ovenproof dish with the cut side of the garlic to
                impart a subtle flavor
              </li>
              <li>
                Layer half the potatoes in the dish, seasoning lightly with salt
                and pepper. Scatter half of the lardons and onions on top.
              </li>
              <li>Repeat with the remaining potatoes, lardons, and onions.</li>
              <li>Spread the crème fraîche evenly over the top layer.</li>
            </ol>
            <p>
              <strong>Step 4: Add the Cheese</strong>
            </p>
            <ol>
              <li>
                Slice the Reblochon in half horizontally, then cut into smaller
                wedges. Place the cheese pieces rind-side up over the top of the
                tartiflette.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake and Serve</strong>
            </p>
            <ol>
              <li>
                Bake in the preheated oven for 20–25 minutes, or until the
                cheese is melted and bubbling, and the top is golden brown.
              </li>
              <li>
                Remove from the oven and let cool for a few minutes before
                serving.
              </li>
            </ol>

            <h3>Serving Suggestions</h3>
            <ul>
              <li>
                Pair tartiflette with a crisp green salad dressed in a light
                vinaigrette to balance the richness.
              </li>
              <li>
                A glass of dry white wine, like a Savoie Apremont or Chablis,
                complements this dish beautifully.
              </li>
            </ul>

            <h3>Why this Recipe is Quick and Easy</h3>
            <p>
              By pre-cooking the potatoes and using minimal ingredients, this
              recipe cuts down on prep and cooking time while maintaining the
              authentic flavors of traditional tartiflette. It’s proof that you
              don’t need to spend hours in the kitchen to enjoy a delicious
              French classic!
            </p>

            <p>Enjoy your tartiflette adventure—bon appétit!</p>

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
                href="/how-to-prepare-lasagna-soup"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Prepare Easy Lasagna Bolognese
                </p>
              </a>

              <a
                href="/white-chocolate-raspberry-layer-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  White Chocolate Raspberry Layer Cake
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
