import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./christmasCake.module.css";
import ChristmasCakeImage from "./Images/ChristmasCakeImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ChristmasCake() {
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
    <div className={styles.ChristmasCakeContainer}>
      <div className={styles.ChristmasCakeContents}>
        <div>
          <img
            src={ChristmasCakeImage}
            alt="Christmas Cake with Pear, Speculoos, and Salted Butter Caramel"
          />
        </div>

        {/* Content Section */}
        <div className={styles.ChristmasCakeInfo}>
          <header>
            <h1>
              Christmas Cake with Pear, Speculoos, and Salted Butter Caramel
            </h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Christmas is the perfect time to indulge in festive desserts, and
              this{" "}
              <strong>
                Christmas cake with pear, speculoos, and salted butter caramel
              </strong>{" "}
              is a true holiday showstopper. Combining the warm, spiced flavor
              of speculoos cookies with juicy pears and a decadent salted butter
              caramel sauce, this cake is a deliciously unique twist on
              traditional Christmas cakes. It’s rich, aromatic, and guaranteed
              to impress your guests at any holiday celebration.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Cake</strong>
            </p>
            <ul>
              <li>2 ripe pears, peeled and diced</li>
              <li>150g speculoos cookies, crushed</li>
              <li>200g butter, softened</li>
              <li>150g brown sugar</li>
              <li>2 large eggs</li>
              <li>200g all-purpose flour</li>
              <li>1 tsp baking powder</li>
              <li>1 tsp ground cinnamon</li>
              <li>½ tsp ground ginger</li>
              <li>¼ tsp ground cloves</li>
              <li>½ tsp vanilla extract</li>
              <li>A pinch of salt</li>
            </ul>
            <p>
              <strong>For the Salted Butter Caramel</strong>
            </p>
            <ul>
              <li>100g butter</li>
              <li>200g brown sugar</li>
              <li>100ml heavy cream</li>
              <li>1 tsp sea salt (or more to taste)</li>
              <li>1 tsp vanilla extract</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Pears</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F). Grease and line a 22cm
                (9-inch) round cake pan.
              </li>
              <li>
                Peel and dice the pears. Toss them in a small amount of flour
                (about 1 tbsp) to prevent them from sinking to the bottom of the
                cake during baking. Set aside.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Cake Batter</strong>
            </p>
            <ol>
              <li>
                In a large mixing bowl, cream together the softened butter and
                brown sugar until light and fluffy (about 3 minutes).
              </li>
              <li>
                Add the eggs one at a time, beating well after each addition.
                Stir in the vanilla extract.
              </li>
              <li>
                In a separate bowl, whisk together the flour, baking powder,
                spices (cinnamon, ginger, and cloves), and salt. Gradually add
                the dry ingredients to the wet ingredients, mixing until just
                combined.
              </li>
              <li>
                Gently fold in the crushed speculoos cookies and diced pears,
                ensuring they are evenly distributed throughout the batter.
              </li>
            </ol>
            <p>
              <strong>Step 3: Bake the Cake</strong>
            </p>
            <ol>
              <li>
                Pour the batter into the prepared cake pan and smooth the top.
              </li>
              <li>
                Bake in the preheated oven for 40–45 minutes or until a skewer
                inserted into the center of the cake comes out clean. Let the
                cake cool in the pan for 10 minutes, then transfer to a wire
                rack to cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 4: Prepare the Salted Butter Caramel</strong>
            </p>
            <ol>
              <li>
                In a medium saucepan, melt the butter over medium heat. Stir in
                the brown sugar and cook for 2–3 minutes until the sugar begins
                to dissolve.
              </li>
              <li>
                Slowly add the heavy cream while stirring constantly. Bring the
                mixture to a simmer and cook for 5 minutes, allowing it to
                thicken.
              </li>
              <li>
                Remove from the heat and stir in the sea salt and vanilla
                extract. Let the caramel cool slightly before using.
              </li>
            </ol>
            <p>
              <strong>Step 5: Assemble the Cake</strong>
            </p>
            <ol>
              <li>
                Once the cake has cooled completely, drizzle the salted butter
                caramel over the top.
              </li>
              <li>
                Optionally, garnish with extra crushed speculoos cookies, sliced
                pears, or a light dusting of cinnamon for an extra festive
                touch.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Perfect pears:</strong> Choose ripe but firm pears (such
                as Bartlett or Anjou) to ensure they hold their shape in the
                cake.
              </li>
              <li>
                <strong>Make it ahead:</strong> The cake can be baked a day in
                advance and stored in an airtight container. Just drizzle the
                caramel just before servin
              </li>

              <li>
                <strong>Flavor boost:</strong> Add a splash of dark rum or
                brandy to the caramel sauce for an extra depth of flavor.
              </li>
            </ul>

            <h3>Serving Suggestions</h3>

            <p>
              This Christmas cake is perfect as a standalone dessert or served
              with a scoop of vanilla ice cream or a dollop of whipped cream.
              Pair it with a warm cup of spiced cider or mulled wine for an
              extra festive treat!.
            </p>
            <p>
              This{" "}
              <strong>
                Christmas cake with pear, speculoos, and salted butter caramel
              </strong>{" "}
              is a truly indulgent holiday dessert. With its unique blend of
              spices, rich caramel sauce, and delightful textures from the pears
              and speculoos, it’s sure to become a favorite at your festive
              gatherings. Give it a try and spread some holiday cheer with this
              decadent treat!
            </p>
            <p>Merry Christmas and happy baking</p>

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
                href="/easy-mascarpone-and-raspberry-christmas-yule-log"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Easy Mascarpone and Raspberry Christmas Yule Log
                </p>
              </a>

              <a
                href="/pork-stir-fry-in-the-cookeo
"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Pork Stir-Fry in the Cookeo
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
