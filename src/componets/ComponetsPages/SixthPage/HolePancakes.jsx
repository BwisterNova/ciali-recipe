import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./holePancake.module.css";
import HolePancakeImage from "./Images/HolePancakeImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function HolePancake() {
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
    <div className={styles.HolePancakeContainer}>
      <div className={styles.HolePancakeContents}>
        <div>
          <img
            src={HolePancakeImage}
            alt="Easy Thousand-Hole Pancakes (Beghrir Express, Algerian Recipe)"
          />
        </div>

        {/* Content Section */}
        <div className={styles.HolePancakeInfo}>
          <header>
            <h1>
              Easy Thousand-Hole Pancakes (Beghrir Express, Algerian Recipe)
            </h1>
            <p>December 1, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Beghrir,</strong> often called “thousand-hole pancakes,”
              is a delightful Algerian treat with a light, spongy texture and a
              unique appearance thanks to the tiny bubbles that form during
              cooking. These semolina-based pancakes are traditionally served
              with a drizzle of honey and melted butter, making them a perfect
              accompaniment to tea or coffee.
            </p>
            <p>
              This express recipe simplifies the preparation, so you can enjoy
              these pancakes in no time. Whether you’re familiar with North
              African cuisine or discovering it for the first time, Beghrir is a
              must-try!
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For Pancakes:</strong>
            </p>
            <ul>
              <li>250g fine semolina (about 1 1/2 cups)</li>
              <li>50g all-purpose flour (about 1/3 cup)</li>
              <li>1 tbsp sugar</li>
              <li>1/2 tsp salt</li>
              <li>2 tsp baking powder</li>
              <li>2 tsp baking powder</li>
              <li>500ml warm water (about 2 cups)</li>
            </ul>
            <p>
              <strong>For the Topping:</strong>
            </p>
            <ul>
              <li>Honey</li>
              <li>Melted butter</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Batter</strong>
            </p>
            <ol>
              <li>
                In a blender, combine the semolina, flour, sugar, salt, baking
                powder, and dry yeast.
              </li>
              <li>
                Gradually add the warm water while blending until the mixture is
                smooth and lump-free. The batter should have a pourable
                consistency, similar to a crepe batter.
              </li>
              <li>
                Let the batter rest for 15-20 minutes to allow the yeast to
                activate.
              </li>
            </ol>
            <p>
              <strong>Step 2:Cook the Beghrir</strong>
            </p>
            <ol>
              <li>
                Heat a non-stick pan or griddle over medium heat. There’s no
                need to grease the pan.
              </li>
              <li>
                Pour a small ladleful of batter into the pan to form a pancake.
                Cook only on one side until the surface is covered with tiny
                holes and the batter is set. This should take about 1-2 minutes.
              </li>
              <li>
                Remove the pancake from the pan and place it on a clean kitchen
                towel. Repeat with the remaining batter, stacking the pancakes
                without overlapping.
              </li>
            </ol>
            <p>
              <strong>Step 3: Serve</strong>
            </p>
            <ol>
              <li>
                To serve, mix equal parts honey and melted butter. Drizzle
                generously over the Beghrir.
              </li>
              <li>
                Serve warm with tea or coffee for a traditional Algerian
                breakfast or snack.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Blending:</strong> Using a blender ensures a smooth
                batter and helps aerate it for fluffier pancakes.
              </li>
              <li>
                <strong>Resting time:</strong> Allowing the batter to rest is
                essential for activating the yeast and achieving the signature
                bubbly texture.
              </li>
              <li>
                <strong>Cooking:</strong> Beghrir cooks quickly, so keep an eye
                on the pan to avoid overcooking.
              </li>
            </ul>
            <h3>Variations</h3>
            <ul>
              <li>
                <strong>Flavor twist:</strong> Add a splash of orange blossom
                water or vanilla extract to the batter for an aromatic touch.
              </li>
              <li>
                <strong>Savory version:</strong> Omit the sugar and serve with
                olive oil or a tomato-based topping for a savory treat.
              </li>
              <li>
                <strong>Accompaniments:</strong> Pair Beghrir with almond
                butter, date syrup, or fresh fruit for a modern twist.
              </li>
            </ul>

            <p>
              <strong>Beghrir</strong> is more than just a pancake—it’s a window
              into Algerian culinary tradition. This easy recipe brings the
              magic of thousand-hole pancakes to your kitchen in no time,
              offering a taste of North Africa that’s sure to delight your
              family and friends.
            </p>

            <p>
              Give this express version a try, and enjoy the light, fluffy
              texture and irresistible flavor of Beghrir. Perfect for any time
              of day, these pancakes are as beautiful as they are delicious!
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
                href="/capon-supreme-with-morels"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Capon Supreme with Morels: A Refined Holiday Recipe
                </p>
              </a>

              <a
                href="/light-strawberry-roll-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Light Strawberry Roll Cake: A Fresh and Fluffy Delight
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
