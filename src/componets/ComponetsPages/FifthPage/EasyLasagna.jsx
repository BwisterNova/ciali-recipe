import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./easyLasagna.module.css";
import EasyLasagnaImage from "./Images/EasyLasagnaImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function EasyLasagna() {
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
    <div className={styles.EasyLasagnaContainer}>
      <div className={styles.EasyLasagnaContents}>
        <div>
          <img src={EasyLasagnaImage} alt="How to Prepare Easy Lasagna" />
        </div>

        {/* Content Section */}
        <div className={styles.EasyLasagnaInfo}>
          <header>
            <h1>How to Prepare Easy Lasagna</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Lasagna Bolognese</strong> is a timeless classic that
              combines layers of rich meat sauce, creamy béchamel, and tender
              pasta sheets into a dish that’s comforting and satisfying. While
              traditional recipes can take hours, this{" "}
              <strong>easy version</strong> simplifies the process without
              sacrificing flavor. Perfect for weeknight dinners or family
              gatherings, this recipe will make you feel like an Italian chef in
              no time!
            </p>

            {/* Additional Content */}
            <h3>Ingredients </h3>
            <p>
              <strong>For the Bolognese Sauce:</strong>
            </p>
            <ul>
              <li>500g ground beef or pork (or a mix)</li>
              <li>1 medium onion, finely chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>1 medium carrot, finely diced</li>
              <li>1 celery stalk, finely diced</li>
              <li>1 can (400g) crushed tomatoes</li>
              <li>2 tbsp tomato paste</li>
              <li>1 tsp dried oregano or Italian seasoning</li>
              <li>100ml red wine (optional)</li>
              <li>2 tbsp olive oil</li>
              <li>Salt and freshly ground pepper</li>
            </ul>

            <p>
              <strong>For the Béchamel Sauce:</strong>
            </p>
            <ol>
              <li>50g butter</li>
              <li>50g flour</li>
              <li>500ml milk (warm)</li>
              <li>Pinch of nutmeg (optional)</li>
              <li>Salt and pepper to taste</li>
            </ol>

            <p>
              <strong>For Assembly:</strong>
            </p>
            <ol>
              <li>9–12 lasagna sheets (no-boil or pre-cooked)</li>
              <li>150g grated mozzarella or Parmesan cheese</li>
              <li>Fresh basil for garnish (optional)</li>
            </ol>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Make the Bolognese Sauce</strong>
            </p>
            <ol>
              <li>
                Heat olive oil in a large skillet over medium heat. Add the
                onion, garlic, carrot, and celery. Sauté until softened (about 5
                minutes).
              </li>
              <li>
                Add the ground meat and cook until browned, breaking it up with
                a spoon. Season with salt, pepper, and oregano.
              </li>
              <li>
                Stir in the tomato paste and cook for 1–2 minutes. If using,
                pour in the red wine and let it reduce slightly.
              </li>
              <li>
                Add the crushed tomatoes, reduce the heat to low, and simmer for
                15–20 minutes. Adjust seasoning to taste.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Béchamel Sauce</strong>
            </p>
            <ol>
              <li>
                In a saucepan, melt the butter over medium heat. Add the flour
                and whisk to form a roux. Cook for 1–2 minutes, but don’t let it
                brown.
              </li>
              <li>
                Gradually pour in the warm milk, whisking constantly to avoid
                lumps.
              </li>
              <li>
                Continue cooking and stirring until the sauce thickens. Season
                with salt, pepper, and a pinch of nutmeg, if desired.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Lasagna</strong>
            </p>
            <ol>
              <li>Preheat your oven to 200°C (400°F).</li>
              <li>
                Spread a thin layer of Bolognese sauce on the bottom of a baking
                dish. Place a layer of lasagna sheets over it.
              </li>
              <li>
                Add a layer of Bolognese sauce, followed by a layer of béchamel.
                Repeat the layering process until all ingredients are used,
                finishing with béchamel on top.
              </li>
              <li>
                Sprinkle grated mozzarella or Parmesan evenly over the top.
              </li>
            </ol>
            <p>
              <strong>Step 4:Bake</strong>
            </p>
            <ol>
              <li>
                Cover the dish with aluminum foil and bake for 20 minutes.
              </li>
              <li>
                Remove the foil and bake for an additional 15 minutes, or until
                the top is golden and bubbly.
              </li>
              <li>
                Let the lasagna rest for 10 minutes before serving to allow the
                layers to set.
              </li>
            </ol>

            <h3>Serving Suggestions</h3>
            <ul>
              <li>
                Pair this lasagna with a crisp green salad or garlic bread for a
                complete meal.
              </li>
              <li>
                A glass of Chianti or another Italian red wine makes the perfect
                accompaniment.
              </li>
            </ul>

            <h3>Why this Recipe is Easy</h3>
            <p>
              This streamlined recipe uses common ingredients and
              straightforward techniques to create a lasagna that tastes like
              it’s been simmering all day. With simple steps and minimal prep,
              it’s ideal for busy cooks who want to enjoy a hearty, homemade
              Italian meal without the hassle.
            </p>

            <p>Buon appetito! Your lasagna Bolognese awaits!</p>

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
                href="/how-to-prepare-lasagna-soup"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  How to Prepare Lasagna Soup
                </p>
              </a>

              <a
                href="/easy-and-quick-tartiflette-recipe"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Easy and Quick Tartiflette Recipe
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
