import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./easyMascarpone.module.css";
import EasyMascarponeImage from "./Images/imageye___-_Easy-Mascarpone-and-Raspberry-Christmas-Yule-Log.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function EasyMascarpone() {
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
    <div className={styles.EasyMascarponeContainer}>
      <div className={styles.EasyMascarponeContents}>
        <div>
          <img
            src={EasyMascarponeImage}
            alt="Easy Mascarpone and Raspberry Christmas Yule Log"
          />
        </div>

        {/* Content Section */}
        <div className={styles.EasyMascarponeInfo}>
          <header>
            <h1>Easy Mascarpone and Raspberry Christmas Yule Log</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              The <strong>Yule log,</strong> or <strong>Bûche de Noël,</strong>{" "}
              is a traditional Christmas dessert that brings festive joy to any
              celebration. This <strong>easy mascarpone and raspberry</strong>{" "}
              Yule log offers a fresh twist on the classic with a light, fluffy
              sponge filled with smooth mascarpone cream and vibrant
              raspberries. With its perfect balance of sweetness and tartness,
              this dessert is sure to be a holiday favorite, and best of all,
              it’s simple to make!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Sponge Cake</strong>
            </p>
            <ul>
              <li>4 large eggs</li>
              <li>100g granulated sugar</li>
              <li>1 tsp vanilla extract</li>
              <li>100g all-purpose flour</li>
              <li>1 tsp baking powder</li>
              <li>A pinch of salt</li>
            </ul>
            <p>
              <strong>For the Mascarpone Filling:</strong>
            </p>
            <ul>
              <li>250g mascarpone cheese</li>
              <li>200ml heavy cream</li>
              <li>50g powdered sugar</li>
              <li>1 tsp vanilla extract</li>
              <li>100g fresh raspberries (or raspberry puree)</li>
            </ul>
            <p>
              <strong>For the Decoration:</strong>
            </p>
            <ul>
              <li>Icing sugar, for dusting</li>
              <li>Extra fresh raspberries, for garnish</li>
              <li>Fresh mint leaves (optional)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Sponge Cake</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F). Line a 25×30 cm (10×12
                inches) baking tray with parchment paper.
              </li>
              <li>
                In a mixing bowl, whisk the eggs and sugar together until light
                and fluffy, about 5 minutes. Add the vanilla extract and whisk
                until combined.
              </li>
              <li>
                In a separate bowl, sift the flour, baking powder, and salt
                together. Gently fold the dry ingredients into the egg mixture,
                careful not to deflate the batter.
              </li>
              <li>
                Pour the batter into the prepared baking tray, spreading it
                evenly. Bake for 8–10 minutes, or until the cake is golden and a
                skewer comes out clean.
              </li>
              <li>
                While the cake is baking, prepare a clean tea towel and dust it
                with powdered sugar. Once the cake is baked, turn it out onto
                the towel and peel off the parchment paper. Roll the cake up in
                the towel while it’s still warm and let it cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Mascarpone Filling</strong>
            </p>
            <ol>
              <li>
                In a large bowl, whisk together the mascarpone cheese, heavy
                cream, powdered sugar, and vanilla extract until smooth and
                thickened.
              </li>
              <li>
                Gently fold in the fresh raspberries (or raspberry puree) to
                create a swirled effect.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Yule Log</strong>
            </p>
            <ol>
              <li>
                Once the sponge cake has cooled, carefully unroll it from the
                tea towel. Spread a generous layer of the mascarpone filling
                over the cake, leaving a small border around the edges.
              </li>
              <li>
                Gently roll the cake back up, starting from the short side, to
                form the log shape. Place the rolled cake seam-side down on a
                serving platter.
              </li>
            </ol>
            <p>
              <strong>Step 4: Decorate the Yule Log</strong>
            </p>
            <ol>
              <li>
                Dust the top of the Yule log with icing sugar to create a snowy
                effect.
              </li>
              <li>
                Garnish with extra fresh raspberries, mint leaves, or even a few
                edible flowers for a festive touch.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Make ahead:</strong> The Yule log can be made the day
                before serving. Store it in the fridge and decorate just before
                serving.
              </li>
              <li>
                <strong>Flavor variations:</strong> For a more indulgent flavor,
                add a little bit of orange zest or a splash of liqueur (such as
                Grand Marnier) to the mascarpone filling.
              </li>

              <li>
                <strong>Raspberry puree:</strong> If fresh raspberries aren’t
                available, you can use a raspberry puree or jam, making sure to
                strain it for a smooth texture.
              </li>
            </ul>

            <h3>Serving Suggestions</h3>

            <p>
              This easy mascarpone and raspberry Yule log pairs beautifully with
              a cup of hot chocolate or a glass of festive champagne. It’s the
              perfect end to a holiday meal and will impress guests with its
              elegant appearance and delicious flavor!
            </p>
            <p>
              This{" "}
              <strong>easy mascarpone and raspberry Christmas Yule log</strong>{" "}
              is a delightful treat that captures the essence of the season.
              With a light sponge, creamy filling, and burst of fresh fruit,
              it’s a perfect addition to your holiday table. Try this recipe and
              enjoy a simple yet stunning dessert that will surely become a new
              Christmas tradition!
            </p>
            <p>Merry CHristmas and happy baking!</p>

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
                href="/baked-rice-pudding-a-creamy-comforting-dessert"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Baked Rice Pudding: A Creamy, Comforting Dessert
                </p>
              </a>

              <a
                href="/christmas-cake-with-pear-speculoos-and-salted-butter-caramel"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Christmas Cake with Pear, Speculoos, and Salted Butter Caramel
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
