import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./shrimpPizza.module.css";
import ShrimpPizzaImage from "./Images/ShrimpPizzaImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ShrimpPizza() {
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
    <div className={styles.ShrimpPizzaContainer}>
      <div className={styles.ShrimpPizzaContents}>
        <div>
          <img
            src={ShrimpPizzaImage}
            alt="How to Prepare Shrimp Pizza: A Delicious Seafood Twist"
          />
        </div>

        {/* Content Section */}
        <div className={styles.ShrimpPizzaInfo}>
          <header>
            <h1>How to Prepare Shrimp Pizza: A Delicious Seafood Twist</h1>
            <p>December 3, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              If you’re craving something a little different from the usual
              pizza toppings, why not try a <strong>shrimp pizza?</strong> The
              delicate sweetness of shrimp combined with tangy tomato sauce,
              melted cheese, and fresh herbs creates a seafood lover’s dream
              pizza. It’s an easy-to-make dish that’s perfect for a fun dinner
              or a special occasion.
            </p>

            <p>
              Let’s take a look at how to prepare this savory, seafood-inspired
              pizza from scratch!
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Pizza Dough (or use store-bought dough):</strong>
            </p>
            <ul>
              <li>2 ¼ tsp (1 packet) active dry yeast</li>
              <li>1 tsp sugar</li>
              <li>3/4 cup warm water (about 110°F or 45°C)</li>
              <li>2 cups all-purpose flour</li>
              <li>1 tbsp olive oil</li>
              <li>1 tsp salt</li>
            </ul>
            <p>
              <strong>For the Pizza Toppings:</strong>
            </p>
            <ul>
              <li>200g (about 1/2 lb) medium shrimp, peeled and deveined</li>
              <li>1 tbsp olive oil</li>
              <li>2 cloves garlic, minced</li>
              <li>1/2 tsp chili flakes (optional, for a little heat)</li>
              <li>1/2 cup tomato sauce or pizza sauce</li>
              <li>1 ½ cups shredded mozzarella cheese</li>
              <li>1 tbsp fresh basil, chopped</li>
              <li>1 tbsp fresh parsley, chopped</li>
              <li>Salt and pepper, to taste</li>
              <li>Optional: lemon zest or a squeeze of fresh lemon juice</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Dough</strong>
            </p>
            <ol>
              <li>
                In a small bowl, dissolve the yeast and sugar in warm water. Let
                it sit for 5-10 minutes until it becomes foamy.
              </li>

              <li>
                In a large mixing bowl, combine the flour and salt. Add the
                olive oil and the yeast mixture. Stir until the dough comes
                together.
              </li>
              <li>
                Knead the dough on a floured surface for about 5-7 minutes until
                smooth and elastic.
              </li>
              <li>
                Place the dough in a lightly oiled bowl, cover it with a clean
                kitchen towel, and let it rise for 1-1.5 hours, or until it
                doubles in size.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Shrimp</strong>
            </p>
            <ol>
              <li>
                While the dough is rising, heat 1 tablespoon of olive oil in a
                large skillet over medium heat.
              </li>
              <li>Add the garlic and cook for 1 minute, until fragrant.</li>
              <li>
                Add the shrimp to the pan, seasoning them with salt, pepper, and
                chili flakes if using. Cook for about 2-3 minutes on each side
                until they turn pink and opaque
              </li>
              <li>Remove from heat and set the shrimp aside.</li>
            </ol>
            <p>
              <strong>Step 3: Roll Out the Dough</strong>
            </p>
            <ol>
              <li>
                Once the dough has risen, punch it down and divide it into two
                portions (for two medium-sized pizzas).
              </li>
              <li>
                On a floured surface, roll out each portion of dough into your
                desired shape and size (circle or rectangle).
              </li>
              <li>
                Optional: Add a layer of the mushroom duxelles or place slices
                of ham over the mustard.
              </li>
              <li>
                Place the cooled pork tenderloin on top of the mustard (or ham).
              </li>
              <li>
                Wrap the puff pastry tightly around the pork tenderloin, sealing
                the edges by pressing firmly. Trim any excess pastry and use it
                for decoration if desired.
              </li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Pizza</strong>
            </p>
            <ol>
              <li>Preheat your oven to 220°C (425°F).</li>
              <li>
                Place your rolled-out dough on a baking sheet or pizza stone.
              </li>
              <li>
                Spread a thin layer of tomato sauce over the dough, leaving a
                small border around the edges
              </li>
              <li>
                Sprinkle a generous amount of shredded mozzarella cheese over
                the sauce.
              </li>
              <li>Evenly distribute the cooked shrimp over the cheese.</li>
              <li>
                Optional: Add a little more garlic, fresh basil, or a sprinkle
                of lemon zest for extra flavor.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake the Pizza</strong>
            </p>
            <ol>
              <li>
                Bake the pizza in the preheated oven for 12-15 minutes, or until
                the crust is golden and the cheese is melted and bubbling.
              </li>
              <li>
                Remove from the oven and sprinkle with fresh parsley and basil.
                If desired, add a squeeze of lemon juice for a fresh, bright
                finish.
              </li>
            </ol>
            <p>
              <strong>Step 6: Serve</strong>
            </p>
            <ol>
              <li>
                Slice the pizza and serve immediately. Enjoy your shrimp pizza
                with a side salad or your favorite dipping sauce
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Shrimp prep:</strong> Be sure to pat the shrimp dry
                before cooking to avoid excess moisture on the pizza.
              </li>
              <li>
                <strong>Pizza dough:</strong> If you’re short on time, you can
                use store-bought pizza dough or even a pre-made pizza crust.
              </li>
              <li>
                <strong>Toppings:</strong> Feel free to add additional toppings
                like olives, spinach, or cherry tomatoes for extra flavor.
              </li>
              <li>
                <strong>Cheese options:</strong> For a richer flavor, try mixing
                mozzarella with some ricotta or parmesan cheese.
              </li>
            </ul>
            <p>
              This <strong>shrimp pizza</strong> offers a fresh and flavorful
              twist on the classic pizza. The combination of garlic, shrimp,
              cheese, and a perfectly baked crust creates a mouthwatering dish
              that’s sure to please everyone at the table.
            </p>

            <p>
              With its simple ingredients and quick preparation, this seafood
              pizza is a perfect choice for a weekend dinner or a casual
              get-together with friends and family. Give it a try and enjoy the
              deliciousness of a homemade shrimp pizza!
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
                href="/pork-tenderloin-in-puff-pastry"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Pork Tenderloin in Puff Pastry
                </p>
              </a>

              <a
                href="/easy-ice-cream-log-for-christmas"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Easy Ice Cream Log for Christmas: A Delightful Frozen Treat
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
