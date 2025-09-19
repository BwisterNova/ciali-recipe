import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./greenCabbage.module.css";
import GreenCabbageImage from "./Images/Green-cabbage-stew.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function GreenCabbage() {
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
    <div className={styles.GreenCabbageContainer}>
      <div className={styles.GreenCabbageContents}>
        <div>
          <img src={GreenCabbageImage} alt="Green Cabbage Stew" />
        </div>

        {/* Content Section */}
        <div className={styles.GreenCabbageInfo}>
          <header>
            <h1>Green Cabbage Stew: A Hearty and Nutritious Dish</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Green cabbage stew</strong> is a comforting and nourishing
              meal that’s perfect for chilly days. Packed with vibrant
              vegetables and a rich broth, this dish is both hearty and healthy.
              Whether served as a vegetarian option or enriched with meat for
              extra flavor, it’s a versatile recipe that will warm you up from
              the inside out.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 4-6 servings:</strong>
            </p>
            <ul>
              <li>1 medium green cabbage, chopped into bite-sized pieces</li>
              <li>2 medium carrots, peeled and diced</li>
              <li>2 medium potatoes, peeled and cubed</li>
              <li>1 onion, finely chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>2 tbsp olive oil or butter</li>
              <li>1 can (400g/14 oz) diced tomatoes</li>
              <li>1 liter (4 cups) vegetable or chicken broth</li>
              <li>1 tsp smoked paprika</li>
              <li>1 tsp ground cumin</li>
              <li>2 bay leaves</li>
              <li>Salt and freshly ground black pepper, to taste</li>
              <li>
                Optional: 200g (7 oz) smoked sausage, diced or sliced (for a
                non-vegetarian version)
              </li>
              <li>Fresh parsley, chopped (for garnish)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Ingredients</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>Wash and chop all vegetables as listed.</li>
              <li>
                If using sausage, slice it into small pieces and set aside.
              </li>
            </ol>
            <p>
              <strong>Step 2: Sauté the Base</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Heat the olive oil or butter in a large pot over medium heat.
              </li>
              <li>
                Add the onion and garlic, and sauté until soft and fragrant,
                about 2-3 minutes.
              </li>
              <li>
                If using sausage, add it now and cook until lightly browned.
              </li>
            </ol>
            <p>
              <strong>Step 3: Cook the Vegetables</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Add the carrots, potatoes, and cabbage to the pot. Stir well to
                combine.
              </li>
              <li>
                Sprinkle the smoked paprika and cumin over the vegetables,
                stirring to coat them evenly.
              </li>
            </ol>
            <p>
              <strong>Step 4: Add the Broth and Simmer</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Pour in the broth and add the canned tomatoes along with their
                juices.
              </li>
              <li>
                Add the bay leaves and season with salt and pepper. Stir well.
              </li>
              <li>
                Bring the stew to a boil, then reduce the heat to low. Cover and
                simmer for 25-30 minutes, or until the vegetables are tender.
              </li>
            </ol>
            <p>
              <strong>Step 5: Adjust and Serve</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Taste the stew and adjust the seasoning if necessary. Remove the
                bay leaves before serving.
              </li>
              <li>Ladle the stew into bowls and garnish with fresh parsley.</li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Vegetarian Option:</strong> Skip the sausage and use
                vegetable broth for a lighter, vegetarian version
              </li>
              <li>
                <strong>Add Grains::</strong> To make the stew heartier, add
                cooked rice, quinoa, or barley towards the end of cooking.
              </li>
              <li>
                <strong>Storage:</strong> This stew keeps well in the
                refrigerator for up to 3 days and tastes even better the next
                day as the flavors meld together.
              </li>
            </ul>

            <p>
              This <strong>Green Cabbage Stew</strong> is a flavorful way to
              enjoy winter vegetables in a cozy and satisfying dish. Whether you
              keep it simple or add sausage for a meaty twist, this stew is sure
              to become a comforting favorite in your home.
            </p>
            <p>
              Try this recipe today and enjoy the taste of wholesome, homemade
              comfort food!
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
                href="/tuna-pasta-salad-recipe"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Tuna Pasta Salad Recipe
                </p>
              </a>
              <a
                href="/homemade-chicken-cordon-bleu"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Homemade Chicken Cordon Bleu
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
