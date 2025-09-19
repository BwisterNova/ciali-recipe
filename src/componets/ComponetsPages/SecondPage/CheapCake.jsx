import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./cheapCake.module.css";
import cheapCakeImage from "./Images/cheapCakeImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CheapCake() {
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
    <div className={styles.cheapCakeContainer}>
      <div className={styles.cheapCakeContents}>
        <div>
          <img src={cheapCakeImage} alt="Cheap Soft Apple Cake" />
        </div>

        {/* Content Section */}
        <div className={styles.cheapCakeInfo}>
          <header>
            <h1>Cheap Soft Apple Cake: A Budget-Friendly, Moist Dessert</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              If you’re craving a comforting, homemade dessert but don’t want to
              break the bank, <strong>cheap soft apple cake</strong> is the
              perfect solution. This simple, budget-friendly cake combines the
              sweetness of apples with a soft, moist texture, making it an
              irresistible treat. It’s easy to make, requires minimal
              ingredients, and is ideal for using up any extra apples you have
              lying around. Whether you’re baking for a family gathering, a cozy
              afternoon snack, or just a sweet treat after dinner, this soft
              apple cake is sure to satisfy your cravings without emptying your
              wallet.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <ul>
              <li>
                2 medium apples (preferably Granny Smith or any firm variety)
              </li>
              <li>200g all-purpose flour (about 1 1/2 cups)</li>
              <li>150g granulated sugar (about 3/4 cup)</li>
              <li>100g butter, melted (about 1/2 cup)</li>
              <li>2 large eggs</li>
              <li>1 tsp vanilla extract</li>
              <li>1 tsp baking powder</li>
              <li>1/2 tsp baking soda</li>
              <li>1/2 tsp ground cinnamon</li>
              <li>A pinch of salt</li>
              <li>150ml milk (about 2/3 cup)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Apple</strong>
            </p>
            <ol>
              <li>
                Peel and core the apples, then slice them thinly. Set aside.
              </li>
              <li>
                If you want extra flavor, you can toss the apple slices in a
                little cinnamon and sugar, but this step is optional.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Cake Batter</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F) and grease a 20cm (8-inch)
                round cake pan or line it with parchment paper.
              </li>
              <li>
                In a large mixing bowl, whisk together the flour, sugar, baking
                powder, baking soda, cinnamon, and salt.
              </li>
              <li>
                In a separate bowl, whisk the eggs, melted butter, vanilla
                extract, and milk together until smooth.
              </li>
              <li>
                Pour the wet ingredients into the dry ingredients and stir until
                just combined. Be careful not to overmix—this will help keep the
                cake light and soft.
              </li>
            </ol>
            <p>
              <strong>Step 3: Add the Apples</strong>
            </p>
            <ol>
              <li>
                Gently fold in the sliced apples into the cake batter, making
                sure they are evenly distributed throughout.
              </li>
              <li>
                Pour the batter into the prepared cake pan, smoothing it out
                with a spatula.
              </li>
            </ol>
            <p>
              <strong>Step 4: Bake the Cake</strong>
            </p>
            <ol>
              <li>
                Bake the cake for 30-40 minutes or until a toothpick inserted
                into the center comes out clean. The cake should be golden brown
                on top and spring back slightly when touched.
              </li>
              <li>
                Let the cake cool in the pan for 10 minutes, then transfer it to
                a wire rack to cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 5: Serve</strong>
            </p>
            <ol>
              <li>
                Once the cake is fully cooled, dust it lightly with powdered
                sugar for a simple garnish, if desired.
              </li>
              <li>
                Slice and serve the cake on its own, or pair it with a dollop of
                whipped cream or a scoop of vanilla ice cream for an extra
                indulgent treat.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Apple variety:</strong> While any variety of apple can
                be used, firmer apples like Granny Smith or Braeburn will hold
                up well in the cake and add a slight tartness to balance the
                sweetness.
              </li>
              <li>
                <strong>Spice it up:</strong> Feel free to add extra spices like
                nutmeg or allspice to give the cake a more aromatic flavor.
              </li>
              <li>
                <strong>Butter substitute:</strong> If you want to make the cake
                a bit lighter, you can substitute the butter with vegetable oil.
                This will also help keep the cake moist.
              </li>
              <li>
                <strong>Vary the texture:</strong> For added texture, consider
                adding chopped nuts like walnuts or pecans, or even a handful of
                raisins or dried cranberries for a fruity twist.
              </li>
              <li>
                <strong>Make it dairy-free:</strong> To make this cake
                dairy-free, substitute the butter with margarine or a non-dairy
                alternative and use a plant-based milk like almond milk.
              </li>
            </ul>

            <p>
              This <strong>cheap soft apple cake</strong> is a fantastic dessert
              that proves you don’t need expensive ingredients to make something
              delicious. The natural sweetness and moisture from the apples,
              combined with the soft, fluffy texture of the cake, make it a
              family favorite. Plus, it’s a great way to use up apples before
              they spoil, and the ingredients are pantry staples you likely
              already have at home.
            </p>
            <p>
              Perfect for any occasion, this cake is not only affordable but
              also incredibly satisfying. Serve it as a sweet afternoon treat
              with a cup of tea or as a comforting dessert after dinner.
              Regardless of the occasion, this apple cake is sure to become a
              go-to recipe in your baking repertoire.
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/desserts"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/desserts")} />
                  Desserts
                </p>
              </a>

              <a
                href="/salmon-and-spinach-lasagna"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Salmon and Spinach Lasagna: A Delicious and Elegant Twist
                </p>
              </a>

              <a
                href="/chef-annas-chicken-marbella"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Chef Anna’s Chicken Marbella
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
