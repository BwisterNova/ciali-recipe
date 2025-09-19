import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./raspberryPistachio.module.css";
import RaspberryPistachioImage from "./Images/imageye___-_Raspberry-and-Pistachio-Yule-Log.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function RaspberryPistachio() {
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
    <div className={styles.RaspberryPistachioContainer}>
      <div className={styles.RaspberryPistachioContents}>
        <div>
          <img
            src={RaspberryPistachioImage}
            alt="Raspberry and Pistachio Yule Log"
          />
        </div>

        {/* Content Section */}
        <div className={styles.RaspberryPistachioInfo}>
          <header>
            <h1>
              Raspberry and Pistachio Yule Log: A Festive Fusion of Flavors
            </h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Raspberry and pistachio log</strong> is an elegant and
              delicious dessert that combines the sweet-tart flavor of
              raspberries with the nutty richness of pistachios. This beautiful
              Yule log, perfect for holiday celebrations, offers a fresh twist
              on the traditional chocolate version. Its light, fluffy sponge
              cake, vibrant raspberry filling, and crunchy pistachio coating
              make it a show-stopping dessert for Christmas or any festive
              occasion. Let’s explore how to create this stunning dessert that
              will surely impress your guests!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Sponge Cake:</strong>
            </p>
            <ul>
              <li>4 large eggs</li>
              <li>100g granulated sugar (about 1/2 cup)</li>
              <li>80g all-purpose flour (about 2/3 cup)</li>
              <li>20g cornstarch (about 2 tbsp)</li>
              <li>1/2 tsp baking powder</li>
              <li>1 tsp vanilla extract</li>
              <li>A pinch of salt</li>
            </ul>
            <p>
              <strong>For the Raspberry Filling:</strong>
            </p>
            <ul>
              <li>250g fresh raspberries (about 2 cups)</li>
              <li>50g powdered sugar (about 1/4 cup)</li>
              <li>1 tsp lemon juice</li>
              <li>1/2 cup heavy cream</li>
              <li>2 tbsp mascarpone cheese (optional, for extra creaminess)</li>
            </ul>
            <p>
              <strong>For the Pistachio Coating:</strong>
            </p>
            <ul>
              <li>100g shelled pistachios, finely chopped</li>
              <li>50g white chocolate, melted (for drizzling)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Sponge Cake</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Grease and line a 9×13-inch (23×33 cm) baking sheet with
                parchment paper.
              </li>
              <li>
                In a large bowl, beat the eggs and sugar with an electric mixer
                until pale, thick, and fluffy (about 5 minutes). This will help
                create a light sponge.
              </li>
              <li>
                Sift together the flour, cornstarch, baking powder, and salt.
                Gently fold the dry ingredients into the egg mixture using a
                spatula, being careful not to deflate the batter.
              </li>
              <li>Add the vanilla extract and stir gently until combined.</li>
              <li>
                Pour the batter onto the prepared baking sheet, spreading it out
                evenly with a spatula.
              </li>
              <li>
                Bake for 10–12 minutes, or until the sponge is golden and
                springs back when lightly touched.
              </li>
              <li>
                Once baked, remove the sponge from the oven and immediately turn
                it out onto a clean kitchen towel dusted with powdered sugar.
                Gently peel off the parchment paper.
              </li>
              <li>
                Roll the sponge tightly, starting from the short end, while it’s
                still warm. Allow it to cool completely, still wrapped in the
                towel.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Raspberry Filling</strong>
            </p>
            <ol>
              <li>
                In a small saucepan, heat the raspberries, powdered sugar, and
                lemon juice over low heat until the raspberries release their
                juice and break down into a thick compote. Stir occasionally,
                then set aside to cool.
              </li>
              <li>
                In a separate bowl, whip the heavy cream until stiff peaks form.
                If you prefer a creamier filling, fold in the mascarpone cheese.
              </li>
              <li>
                Once the raspberry compote has cooled, fold it gently into the
                whipped cream, creating a smooth, light filling.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble the Yule Log</strong>
            </p>
            <ol>
              <li>
                Carefully unroll the cooled sponge cake, ensuring it doesn’t
                crack.
              </li>
              <li>
                Spread the raspberry cream filling evenly over the sponge,
                leaving a small border around the edges.
              </li>
              <li>
                Re-roll the sponge tightly, starting from the short end, this
                time without the towel. Place the log seam-side down on a
                serving platter.
              </li>
            </ol>
            <p>
              <strong>Step 4: Coat the Log with Pistachios</strong>
            </p>
            <ol>
              <li>
                Gently press the chopped pistachios into the surface of the log,
                ensuring it is evenly covered on all sides.
              </li>
              <li>
                Drizzle the melted white chocolate over the top for a festive
                touch. You can also pipe extra filling in swirls or pipe
                additional decorations if desired.
              </li>
            </ol>
            <p>
              <strong>Step 5: Chill and Serve</strong>
            </p>
            <ol>
              <li>
                Refrigerate the completed Yule log for at least 1 hour to allow
                the flavors to meld and the filling to set.
              </li>
              <li>
                Before serving, dust the log with a light sprinkle of powdered
                sugar or a few extra raspberries for decoration.
              </li>
              <li>
                Slice and serve, enjoying the beautiful balance of flavors and
                textures!
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Make it ahead:</strong> This dessert can be made a day
                ahead. Simply wrap the assembled Yule log tightly in plastic
                wrap and store it in the fridge until ready to serve.
              </li>
              <li>
                <strong>Flavor variations:</strong> If you prefer, you can
                substitute the raspberries with strawberries or blackberries for
                a different twist, or swap out the pistachios for almonds or
                hazelnuts.
              </li>
              <li>
                <strong>Add some liqueur:</strong> For an adult touch, you can
                brush the sponge with a little raspberry liqueur or a splash of
                rum before rolling it up.
              </li>
              <li>
                <strong>Pistachio coating:</strong> Make sure the pistachios are
                finely chopped, so they stick to the log easily. You can also
                use whole pistachios for a chunkier texture.
              </li>
            </ul>

            <p>
              <strong>Raspberry and pistachio Yule log</strong> is a festive,
              flavorful dessert that will surely be the highlight of your
              holiday table. The delicate sponge, paired with the tangy
              raspberry filling and crunchy pistachio coating, creates a perfect
              balance of sweet and savory flavors. Whether for Christmas dinner
              or any special occasion, this Yule log is a treat that combines
              elegance with festive cheer.
            </p>
            <p>
              Try this recipe for your next holiday celebration, and enjoy the
              rich flavors of raspberry and pistachio in every bite!.
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
                href="/light-chocolate-mousse"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Light Chocolate Mousse: A Decadent Yet Airy Dessert
                </p>
              </a>

              <a
                href="/alsatian-christmas-stollen"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Alsatian Christmas Stollen: A Traditional Holiday Delight
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
