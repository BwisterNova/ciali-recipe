import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./traditionalVegetable.module.css";
import TraditionalVegetableImage from "./Images/TraditionalVegetableImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function TraditionalVegetable() {
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
    <div className={styles.TraditionalVegetableContainer}>
      <div className={styles.TraditionalVegetableContents}>
        <div>
          <img
            src={TraditionalVegetableImage}
            alt="Traditional Vegetable Couscous"
          />
        </div>

        {/* Content Section */}
        <div className={styles.TraditionalVegetableInfo}>
          <header>
            <h1>
              Traditional Vegetable Couscous: A Heartwarming Moroccan Classic
            </h1>
            <p>December 8, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Couscous with vegetables</strong> is a beloved dish
              originating from North Africa, celebrated for its vibrant flavors
              and hearty ingredients. This dish combines fluffy couscous with an
              array of colorful vegetables, aromatic spices, and sometimes
              chickpeas, creating a meal that is both comforting and nourishing.
              Ideal for family dinners or gatherings, traditional vegetable
              couscous is a versatile recipe that can be adapted to suit your
              preferences.
            </p>
            <p>Let’s dive into the steps to prepare this timeless classic!</p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Couscous</strong>
            </p>
            <ul>
              <li>300g couscous (about 2 cups)</li>
              <li>2 tbsp olive oil or butter</li>
              <li>1/2 tsp salt</li>
              <li>300ml boiling water (about 1 1/4 cups)</li>
            </ul>
            <p>
              <strong>For the Vegetable Stew:</strong>
            </p>
            <ul>
              <li>2 tbsp olive oil</li>
              <li>1 onion, chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>2 carrots, peeled and sliced</li>
              <li>1 zucchini, diced</li>
              <li>1 eggplant, diced</li>
              <li>1 bell pepper, chopped</li>
              <li>3 tomatoes, diced (or 1 can of diced tomatoes)</li>
              <li>1 can of chickpeas, drained and rinsed</li>
              <li>1 tsp ground cumin</li>
              <li>1 tsp ground coriander</li>
              <li>1/2 tsp ground cinnamon</li>
              <li>1/4 tsp cayenne pepper (optional)</li>
              <li>Salt and pepper, to taste</li>
              <li>500ml vegetable stock (about 2 cups)</li>
            </ul>
            <p>
              <strong>For Garnish:</strong>
            </p>
            <ul>
              <li>Fresh cilantro or parsley, chopped</li>
              <li>Lemon wedges</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Couscous</strong>
            </p>
            <ol>
              <li>
                Place the couscous in a large bowl. Drizzle with olive oil or
                butter and sprinkle with salt.per.
              </li>
              <li>
                In a bowl, whisk together the flour, baking powder, and salt.
              </li>
              <li>
                Pour boiling water over the couscous, cover with a plate or
                plastic wrap, and let it sit for 5-10 minutes.
              </li>
              <li>
                Fluff the couscous with a fork to separate the grains. Set
                aside.
              </li>
            </ol>
            <p>
              <strong>Step 2: Cook the Vegetable Stew</strong>
            </p>
            <ol>
              <li>
                Heat olive oil in a large pot or Dutch oven over medium heat.
                Add the chopped onion and garlic and sauté until fragrant and
                softened.
              </li>
              <li>
                Add the carrots, zucchini, eggplant, and bell pepper. Cook for
                5-7 minutes until the vegetables start to soften.
              </li>
              <li>
                Stir in the diced tomatoes, chickpeas, and spices (cumin,
                coriander, cinnamon, and cayenne). Season with salt and pepper.
              </li>
              <li>
                Pour in the vegetable stock and bring the mixture to a boil.
                Reduce the heat to a simmer and cook for 20-25 minutes, or until
                the vegetables are tender and the flavors are well combined.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble and Serve</strong>
            </p>
            <ol>
              <li>
                To serve, arrange the couscous in a large serving dish or
                individual plates. Spoon the vegetable stew over the couscous.
              </li>
              <li>
                Garnish with fresh cilantro or parsley and serve with lemon
                wedges for a zesty touch.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Vegetable variety:</strong> Feel free to add or
                substitute vegetables like squash, sweet potatoes, or green
                beans based on the season or your preferences.
              </li>
              <li>
                <strong>Spices:</strong>Adjust the spice levels to suit your
                taste. Ras el Hanout, a Moroccan spice blend, can be used for a
                more authentic flavor.
              </li>
              <li>
                <strong>Protein:</strong> For a heartier dish, add grilled
                chicken, lamb, or plant-based protein like tofu.
              </li>
              <li>
                <strong>Leftovers:</strong> This dish tastes even better the
                next day as the flavors continue to meld. Store in an airtight
                container in the refrigerator for up to 3 days.
              </li>
            </ul>

            <p>
              <strong>Traditional vegetable</strong> couscous is a delightful
              dish that embodies the warmth and richness of North African
              cuisine. Its combination of wholesome ingredients and aromatic
              spices makes it a perfect comfort meal for any occasion.
            </p>

            <p>
              Whether you’re exploring new culinary traditions or revisiting a
              family favorite, this couscous recipe is sure to bring joy and
              flavor to your table. Serve it with a side of harissa for an extra
              kick, and enjoy this classic with friends and family!
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
                href="/white-chocolate-raspberry-layer-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  White Chocolate Raspberry Layer Cake
                </p>
              </a>

              <a
                href="/my-grandmothers-stuffed-vegetables"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  My Grandmother’s Stuffed Vegetables: A Family Tradition
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
