import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./porkStirFry.module.css";
import PorkStirFryImage from "./Images/PorkStirFryImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PorkStirFry() {
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
    <div className={styles.PorkStirFryContainer}>
      <div className={styles.PorkStirFryContents}>
        <div>
          <img src={PorkStirFryImage} alt="Pork Stir-Fry in the Cookeo" />
        </div>

        {/* Content Section */}
        <div className={styles.PorkStirFryInfo}>
          <header>
            <h1>Pork Stir-Fry in the Cookeo</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Looking for a quick and flavorful dish to make in your Cookeo?
              This <strong>pork stir-fry</strong> is the perfect solution!
              Packed with tender pork, crisp vegetables, and a savory sauce,
              this one-pot meal comes together in no time, making it ideal for
              busy weeknights. With the Cookeo’s fast cooking capabilities,
              you’ll enjoy a delicious and satisfying stir-fry without the fuss.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <ul>
              <li>500g pork tenderloin, thinly sliced</li>
              <li>2 tbsp soy sauce</li>
              <li>1 tbsp sesame oil (or vegetable oil)</li>
              <li>1 garlic clove, minced</li>
              <li>1 small onion, sliced</li>
              <li>1 red bell pepper, sliced into strips</li>
              <li>1 carrot, julienned</li>
              <li>100g snap peas or green beans</li>
              <li>2 tbsp oyster sauce (optional)</li>
              <li>1 tsp cornstarch (optional, for thickening)</li>
              <li>Salt and pepper to taste</li>
              <li>1 tbsp sesame seeds (for garnish)</li>
              <li>Fresh cilantro or green onions (for garnish)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Pork</strong>
            </p>
            <ol>
              <li>
                Place the sliced pork in a bowl and marinate with soy sauce and
                a pinch of pepper for 10–15 minutes while you prepare the
                vegetables.
              </li>
            </ol>
            <p>
              <strong>Step 2: Sauté the Ingredients</strong>
            </p>
            <ol>
              <li>
                Turn on your Cookeo and select the “Brown” mode. Add sesame oil
                to the pot and let it heat for a minute.
              </li>
              <li>
                Add the garlic and onion, sautéing until fragrant and slightly
                softened.
              </li>
              <li>
                Toss in the marinated pork and cook for 5–7 minutes, stirring
                occasionally, until browned and mostly cooked through.
              </li>
            </ol>
            <p>
              <strong>Step 3: Add the Vegetables</strong>
            </p>
            <ol>
              <li>
                Add the carrots, bell peppers, and snap peas to the pot. Stir
                everything together..
              </li>
              <li>
                If using oyster sauce, mix it with 2 tablespoons of water (and
                cornstarch if desired) before adding it to the Cookeo. Stir to
                coat the pork and vegetables evenly.
              </li>
            </ol>
            <p>
              <strong>Step 4: Pressure Cook</strong>
            </p>
            <ol>
              <li>
                Close the Cookeo lid and set it to “Quick Cooking” mode for 3
                minutes.
              </li>
              <li>
                Once the cooking cycle is complete, carefully release the
                pressure and open the lid.
              </li>
            </ol>
            <p>
              <strong>Step 5: Garnish and Serve</strong>
            </p>
            <ol>
              <li>
                Transfer the stir-fry to a serving dish and sprinkle with sesame
                seeds, fresh cilantro, or green onions for garnish.
              </li>
              <li>
                Serve immediately over steamed rice or noodles for a complete
                meal.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Customize your vegetables:</strong> Feel free to use
                whatever vegetables you have on hand, such as broccoli,
                zucchini, or mushrooms.
              </li>
              <li>
                <strong>Control the sauce:</strong> Adjust the saltiness and
                sweetness by balancing the soy sauce and oyster sauce to your
                preference.
              </li>

              <li>
                <strong>Make it spicy:</strong> Add a pinch of chili flakes or a
                drizzle of sriracha for a spicy kick.
              </li>
            </ul>

            <p>
              This <strong>pork stir-fry in the Cookeo</strong> is a
              game-changer for anyone who loves quick and tasty meals. With its
              rich flavors, tender pork, and vibrant vegetables, it’s bound to
              become a family favorite. Give it a try and enjoy a delicious
              homemade stir-fry in minutes!
            </p>

            <p>Bon appétit!</p>

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
                href="/christmas-cake-with-pear-speculoos-and-salted-butter-caramel"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Christmas Cake with Pear, Speculoos, and Salted Butter Caramel
                </p>
              </a>

              <a
                href="/knodel-austrian-savory-bread-dumplings"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Knödel – Austrian Savory Bread Dumplings
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
