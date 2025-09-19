import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./crustless.module.css";
import CrustlessImage from "./Images/CrustlessImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Crustless() {
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
    <div className={styles.CrustlessContainer}>
      <div className={styles.CrustlessContents}>
        <div>
          <img
            src={CrustlessImage}
            alt="Crustless (and Gluten-Free) Quiche: A Delicious and Versatile Dish"
          />
        </div>

        {/* Content Section */}
        <div className={styles.CrustlessInfo}>
          <header>
            <h1>
              Crustless (and Gluten-Free) Quiche: A Delicious and Versatile Dish
            </h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              A <strong>crustless quiche</strong> is a perfect option for anyone
              seeking a lighter, gluten-free version of the classic dish. Packed
              with eggs, cheese, vegetables, and your favorite proteins, this
              quiche is incredibly versatile and can be customized to suit any
              taste. Whether you’re serving it for breakfast, brunch, or dinner,
              this crustless quiche is simple to make, delicious, and suitable
              for those following gluten-free diets. With no crust to worry
              about, it’s also quicker to prepare than traditional quiche, while
              still delivering all the savory goodness you love!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Chicken Filling</strong>
            </p>
            <ul>
              <li>6 large eggs</li>
              <li>1 cup heavy cream (or whole milk for a lighter option)</li>
              <li>1 cup grated cheese (cheddar, Swiss, or a mix)</li>
              <li>1 small onion, finely chopped</li>
              <li>1 cup spinach, chopped (or any leafy green)</li>
              <li>
                1/2 cup cooked bacon, crumbled (optional, for a meat option)
              </li>
              <li>1/2 cup cooked mushrooms, sliced (optional)</li>
              <li>1/4 tsp garlic powder</li>
              <li>1/4 tsp ground nutmeg (optional, for added flavor)</li>
              <li>Salt and pepper to taste</li>
              <li>Fresh herbs for garnish (parsley, thyme, or chives)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Preheat the Oven</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F). Grease a 9-inch pie dish or
                quiche pan with butter or cooking spray to prevent sticking
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Vegetables and Protein</strong>
            </p>
            <ol>
              <li>
                In a medium skillet, sauté the chopped onion and spinach (and
                mushrooms if using) over medium heat for 3–5 minutes until
                softened. Set aside to cool slightly.
              </li>
              <li>
                If using bacon, cook it in the same skillet until crispy, then
                crumble into small pieces.
              </li>
            </ol>
            <p>
              <strong>Step 3: Prepare the Egg Mixture</strong>
            </p>
            <ol>
              <li>
                In a large bowl, whisk together the eggs, heavy cream (or milk),
                garlic powder, nutmeg, salt, and pepper until well combined.
              </li>
              <li>
                Stir in the grated cheese and any cooked vegetables or meats
                you’re using, ensuring they’re evenly distributed.
              </li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Quiche</strong>
            </p>
            <ol>
              <li>
                Pour the egg mixture into the prepared pie dish or quiche pan,
                spreading the ingredients evenly.
              </li>
              <li>
                If you like, you can top the quiche with a bit more cheese for a
                golden, cheesy top.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake the Quiche</strong>
            </p>
            <ol>
              <li>
                Bake in the preheated oven for 30–40 minutes, or until the
                quiche is set in the center and lightly golden on top. A knife
                inserted in the middle should come out clean.
              </li>
              <li>
                Remove the quiche from the oven and let it cool for a few
                minutes before slicing.
              </li>
            </ol>
            <p>
              <strong>Step 6: Serve and Enjoy</strong>
            </p>
            <ol>
              <li>
                Garnish with fresh herbs, such as parsley, thyme, or chives, for
                added color and flavor.
              </li>
              <li>
                Serve warm or at room temperature. This quiche pairs wonderfully
                with a light salad or some fresh fruit.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Vegetable options:</strong> This quiche is incredibly
                versatile, so feel free to use any vegetables you have on hand.
                Broccoli, bell peppers, or zucchini are great additions.
              </li>
              <li>
                <strong>Cheese choices:</strong> Experiment with different
                cheeses based on your taste. Goat cheese, feta, or Gruyère work
                beautifully in this dish.
              </li>

              <li>
                <strong>Make ahead:</strong> This quiche can be made in advance
                and stored in the fridge for 2–3 days. It’s also great for meal
                prepping, as it can be reheated in the microwave or oven.
              </li>
            </ul>

            <p>
              This <strong>crustless, gluten-free quiche</strong> is a healthy
              and delicious alternative to the traditional quiche, without
              sacrificing flavor. It’s perfect for anyone with gluten
              sensitivities or anyone looking to enjoy a lighter meal. Whether
              you’re making it for breakfast, brunch, or dinner, this simple and
              customizable recipe is sure to be a hit. Plus, it’s a fantastic
              way to use up leftover vegetables, meats, and cheeses, making it
              both practical and delicious.
            </p>
            <p>
              <strong>Enjoy your crustless quiche and happy cooking!</strong>
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
                href="/spicy-chicken-spring-rolls"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Spicy Chicken Spring Rolls: A Flavorful, Crunchy Delight
                </p>
              </a>

              <a
                href="/apple-strudel-a-classic-dessert-with-a-warm-spiced-filling"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Apple Strudel: A Classic Dessert with a Warm, Spiced Filling
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
