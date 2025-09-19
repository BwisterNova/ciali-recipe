import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./lightStrawberry.module.css";
import LightStrawberryImage from "./Images/LightStrawberryImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LightStrawberry() {
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
    <div className={styles.LightStrawberryContainer}>
      <div className={styles.LightStrawberryContents}>
        <div>
          <img src={LightStrawberryImage} alt="Light Strawberry Roll Cake" />
        </div>

        {/* Content Section */}
        <div className={styles.LightStrawberryInfo}>
          <header>
            <h1>Light Strawberry Roll Cake: A Fresh and Fluffy Delight</h1>
            <p>November 30, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Looking for a dessert that’s light, fruity, and perfect for any
              occasion? This <strong>light strawberry roll cake</strong> checks
              all the boxes. With its airy sponge cake, creamy filling, and
              bursts of fresh strawberries, this treat is both elegant and easy
              to prepare. It’s a crowd-pleaser for spring gatherings, summer
              picnics, or whenever you’re craving something sweet yet
              refreshing.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Sponge Cake:</strong>
            </p>
            <ul>
              <li>4 large eggs</li>
              <li>100g sugar (about 1/2 cup)</li>
              <li>80g all-purpose flour (about 2/3 cup)</li>
              <li>20g cornstarch (about 2 tbsp)</li>
              <li>1 tsp vanilla extract</li>
              <li>Pinch of salt</li>
            </ul>
            <p>
              <strong>For the Filling:</strong>
            </p>
            <ul>
              <li>200ml light whipped cream (or plant-based alternative)</li>
              <li>2 tbsp powdered sugar</li>
              <li>150g fresh strawberries, diced (about 1 cup)</li>
            </ul>
            <p>
              <strong>For Decoration:</strong>
            </p>
            <ul>
              <li>Powdered sugar for dusting</li>
              <li>Sliced strawberries</li>
              <li>Mint leaves (optional)</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Sponge Cake</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F). Line a baking sheet
                (approximately 30×40 cm) with parchment paper.
              </li>
              <li>
                Separate the egg whites and yolks into two bowls. Whisk the
                yolks with sugar and vanilla until pale and creamy.
              </li>
              <li>
                In a clean bowl, beat the egg whites with a pinch of salt until
                stiff peaks form.
              </li>
              <li>
                Gently fold the egg whites into the yolk mixture, alternating
                with sifted flour and cornstarch, to preserve the airy texture.
              </li>
              <li>
                Spread the batter evenly onto the prepared baking sheet. Bake
                for 10-12 minutes, or until the cake is lightly golden and
                springs back when touched.
              </li>
            </ol>
            <p>
              <strong>Step 2: Roll the Cake</strong>
            </p>
            <ol>
              <li>
                While the cake is still warm, turn it out onto a clean kitchen
                towel sprinkled with powdered sugar. Peel off the parchment
                paper.
              </li>
              <li>
                Roll the cake gently with the towel from one short side to the
                other, creating a log shape. Let it cool completely in this
                rolled position.
              </li>
            </ol>
            <p>
              <strong>Step 3: Make the Filling</strong>
            </p>
            <ol>
              <li>
                Whip the cream with powdered sugar until soft peaks form. Fold
                in the diced strawberries.
              </li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Roll Cake</strong>
            </p>
            <ol>
              <li>
                Unroll the cooled sponge cake carefully. Spread the strawberry
                cream filling evenly over the surface, leaving a small border
                around the edges.
              </li>
              <li>
                Gently roll the cake back up without the towel, ensuring the
                filling stays inside.
              </li>
            </ol>
            <p>
              <strong>Step 5: Decorate and Serve</strong>
            </p>
            <ol>
              <li>
                Place the roll cake seam-side down on a serving platter. Dust
                with powdered sugar and garnish with sliced strawberries and
                mint leaves, if desired.
              </li>
              <li>Chill for at least 1 hour before slicing and serving.</li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Perfect sponge:</strong> Be gentle when folding in the
                egg whites to maintain the cake’s light and airy texture.
              </li>
              <li>
                <strong>Filling variations:</strong> Swap strawberries for
                raspberries, blueberries, or peaches for a seasonal twist.
              </li>
              <li>
                <strong>Make ahead:</strong> Prepare the cake a day in advance
                and refrigerate it. The flavors meld beautifully overnight.
              </li>
            </ul>

            <p>
              This <strong>light strawberry roll cake</strong> is the perfect
              balance of sweetness, creaminess, and freshness. Its elegant
              presentation and delightful flavors make it a versatile dessert
              for any occasion. Easy to prepare yet impressive, it’s a treat
              your family and friends will adore.
            </p>

            <p>
              So, roll up your sleeves, and get ready to create this fruity
              masterpiece—it’s sure to become a favorite in your dessert
              repertoire!
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
                href="/easy-thousand-hole-pancakes-beghrir-express-algerian-recipe"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Easy Thousand-Hole Pancakes (Beghrir Express, Algerian Recipe)
                </p>
              </a>

              <a
                href="/pumpkin-apple-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Pumpkin Apple Cake: A Cozy Fall Delight
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
