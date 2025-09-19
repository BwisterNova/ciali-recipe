import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./chickenMarbella.module.css";
import ChickenMarbellaImage from "./Images/imageye___-_Chicken-Marbella.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ChickenMarbella() {
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
    <div className={styles.ChickenMarbellaContainer}>
      <div className={styles.ChickenMarbellaContents}>
        <div>
          <img src={ChickenMarbellaImage} alt="Chef Anna’s Chicken Marbella" />
        </div>

        {/* Content Section */}
        <div className={styles.ChickenMarbellaInfo}>
          <header>
            <h1>Chef Anna’s Chicken Marbella</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Chicken Marbella</strong> is a dish that brings the best
              of Mediterranean flavors to your table. Combining juicy chicken
              with sweet prunes, briny olives, capers, and aromatic herbs, this
              dish is a perfect balance of savory and sweet. Originating from
              the iconic “Silver Palate Cookbook”, it’s become a classic that’s
              easy to prepare yet impressive enough for special occasions.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 4-6 servings:</strong>
            </p>
            <ul>
              <li>
                4 large chicken thighs and drumsticks (bone-in, skin-on) or 1
                whole chicken, cut into 8 pieces
              </li>
              <li>1/2 cup pitted prunes</li>
              <li>1/3 cup green or black olives, halved</li>
              <li>2 tbsp capers with a little brine</li>
              <li>4 garlic cloves, minced</li>
              <li>1/4 cup olive oil</li>
              <li>1/4 cup red or white wine vinegar</li>
              <li>2 tbsp fresh oregano or 1 tbsp dried oregano</li>
              <li>1/4 cup brown sugar</li>
              <li>1/2 cup white wine</li>
              <li>2 bay leaves</li>
              <li>Salt and freshly ground black pepper to taste</li>
              <li>Fresh parsley, chopped (for garnish)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Marinate the Chicken</strong>
            </p>
            <ol>
              <li>
                In a large mixing bowl, combine the garlic, olive oil, vinegar,
                oregano, prunes, olives, capers, and bay leaves. Season with
                salt and pepper.
              </li>
              <li>
                Add the chicken pieces to the marinade, ensuring they are well
                coated. Cover and refrigerate for at least 2 hours, preferably
                overnight, to let the flavors meld.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare for Baking</strong>
            </p>
            <ol>
              <li>Preheat your oven to 190°C (375°F).</li>
              <li>
                Transfer the marinated chicken and all the marinade ingredients
                into a large baking dish. Arrange the chicken in a single layer,
                skin side up.
              </li>
            </ol>
            <p>
              <strong>Step 3: Add Suger and wine</strong>
            </p>
            <ol>
              <li>Sprinkle the brown sugar evenly over the chicken pieces.</li>
              <li>
                Pour the white wine around the chicken into the baking dish.
              </li>
            </ol>
            <p>
              <strong>Step 4: Bake the Chicken</strong>
            </p>
            <ol>
              <li>
                Pour the white wine around the chicken into the baking dish.
              </li>
              <li>
                Baste the chicken with the pan juices every 15 minutes to keep
                it moist and flavorful.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Remove the bay leaves and transfer the chicken to a serving
                platter.
              </li>
              <li>Spoon the prunes, olives, and pan juices over the top..</li>
              <li>Garnish with fresh parsley and serve warm.</li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Chicken Options:</strong>While bone-in chicken offers
                more flavor, you can use boneless thighs for quicker cooking.
              </li>
              <li>
                <strong>Make Ahead:</strong> Marinating the chicken overnight
                enhances the flavors significantly.
              </li>
              <li>
                <strong>Serving Suggestions:</strong> Pair Chicken Marbella with
                rice, couscous, or crusty bread to soak up the delicious juices.
              </li>
            </ul>

            <p>
              <strong>Chicken Marbella</strong> is a timeless recipe that’s
              bursting with Mediterranean flavors. The combination of tender
              chicken, sweet and savory elements, and aromatic herbs makes it an
              unforgettable dish. Whether for a dinner party or a cozy family
              meal, this recipe is a guaranteed hit.
            </p>
            <p>
              Try this classic dish today and let the rich, complex flavors
              transport you to the sunny Mediterranean coast!
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
                href="/cheap-soft-apple-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Cheap Soft Apple Cake: A Budget-Friendly, Moist Dessert
                </p>
              </a>

              <a
                href="/smoked-salmon-millefeuille-with-lime-sorbet"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Smoked Salmon Millefeuille with Lime Sorbet
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
