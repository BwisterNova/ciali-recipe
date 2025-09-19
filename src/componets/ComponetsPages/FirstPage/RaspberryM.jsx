import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./raspberryM.module.css";
import RaspberryMImage from "./Images/Raspberry-Mascarpone-Sponge-Cake.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function RaspberryM() {
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
    <div className={styles.RaspberryMContainer}>
      <div className={styles.RaspberryMContents}>
        <div>
          <img src={RaspberryMImage} alt="Raspberry Mascarpone Sponge Cake" />
        </div>

        {/* Content Section */}
        <div className={styles.RaspberryMInfo}>
          <header>
            <h1>
              Raspberry Mascarpone Sponge Cake: A Perfect Blend of Elegance and
              Flavor
            </h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Raspberry mascarpone sponge cake</strong> is a delicate
              and delightful dessert that combines the lightness of sponge cake,
              the creamy richness of mascarpone, and the tangy sweetness of
              raspberries. Whether for a special celebration, an afternoon tea,
              or just because you’re in the mood for a luxurious treat, this
              cake is sure to impress. Its vibrant layers make it as visually
              stunning as it is delicious, while the flavors come together in
              perfect harmony.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Sponge Cake:</strong>
            </p>
            <ul>
              <li>4 large eggs</li>
              <li>150g granulated sugar (about 3/4 cup)</li>
              <li>150g all-purpose flour (about 1 1/4 cups)</li>
              <li>1 tsp vanilla extract</li>
              <li>A pinch of salt</li>
            </ul>
            <p>
              <strong>For the Mascarpone Cream:</strong>
            </p>
            <ul>
              <li>250g mascarpone cheese (about 1 cup)</li>
              <li>200ml heavy cream, chilled (about 3/4 cup)</li>
              <li>3 tbsp powdered sugar</li>
              <li>1 tsp vanilla extract</li>
            </ul>
            <p>
              <strong>For the Raspberry Layer:</strong>
            </p>
            <ul>
              <li>300g fresh raspberries (about 2 1/2 cups)</li>
              <li>2 tbsp raspberry jam (optional, for added sweetness)</li>
            </ul>
            <p>
              <strong>For Garnish (Optional):</strong>
            </p>
            <ul>
              <li>Fresh raspberries</li>
              <li>Powdered sugar</li>
              <li>Fresh mint leaves</li>
            </ul>
            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Sponge Cake</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Preheat your oven to 180°C (350°F) and line a round 20cm
                (8-inch) cake pan with parchment paper.
              </li>
              <li>
                In a mixing bowl, beat the eggs, sugar, and vanilla extract
                together using an electric mixer until the mixture becomes pale,
                fluffy, and triples in volume (about 8-10 minutes). In a mixing
                bowl, beat the eggs, sugar, and vanilla extract together using
                an electric mixer until the mixture becomes pale, fluffy, and
                triples in volume (about 8-10 minutes).
              </li>
              <li>
                Sift the flour and salt into the egg mixture and gently fold
                with a spatula until just combined. Be careful not to deflate
                the batter.
              </li>
              <li>
                Pour the batter into the prepared cake pan and bake for 20-25
                minutes, or until a toothpick inserted in the center comes out
                clean.
              </li>
              <li>
                Let the cake cool in the pan for 10 minutes, then transfer it to
                a wire rack to cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Mascarpone Cream</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                In a bowl, whisk the mascarpone cheese, powdered sugar, and
                vanilla extract until smooth.
              </li>
              <li>
                In a separate chilled bowl, whip the heavy cream until soft
                peaks form.
              </li>
              <li>
                Gently fold the whipped cream into the mascarpone mixture until
                fully incorporated and creamy.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Cake</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Once the sponge cake has cooled, slice it horizontally into two
                or three layers, depending on your preference and skill.
              </li>
              <li>
                Place the first layer of cake on a serving plate and spread a
                thin layer of raspberry jam (if using) followed by a generous
                layer of mascarpone cream.
              </li>
              <li>
                Sprinkle fresh raspberries evenly over the cream. Repeat this
                process for the remaining layers, finishing with a layer of
                mascarpone cream on top.
              </li>
            </ol>
            <p>
              <strong>Step 4: Garnish and Serve</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Decorate the top of the cake with fresh raspberries, a dusting
                of powdered sugar, and a few fresh mint leaves for a pop of
                color.
              </li>
              <li>
                Refrigerate the cake for at least 1-2 hours before serving to
                allow the flavors to meld and the cream to set.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Sponge cake:</strong> Ensure the eggs are at room
                temperature for maximum volume when whipping. Handle the batter
                gently to maintain its lightness.
              </li>
              <li>
                <strong>Mascarpone cream:</strong> Use chilled cream and whip it
                in a cold bowl to ensure a stable, fluffy consistency.
              </li>
              <li>
                <strong>Raspberries:</strong> Fresh raspberries work best, but
                you can also use frozen raspberries if fresh ones aren’t
                available. Just thaw and drain them well to avoid excess
                moisture.
              </li>
              <li>
                <strong>Make it ahead:</strong> The cake can be assembled a day
                in advance and stored in the refrigerator. This makes it an
                excellent dessert for entertaining, as the flavors develop even
                more overnight.
              </li>
              <li>
                <strong>Variations:</strong> Swap raspberries for strawberries,
                blueberries, or a mix of berries for a different twist. You can
                also add a drizzle of raspberry coulis for extra flair.
              </li>
            </ul>

            <p>
              This <strong>raspberry mascarpone sponge cake</strong> is a
              dessert that strikes the perfect balance between elegance and
              simplicity. The light sponge, creamy mascarpone, and juicy
              raspberries create a harmonious blend of flavors and textures that
              will delight anyone who tastes it.
            </p>
            <p>
              Whether you’re celebrating a birthday, hosting a dinner party, or
              simply indulging in a sweet treat, this cake is guaranteed to
              impress with its taste and presentation. Serve it chilled, and
              watch it disappear slice by slice!
            </p>
            <div className={styles.infoButtom}>
              <a
                href="/category/desserts"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/desserts")} />
                  Lunch
                </p>
              </a>
              <a
                href="/indian-chicken-with-tomato-and-rice"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Indian Chicken with Tomato and Rice
                </p>
              </a>
              <a
                href="/tuna-pasta-salad-recipe"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Tuna Pasta Salad Recipe
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
