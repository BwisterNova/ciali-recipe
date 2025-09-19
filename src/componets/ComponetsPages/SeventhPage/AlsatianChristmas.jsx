import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./alsatianChristmas.module.css";
import AlsatianChristmasImage from "./Images/AlsatianChristmasImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AlsatianChristmas() {
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
    <div className={styles.AlsatianChristmasContainer}>
      <div className={styles.AlsatianChristmasContents}>
        <div>
          <img src={AlsatianChristmasImage} alt="Alsatian Christmas Stollen" />
        </div>

        {/* Content Section */}
        <div className={styles.AlsatianChristmasInfo}>
          <header>
            <h1>Alsatian Christmas Stollen: A Traditional Holiday Delight</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Alsatian Christmas Stollen</strong>is a festive, yeasted
              bread that has become a beloved holiday tradition in the Alsace
              region of France. This sweet, spiced bread is typically filled
              with dried fruits, nuts, and marzipan, and is often dusted with
              powdered sugar to give it a snow-like finish. Inspired by the
              traditional German Stollen, the Alsatian version adds a unique
              touch with its rich, buttery texture and aromatic flavors, making
              it the perfect centerpiece for your holiday table. Let’s dive into
              how to make this delicious, festive treat!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Dough:</strong>
            </p>
            <ul>
              <li>500g all-purpose flour (about 4 cups)</li>
              <li>100g unsalted butter, softened (about 1/2 cup)</li>
              <li>100g sugar (about 1/2 cup)</li>
              <li>1 tsp active dry yeast</li>
              <li>1/2 tsp salt</li>
              <li>1/2 tsp ground cinnamon</li>
              <li>1/4 tsp ground nutmeg</li>
              <li>1/2 cup milk (about 120ml)</li>
              <li>2 large eggs</li>
              <li>100g marzipan, chopped into small pieces</li>
              <li>
                200g mixed dried fruits (raisins, currants, and dried apricots
                are typical)
              </li>
              <li>100g chopped nuts (walnuts, almonds, or hazelnuts)</li>
              <li>Zest of 1 lemon</li>
              <li>1 tsp vanilla extract</li>
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
              <strong>For the Glaze and Topping:</strong>
            </p>
            <ul>
              <li>2 tbsp unsalted butter, melted</li>
              <li>2 tbsp rum or water (optional)</li>
              <li>Powdered sugar for dusting</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Dough</strong>
            </p>
            <ol>
              <li>
                In a large mixing bowl, combine the flour, sugar, salt,
                cinnamon, and nutmeg.
              </li>
              <li>
                In a small saucepan, warm the milk until it’s just lukewarm (not
                hot). Sprinkle the yeast into the warm milk, stir, and let it
                sit for about 5 minutes until it becomes foamy.
              </li>
              <li>
                Add the yeast mixture, eggs, and softened butter to the dry
                ingredients. Mix until the dough starts to come together.
              </li>
              <li>
                Knead the dough on a floured surface for about 10 minutes until
                it’s smooth and elastic. You can also use a stand mixer with a
                dough hook attachment.
              </li>
              <li>
                Add the lemon zest, vanilla extract, dried fruits, chopped nuts,
                and marzipan pieces to the dough. Knead until everything is well
                incorporated.
              </li>
            </ol>
            <p>
              <strong>Step 2: Let the Dough Rise</strong>
            </p>
            <ol>
              <li>
                Place the dough in a lightly greased bowl, cover with a clean
                kitchen towel or plastic wrap, and let it rise in a warm place
                for about 1–1.5 hours, or until it has doubled in size.
              </li>
            </ol>
            <p>
              <strong>Step 3: Shape the Stollen</strong>
            </p>
            <ol>
              <li>
                Once the dough has risen, punch it down to release any air
                bubbles.
              </li>
              <li>
                On a lightly floured surface, roll out the dough into an oval
                shape, about 1 inch thick
              </li>
              <li>
                Fold one side of the dough over to create a half-moon shape,
                leaving one side exposed to create the traditional “Stollen”
                look.
              </li>
              <li>
                Place the shaped dough onto a baking sheet lined with parchment
                paper and let it rise again for about 30–45 minutes.
              </li>
            </ol>
            <p>
              <strong>Step 4: Bake the Stollen</strong>
            </p>
            <ol>
              <li>Preheat your oven to 180°C (350°F).</li>
              <li>
                Bake the Stollen for 35–40 minutes, or until it’s golden brown
                on top and sounds hollow when tapped on the bottom.
              </li>
              <li>
                If the Stollen starts to brown too quickly, cover it loosely
                with aluminum foil.
              </li>
            </ol>
            <p>
              <strong>Step 5: Glaze and Finish</strong>
            </p>
            <ol>
              <li>
                While the Stollen is still warm, brush it with the melted butter
                and rum (or water) for a shiny, flavorful finish.
              </li>
              <li>
                Generously dust the Stollen with powdered sugar to give it a
                snowy appearance.
              </li>
              <li>
                Let the Stollen cool completely on a wire rack before slicing.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Marzipan:</strong> Marzipan is a key element of Alsatian
                Stollen, adding both flavor and texture. If you can’t find it,
                you can substitute with almond paste, but the taste might be
                slightly different.
              </li>
              <li>
                <strong>Dried fruits:</strong> Use a mixture of dried fruits for
                varied texture and flavor. Raisins, currants, dried apricots,
                and dried cranberries are all excellent choices.
              </li>
              <li>
                <strong>Storage:</strong> The Stollen improves in flavor after a
                day or two, as the spices and fruits have time to meld. Wrap it
                tightly in plastic wrap and store it in a cool, dry place for up
                to a week. You can also freeze it for up to 3 months.
              </li>
            </ul>

            <p>
              <strong>Alsatian Christmas Stollen</strong> is more than just a
              cake; it’s a holiday tradition that brings warmth and joy to your
              home. Its sweet, buttery crumb, combined with aromatic spices,
              dried fruits, and marzipan, makes it a perfect treat for the
              festive season. Whether served as a dessert after a holiday meal
              or enjoyed with a cup of tea, this Stollen will fill your home
              with the magic of Christmas.
            </p>
            <p>
              Give this classic Alsatian recipe a try and treat your friends and
              family to the taste of the holidays!
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
                href="/raspberry-and-pistachio-yule-log"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Raspberry and Pistachio Yule Log: A Festive Fusion of Flavors
                </p>
              </a>

              <a
                href="/soft-pumpkin-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Soft Pumpkin Cake: A Perfect Fall Treat
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
