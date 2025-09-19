import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./cremeCaramel.module.css";
import cremeImage from "./Images/cremeImage.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CremeCaramel() {
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
    <div className={styles.cremeCaramelContainer}>
      <div className={styles.cremeCaramelContents}>
        <div>
          <img
            src={cremeImage}
            alt="Crème Caramel: A Classic Dessert with Milk and Eggs"
          />
        </div>

        {/* Content Section */}
        <div className={styles.cremeCaramelInfo}>
          <header>
            <h1>Crème Caramel: A Classic Dessert with Milk and Eggs</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Crème caramel,</strong> also known as caramel custard, is
              a timeless dessert that combines the creamy richness of milk and
              eggs with the deep sweetness of caramel. This French-inspired
              treat is known for its silky texture and the dramatic, glossy
              layer of caramel sauce that adorns each serving. With just a
              handful of simple ingredients, crème caramel is a perfect dessert
              to impress guests or to enjoy as a luxurious treat at home.
            </p>

            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p style={{ marginTop: "-15px", fontWeight: "bold" }}>
              For the Caramel:
            </p>
            <ul>
              <li>100g granulated sugar (about 1/2 cup)</li>
              <li>2 tbsp water</li>
            </ul>

            <p style={{ fontWeight: "bold" }}>For the Custard:</p>
            <ul>
              <li>500ml whole milk (about 2 cups)</li>
              <li>4 large eggs</li>
              <li>3 large eggs</li>
              <li>100g granulated sugar (about 1/2 cup)</li>
              <li>1 tsp vanilla extract</li>
            </ul>

            <h3>Instructions:</h3>
            <strong>Step 1: Prepare the Caramel</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                In a small saucepan, combine the sugar and water. Heat over
                medium heat, stirring gently until the sugar dissolves.
              </li>
              <li>
                Once the sugar has dissolved, stop stirring and let the mixture
                cook until it turns a golden amber color. Be careful not to let
                it burn.
              </li>
              <li>
                Quickly pour the caramel into the bottoms of individual ramekins
                or a large baking dish, tilting them to coat the bottom evenly.
                Set aside to cool and harden.
              </li>
            </ol>

            <strong>Step 2: Prepare the Custard</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>Preheat your oven to 160°C (320°F).</li>
              <li>
                In a medium saucepan, heat the milk over low heat until it is
                warm but not boiling. Remove from heat.
              </li>
              <li>
                In a separate bowl, whisk together the eggs, sugar, and vanilla
                extract until well combined.
              </li>
              <li>
                Gradually pour the warm milk into the egg mixture, whisking
                constantly to prevent the eggs from curdling.
              </li>
            </ol>

            <strong>Step 3: Assemble and Bake</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Strain the custard mixture through a fine-mesh sieve into the
                prepared ramekins or baking dish over the hardened caramel. This
                ensures a smooth texture.
              </li>
              <li>
                Place the ramekins in a large baking dish. Pour hot water into
                the baking dish, filling it halfway up the sides of the ramekins
                to create a water bath.
              </li>
              <li>
                Bake for 40-50 minutes, or until the custard is set but still
                slightly jiggly in the center.
              </li>
            </ol>

            <strong>Step 4: Cool and Serve</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Remove the ramekins from the water bath and let them cool to
                room temperature. Cover and refrigerate for at least 2 hours, or
                overnight for best results.
              </li>
              <li>
                To serve, run a knife around the edge of each ramekin, invert
                onto a plate, and gently tap to release the crème caramel.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Caramel timing:</strong> Watch the caramel closely as it
                cooks. The color can change from golden to burnt quickly.
              </li>
              <li>
                <strong>Smooth custard:</strong> Straining the custard mixture
                is key to achieving a silky, lump-free texture
              </li>
              <li>
                <strong>Water bath:</strong>The water bath ensures gentle, even
                cooking, preventing the custard from cracking or becoming
                rubbery.
              </li>
              <li>
                <strong>Flavor variations:</strong> For a twist, infuse the milk
                with cinnamon sticks, citrus zest, or a splash of coffee before
                mixing it with the eggs.
              </li>
            </ul>

            <p>
              <strong>Crème caramel</strong> is a classic dessert that never
              fails to delight with its elegant presentation and creamy texture.
              Its simple ingredients—milk, eggs, sugar, and vanilla—come
              together to create a luxurious dish that feels both indulgent and
              comforting.
            </p>

            <p>
              Whether you’re making it for a special occasion or simply treating
              yourself, this recipe is a foolproof way to bring a touch of
              sophistication to your table. Serve it chilled and watch as your
              guests savor every bite of this timeless delicacy!
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
                href="/clementine-tart"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle /> Clementine Tart: A Citrusy Delight
                </p>
              </a>
              <a
                href="/frozen-raspberry-coulis"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle /> Frozen Raspberry Coulis: A Versatile
                  and Refreshing Delight
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
