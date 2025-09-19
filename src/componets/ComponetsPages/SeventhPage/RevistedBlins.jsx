import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./revistesBlins.module.css";
import RevistesBlinsImage from "./Images/RevistesBlinsImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function RevistesBlins() {
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
    <div className={styles.RevistesBlinsContainer}>
      <div className={styles.RevistesBlinsContents}>
        <div>
          <img
            src={RevistesBlinsImage}
            alt="Revisited Blinis with Buckwheat and Smoked Salmon"
          />
        </div>

        {/* Content Section */}
        <div className={styles.RevistesBlinsInfo}>
          <header>
            <h1>Revisited Blinis with Buckwheat and Smoked Salmon</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Blinis</strong> are traditional Russian dish often
              associated with celebrations, but this{" "}
              <strong>revisited blinis with buckwheat and smoked salmon</strong>{" "}
              brings a modern twist to the classic recipe. With the earthy
              flavor of <strong>buckwheat</strong> and the delicate richness of{" "}
              <strong>smoked salmon,</strong> this dish is perfect for
              appetizers, brunches, or festive gatherings. The combination of
              crispy yet tender blinis, paired with smooth crème fraîche, tangy
              dill, and the smokiness of salmon, creates a sophisticated but
              easy-to-make dish that will impress your guests.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Filling</strong>
            </p>
            <ul>
              <li>1/2 cup buckwheat flour</li>
              <li>
                1/2 cup all-purpose flour (or use all buckwheat flour for a
                gluten-free option)
              </li>
              <li>1 tsp baking powder</li>
              <li>1/4 tsp salt</li>
              <li>2 large eggs, separated</li>
              <li>1 cup milk (or a dairy-free alternative like almond milk)</li>
              <li>2 tbsp melted butter or olive oil</li>
              <li>1 tsp honey (optional, for a touch of sweetness)</li>
              <li>1 tbsp finely chopped chives (optional, for extra flavor)</li>
            </ul>
            <p>
              <strong>For the Topping</strong>
            </p>
            <ul>
              <li>200g smoked salmon, thinly sliced</li>
              <li>1/2 cup crème fraîche (or sour cream)</li>
              <li>Fresh dill, for garnish</li>
              <li>Lemon wedges, for serving</li>
              <li>Capers (optional)</li>
              <li>Freshly ground black pepper</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Blins Batter</strong>
            </p>
            <ol>
              <li>
                In a large bowl, whisk together the buckwheat flour, all-purpose
                flour, baking powder, and salt.
              </li>
              <li>
                In a separate bowl, beat the egg yolks and add the milk, melted
                butter, and honey. Mix until smooth.
              </li>
              <li>
                Gradually add the wet ingredients to the dry ingredients,
                stirring until just combined.
              </li>
              <li>
                In another bowl, beat the egg whites until soft peaks form, then
                gently fold them into the batter. This will make the blinis
                light and fluffy.
              </li>
              <li>If using, stir in the chopped chives for added flavor.</li>
            </ol>
            <p>
              <strong>Step 2: Cook the Blins</strong>
            </p>
            <ol>
              <li>
                Heat a non-stick skillet or griddle over medium heat and lightly
                grease it with butter or oil.
              </li>
              <li>Lay each softened wrapper flat on a clean surface.</li>
              <li>
                Spoon small amounts of batter (about 1–2 tbsp) onto the skillet
                to form small pancakes.
              </li>
              <li>
                Cook the blinis for 2-3 minutes on each side, or until golden
                brown and cooked through. Remove from the pan and set aside.
                Continue with the remaining batter.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Blins</strong>
            </p>
            <ol>
              <li>Arrange the warm blinis on a serving platter.</li>
              <li>
                Top each blini with a small dollop of crème fraîche or sour
                cream.
              </li>
              <li>Add a slice of smoked salmon on top of the crème fraîche.</li>
              <li>
                Garnish with fresh dill, a few capers, and a squeeze of lemon
                juice.
              </li>
              <li>
                Finish with a sprinkle of freshly ground black pepper for extra
                flavor.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Flour substitution:</strong> For a gluten-free version,
                use only buckwheat flour, or combine buckwheat and rice flour
                for a lighter texture.
              </li>
              <li>
                <strong>Make ahead:</strong>You can make the blinis in advance
                and keep them warm in the oven, covered with a clean kitchen
                towel. Just assemble them just before serving.
              </li>
              <li>
                <strong>Make ahead:</strong> The spring rolls can be assembled
                ahead of time and stored in the fridge for up to 1 hour before
                frying. This can help reduce prep time for busy gatherings.
              </li>
              <li>
                <strong>Customization:</strong> Experiment with different
                toppings! Try adding thinly sliced cucumber, a dollop of
                horseradish, or a touch of smoked trout instead of salmon.
              </li>
            </ul>

            <p>
              These{" "}
              <strong>revisited blinis with buckwheat and smoked salmon</strong>{" "}
              offer a delightful update to a traditional favorite. The nutty,
              earthy flavor of buckwheat gives the blinis a unique texture and
              depth, while the combination of smoked salmon, crème fraîche, and
              fresh herbs creates a perfectly balanced bite. Whether you’re
              serving them at a fancy brunch, a holiday gathering, or just as a
              special treat, these blinis are sure to elevate any occasion.
            </p>
            <p>
              Enjoy this elegant dish and let your taste buds indulge in the
              savory goodness of this modern twist on a timeless classic!
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
                href="/cake-with-sun-dried-vegetables-and-mozzarella"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Cake with Sun-Dried Vegetables and Mozzarella: A Savory
                  Delight for Every Occasion
                </p>
              </a>

              <a
                href="/spicy-chicken-spring-rolls"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Spicy Chicken Spring Rolls: A Flavorful, Crunchy Delight
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
