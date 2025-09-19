import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./lightChocolate.module.css";
import LightChocolateImage from "./Images/LightChocolateImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LightChocolate() {
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
    <div className={styles.LightChocolateContainer}>
      <div className={styles.LightChocolateContents}>
        <div>
          <img
            src={LightChocolateImage}
            alt="Light Chocolate Mousse: A Decadent Yet Airy Dessert"
          />
        </div>

        {/* Content Section */}
        <div className={styles.LightChocolateInfo}>
          <header>
            <h1>Light Chocolate Mousse: A Decadent Yet Airy Dessert</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Light chocolate mousse</strong> is the perfect dessert for
              those who crave indulgence without feeling too heavy. This airy,
              velvety mousse is made with rich chocolate and whipped cream,
              creating a perfect balance of deep flavor and light texture.
              Whether served in individual cups, as a layer in a cake, or paired
              with fresh berries, this dessert is sure to impress. If you’re
              looking for a simple yet luxurious treat, this light chocolate
              mousse is a must-try!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Mousse</strong>
            </p>
            <ul>
              <li>200g dark chocolate (70% cocoa recommended)</li>
              <li>3 large eggs, separated</li>
              <li>2 tbsp sugar</li>
              <li>1 tsp vanilla extract</li>
              <li>300ml heavy cream (about 1 1/4 cups)</li>
              <li>A pinch of salt</li>
            </ul>
            <p>
              <strong>For Garnish (Optional):</strong>
            </p>
            <ul>
              <li>Shaved chocolate or cocoa powder</li>
              <li>Fresh berries (like raspberries or strawberries)</li>
              <li>Whipped cream or mint leaves</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Melt the Chocolate</strong>
            </p>
            <ol>
              <li>
                Begin by melting the dark chocolate. You can do this in a
                heatproof bowl over a pot of simmering water (double boiler
                method) or in the microwave in 30-second intervals, stirring
                between each.
              </li>
              <li>
                Once melted, allow the chocolate to cool slightly while you
                prepare the other ingredients.
              </li>
            </ol>
            <p>
              <strong>Step 2: Whip the Egg Whites</strong>
            </p>
            <ol>
              <li>
                In a clean bowl, beat the egg whites with a pinch of salt until
                stiff peaks form. Gradually add the sugar while continuing to
                beat until the egg whites are glossy and hold their shape. Set
                aside.
              </li>
            </ol>
            <p>
              <strong>Step 3: Whip the Cream</strong>
            </p>
            <ol>
              <li>
                In a separate bowl, whip the heavy cream until soft peaks form.
                Be careful not to overwhip it.
              </li>
            </ol>
            <p>
              <strong>Step 4: Combine the Ingredients</strong>
            </p>
            <ol>
              <li>Stir the vanilla extract into the melted chocolate.</li>
              <li>
                Gently fold the egg yolks into the slightly cooled chocolate
                mixture. Be careful not to deflate the mousse too much as you
                fold.
              </li>
              <li>
                Next, fold in the whipped cream in two or three stages. Again,
                fold gently until just combined.
              </li>
            </ol>
            <p>
              <strong>Step 5: Incorporate the Egg Whites</strong>
            </p>
            <ol>
              <li>
                Lastly, carefully fold in the beaten egg whites into the
                chocolate mixture, doing so in batches. This step is crucial to
                achieving the mousse’s light, airy texture
              </li>
            </ol>
            <p>
              <strong>Step 6: Chill and Serve</strong>
            </p>
            <ol>
              <li>
                Spoon the mousse into individual serving dishes, cups, or a
                large bowl
              </li>
              <li>
                Refrigerate for at least 2 hours to allow the mousse to set and
                develop its smooth texture.
              </li>
              <li>
                Before serving, garnish with shaved chocolate, a dusting of
                cocoa powder, or fresh berries. You can also top it with a
                dollop of whipped cream or mint leaves for an extra touch.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Chocolate choice:</strong> The quality of the chocolate
                directly impacts the flavor of your mousse. Go for a
                high-quality dark chocolate with at least 70% cocoa for the best
                taste.
              </li>
              <li>
                <strong>Egg safety:</strong> Since this recipe uses raw egg
                yolks, make sure to use pasteurized eggs to minimize the risk of
                foodborne illness, especially if you’re serving it to pregnant
                women or young children. Alternatively, you can use a
                pasteurized egg substitute.
              </li>
              <li>
                <strong>Texture variations:</strong> If you prefer a firmer
                mousse, allow it to chill for longer, or add more whipped cream
                for a fluffier result.
              </li>
              <li>
                <strong>Flavor add-ins:</strong> Add a hint of flavor by mixing
                in a splash of liqueur like Grand Marnier, rum, or Baileys. You
                can also add spices like cinnamon or chili powder for a warm
                twist.
              </li>
            </ul>

            <p>
              <strong>Light chocolate mousse</strong> is a dreamy dessert that
              offers all the indulgence of chocolate without the heaviness of
              traditional puddings or cakes. Its rich flavor and light, airy
              texture make it the perfect treat for any occasion, from casual
              gatherings to fancy dinner parties. With just a few simple
              ingredients and easy steps, you can create a dessert that feels
              luxurious and sophisticated.
            </p>
            <p>
              Serve this mousse at your next celebration and watch as your
              guests fall in love with its delicate yet satisfying taste.
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
                href="/raspberry-and-speculoos-verrines"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Raspberry and Speculoos Verrines: A Sweet, Crunchy Delight
                </p>
              </a>

              <a
                href="/raspberry-and-pistachio-yule-log"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Raspberry and Pistachio Yule Log: A Festive Fusion of Flavors
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
