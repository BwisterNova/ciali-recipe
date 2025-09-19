import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./caponSupreme.module.css";
import CaponSupremeImage from "./Images/imageye___-_Capon-Supreme-with-Morels.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CaponSupreme() {
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
    <div className={styles.CaponSupremeContainer}>
      <div className={styles.CaponSupremeContents}>
        <div>
          <img
            src={CaponSupremeImage}
            alt="Capon Supreme with Morels: A Refined Holiday Recipe"
          />
        </div>

        {/* Content Section */}
        <div className={styles.CaponSupremeInfo}>
          <header>
            <h1>Capon Supreme with Morels: A Refined Holiday Recipe</h1>
            <p>December 1, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              When it comes to festive meals, few dishes rival the elegance and
              flavor of <strong>Capon Supreme with Morels.</strong> This dish
              combines the tender, juicy meat of capon with the earthy,
              luxurious taste of morel mushrooms. Perfect for Christmas, New
              Year’s, or any special gathering, it’s a recipe that will elevate
              your dining table and leave your guests in awe.
            </p>
            <p>Let’s dive into this sophisticated yet achievable recipe.</p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For 4 servings:</strong>
            </p>
            <ul>
              <li>4 capon supremes (breasts with skin on)</li>
              <li>200g (7 oz) dried or fresh morel mushrooms</li>
              <li>2 shallots, finely chopped</li>
              <li>2 cloves of garlic, minced</li>
              <li>1 tbsp olive oil</li>
              <li>2 tbsp butter</li>
              <li>200ml (3/4 cup) white wine</li>
              <li>200ml (3/4 cup) chicken or vegetable stock</li>
              <li>200ml (3/4 cup) heavy cream</li>
              <li>Salt and freshly ground black pepper</li>
              <li>Fresh parsley, chopped (for garnish)</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Morels</strong>
            </p>
            <ol>
              <li>
                If using dried morels, soak them in warm water for 30 minutes to
                rehydrate. Drain and rinse them thoroughly to remove any grit.
                If using fresh morels, clean them gently under running water.
              </li>
              <li>Set the prepared morels aside.</li>
            </ol>
            <p>
              <strong>Step 2: Cook the Capon Supremes</strong>
            </p>
            <ol>
              <li>
                Heat the olive oil and 1 tablespoon of butter in a large skillet
                over medium-high heat.
              </li>
              <li>
                Season the capon supremes with salt and pepper. Sear them
                skin-side down until golden brown, about 4-5 minutes. Flip and
                cook the other side for another 3-4 minutes.
              </li>
              <li>Remove the capon supremes from the skillet and set aside.</li>
            </ol>
            <p>
              <strong>Step 3: Prepare the Sauce</strong>
            </p>
            <ol>
              <li>
                In the same skillet, melt the remaining tablespoon of butter.
                Add the shallots and garlic, cooking until softened and
                fragrant, about 2 minutes.
              </li>
              <li>Add the morels to the pan and sauté for 3-4 minutes.</li>
              <li>
                Pour in the white wine, scraping the bottom of the skillet to
                deglaze. Let it simmer for 2-3 minutes until slightly reduced.
              </li>
              <li>
                Stir in the chicken or vegetable stock, followed by the heavy
                cream. Allow the sauce to simmer gently for 5-7 minutes, or
                until it thickens slightly. Season with salt and pepper to
                taste.
              </li>
            </ol>
            <p>
              <strong>Step 4: Combine and Finish</strong>
            </p>
            <ol>
              <li>
                Return the seared capon supremes to the skillet, nestling them
                into the sauce.
              </li>
              <li>
                Cover and simmer for 10-12 minutes, or until the capon is fully
                cooked (internal temperature should reach 74°C or 165°F).
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Plate each capon supreme with a generous spoonful of the creamy
                morel sauce.
              </li>
              <li>
                Garnish with fresh parsley and serve hot with your choice of
                side dishes, such as roasted vegetables, mashed potatoes, or
                wild rice.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Choosing Morels:</strong> If you can’t find morels,
                substitute with other flavorful mushrooms like chanterelles or
                porcini.
              </li>
              <li>
                <strong>Creamy Perfection:</strong> Adjust the creaminess of the
                sauce by adding more or less cream, depending on your
                preference.
              </li>
              <li>
                <strong>Pairing Suggestions:</strong> This dish pairs
                beautifully with a glass of Chardonnay or Pinot Noir to
                complement the richness of the sauce and the delicate flavors of
                the capon.
              </li>
            </ul>

            <p>
              <strong>Capon Supreme with Morels</strong> is a luxurious and
              flavorful dish that transforms any meal into a memorable
              experience. The combination of tender poultry and rich, creamy
              morel sauce creates a harmony of flavors that’s perfect for
              celebrating the season or hosting a special dinner.
            </p>

            <p>
              Bring the warmth and elegance of this dish to your table, and
              delight your guests with a recipe that’s as delicious as it is
              impressive. Enjoy!!
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
                href="/winter-vegetable-flan"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Winter Vegetable Flan: A Comforting Seasonal Recipe
                </p>
              </a>

              <a
                href="/easy-thousand-hole-pancakes-beghrir-express-algerian-recipe"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Easy Thousand-Hole Pancakes (Beghrir Express, Algerian Recipe)
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
