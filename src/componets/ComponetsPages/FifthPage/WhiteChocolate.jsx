import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./whiteChocolate.module.css";
import WhiteChocolateImage from "./Images/imageye___-_White-Chocolate-Raspberry-Layer-Cake.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function WhiteChocolate() {
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
    <div className={styles.WhiteChocolateContainer}>
      <div className={styles.WhiteChocolateContents}>
        <div>
          <img
            src={WhiteChocolateImage}
            alt="White Chocolate Raspberry Layer Cake"
          />
        </div>

        {/* Content Section */}
        <div className={styles.WhiteChocolateInfo}>
          <header>
            <h1>White Chocolate Raspberry Layer Cake</h1>
            <p>December 8, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Indulge in the elegance and decadence of a{" "}
              <strong>white chocolate raspberry layer cake.</strong> This
              dessert combines fluffy vanilla cake layers with a creamy white
              chocolate frosting and a vibrant raspberry filling. Perfect for
              celebrations, birthdays, or when you want to impress your guests,
              this cake strikes the perfect balance between sweetness and
              tartness. Its stunning presentation and irresistible flavors make
              it a true masterpiece for any occasion.
            </p>

            {/* Additional Content */}
            <h3>Ingredients </h3>
            <p>
              <strong>For the Cake Layers</strong>
            </p>
            <ul>
              <li>250g all-purpose flour (about 2 cups)</li>
              <li>2 tsp baking powder</li>
              <li>1/4 tsp salt</li>
              <li>200g granulated sugar (about 1 cup)</li>
              <li>120g unsalted butter, softened (about 1/2 cup)</li>
              <li>2 large eggs</li>
              <li>1 tsp vanilla extract</li>
              <li>200ml whole milk (about 3/4 cup)</li>
            </ul>
            <p>
              <strong>For the Raspberry Filling:</strong>
            </p>
            <ul>
              <li>250g fresh or frozen raspberries (about 2 cups)</li>
              <li>50g granulated sugar (about 1/4 cup)</li>
              <li>1 tbsp lemon juice</li>
              <li>1 tsp cornstarch mixed with 2 tbsp water</li>
            </ul>
            <p>
              <strong>For the White Chocolate Frosting:</strong>
            </p>
            <ul>
              <li>
                200g white chocolate, melted and cooled slightly (about 7 oz)
              </li>
              <li>250g cream cheese, softened (about 1 cup)</li>
              <li>100g unsalted butter, softened (about 1/2 cup)</li>
              <li>200g powdered sugar (about 1 1/2 cups)</li>
              <li>1 tsp vanilla extract</li>
            </ul>
            <p>
              <strong>For Decoration(Optional):</strong>
            </p>
            <ul>
              <li>Fresh raspberries</li>
              <li>White chocolate shavings</li>
              <li>Mint leaves</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Bake the Cake layers</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F). Grease and line two 20cm
                (8-inch) round cake pans with parchment paper.
              </li>
              <li>
                In a bowl, whisk together the flour, baking powder, and salt.
              </li>
              <li>
                In a separate bowl, cream the butter and sugar until light and
                fluffy. Add the eggs one at a time, followed by the vanilla
                extract.
              </li>
              <li>
                Gradually add the dry ingredients to the wet mixture,
                alternating with the milk. Mix until just combined.
              </li>
              <li>
                Divide the batter evenly between the prepared pans and bake for
                25-30 minutes, or until a toothpick inserted into the center
                comes out clean. Let the cakes cool in the pans for 10 minutes,
                then transfer to a wire rack to cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Raspberry Filling</strong>
            </p>
            <ol>
              <li>
                In a saucepan, combine the raspberries, sugar, and lemon juice.
                Cook over medium heat until the raspberries break down and
                release their juices.
              </li>
              <li>
                Stir in the cornstarch mixture and cook until the filling
                thickens. Remove from heat and let cool completely.
              </li>
            </ol>
            <p>
              <strong>Step 3: Make the White Chocolate Frosting</strong>
            </p>
            <ol>
              <li>
                Beat the cream cheese and butter together until smooth and
                creamy.
              </li>
              <li>Add the melted white chocolate and mix well.</li>
              <li>
                Gradually beat in the powdered sugar and vanilla extract until
                smooth and fluffy.
              </li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Cake</strong>
            </p>
            <ol>
              <li>
                Place one cake layer on a serving plate or cake stand. Spread a
                thin layer of frosting over the top, followed by an even layer
                of raspberry filling.
              </li>
              <li>
                Place the second cake layer on top and frost the entire cake
                with the white chocolate frosting.
              </li>
              <li>
                Use a spatula to smooth the frosting or create decorative
                swirls.
              </li>
            </ol>
            <p>
              <strong>Step 5: Decorate and Serve</strong>
            </p>
            <ol>
              <li>
                Garnish the cake with fresh raspberries, white chocolate
                shavings, and mint leaves for a polished look.
              </li>
              <li>
                Chill the cake for at least 1 hour before serving to allow the
                flavors to meld.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Cake Layers:</strong> Ensure the cake layers are
                completely cool before assembling to prevent the frosting from
                melting.
              </li>
              <li>
                <strong>White chocolate:</strong> Use high-quality white
                chocolate for the best flavor in your frosting.
              </li>
              <li>
                <strong>Raspberry filling:</strong> Strain the filling to remove
                seeds if you prefer a smoother texture.
              </li>
              <li>
                <strong>Make ahead:</strong>You can prepare the cake layers and
                filling a day in advance. Assemble and frost the cake on the day
                of serving.
              </li>
            </ul>

            <p>
              A <strong>white chocolate raspberry layer cake</strong> is a
              dessert that dazzles both the eyes and the taste buds. Its moist
              layers, creamy frosting, and tangy raspberry filling create a
              perfect harmony of flavors and textures.
            </p>

            <p>
              Whether it’s a wedding, anniversary, or casual get-together, this
              cake is guaranteed to be the star of the show. Bake it, savor it,
              and watch as everyone falls in love with this exquisite creation!
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
                href="/easy-and-quick-tartiflette-recipe"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Easy and Quick Tartiflette Recipe
                </p>
              </a>

              <a
                href="/traditional-vegetable-couscous"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Traditional Vegetable Couscous: A Heartwarming Moroccan
                  Classic
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
