import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./smokedSalmon.module.css";
import SmokedSalmonImage from "./Images/imageye___-_Smoked-Salmon-Millefeuille-with-Lime-Sorbet.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SmokedSalmon() {
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
    <div className={styles.SmokedSalmonContainer}>
      <div className={styles.SmokedSalmonContents}>
        <div>
          <img
            src={SmokedSalmonImage}
            alt="Smoked Salmon Millefeuille with Lime Sorbet"
          />
        </div>

        {/* Content Section */}
        <div className={styles.SmokedSalmonInfo}>
          <header>
            <h1>Smoked Salmon Millefeuille with Lime Sorbet</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Smoked salmon millefeuille with lime sorbet</strong> is an
              exquisite and refreshing starter that combines the rich, smoky
              flavor of salmon with the tangy freshness of lime. The
              millefeuille, traditionally a French pastry made of layers of thin
              pastry sheets, is here reinvented using layers of smoked salmon,
              cream cheese, and other delicate ingredients. The lime sorbet, a
              zesty and cooling addition, provides the perfect contrast to the
              savory layers. This dish is ideal for a sophisticated dinner party
              or as a special treat to start off a holiday meal.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Smoked Salmon Millefeuille:</strong>
            </p>
            <ul>
              <li>200g smoked salmon, thinly sliced</li>
              <li>100g cream cheese, softened</li>
              <li>2 tbsp sour cream or Greek yogurt</li>
              <li>1 tbsp fresh dill, finely chopped</li>
              <li>1 tsp lemon juice</li>
              <li>1 tbsp capers, drained and chopped (optional)</li>
              <li>Salt and pepper, to taste</li>
            </ul>
            <p>
              <strong>For the Lime Sorbet:</strong>
            </p>
            <ul>
              <li>200ml fresh lime juice (about 6-8 limes)</li>
              <li>100g granulated sugar (about 1/2 cup)</li>
              <li>200ml water (about 3/4 cup)</li>
              <li>Zest of 2 limes</li>
              <li>1 egg white (optional, for added texture)</li>
            </ul>
            <p>
              <strong>For Garnish</strong>
            </p>
            <ul>
              <li>Fresh dill sprigs</li>
              <li>Lime zest</li>
              <li>Thin slices of cucumber (optional)</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Lime Sorbet</strong>
            </p>
            <ol>
              <li>
                Start by making the lime sorbet. In a saucepan, combine the
                water, sugar, and lime zest. Heat gently, stirring occasionally,
                until the sugar has completely dissolved.
              </li>
              <li>
                Once the sugar syrup is ready, remove it from the heat and let
                it cool to room temperature
              </li>
              <li>
                Stir in the fresh lime juice. If you have an ice cream maker,
                pour the mixture into it and churn according to the
                manufacturer’s instructions until the sorbet reaches a smooth,
                frozen texture.
              </li>
              <li>
                If you don’t have an ice cream maker, pour the mixture into a
                shallow dish and freeze it. Every 30 minutes, use a fork to
                scrape the ice crystals, repeating this process until the sorbet
                is frozen and fluffy. If you want a smoother texture, you can
                whisk in a beaten egg white before freezing to create a creamier
                sorbet.
              </li>
              <li>
                Once done, set the sorbet aside in the freezer while you prepare
                the millefeuille.
              </li>
            </ol>
            <p>
              <strong>Step 2: Assemble the Smoked Salmon Millefeuille</strong>
            </p>
            <ol>
              <li>
                In a bowl, mix the cream cheese, sour cream (or Greek yogurt),
                chopped dill, lemon juice, capers (if using), salt, and pepper
                until smooth and well combined. This will be the creamy layer
                that holds the millefeuille together.
              </li>
              <li>
                Using a sharp knife, cut the smoked salmon slices into smaller
                rectangular pieces, roughly the size of the serving glasses or
                plates you’re using.
              </li>
              <li>
                On a serving plate, layer the smoked salmon, spreading a thin
                layer of the cream cheese mixture between each slice of salmon.
                Alternate the layers until you have a small tower of smoked
                salmon and cream cheese.
              </li>
              <li>
                Repeat this process for each serving if you’re creating
                individual portions or assemble one large millefeuille for
                sharing. The salmon should be stacked neatly, creating a “puff
                pastry” effect with the creamy filling in between.
              </li>
            </ol>
            <p>
              <strong>Step 3: Serve and Garnish</strong>
            </p>
            <ol>
              <li>
                Place a spoonful of lime sorbet beside the millefeuille, or, for
                a more elegant presentation, scoop the sorbet into small
                quenelles (oval shapes) using two spoons.
              </li>
              <li>
                Garnish the smoked salmon millefeuille with fresh dill sprigs,
                extra lime zest, and thin cucumber slices for a refreshing
                touch.
              </li>
              <li>
                Serve immediately, allowing your guests to enjoy the delightful
                contrast of flavors and textures.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Sorbet consistency:</strong>If you don’t have an ice
                cream maker, the key to a good sorbet is frequent stirring
                during the freezing process. This helps break up any ice
                crystals and keeps the sorbet smooth.
              </li>
              <li>
                <strong>Smoked salmon quality:</strong> The flavor of the smoked
                salmon will greatly impact the dish. Choose a high-quality
                smoked salmon that’s fresh and flavorful for the best result.
              </li>
              <li>
                <strong>Dill substitution:</strong> If you don’t have dill,
                fresh chives or tarragon can be used as alternatives to add a
                light, herbal flavor.
              </li>
              <li>
                <strong>Make-ahead:</strong> You can prepare both the smoked
                salmon millefeuille and lime sorbet in advance. The millefeuille
                can be assembled a few hours before serving, while the sorbet
                can be made the day before.
              </li>
            </ul>

            <p>
              <strong>Smoked salmon millefeuille with lime sorbet</strong> is a
              unique and sophisticated dish that will elevate any meal. The
              combination of smooth, creamy layers of smoked salmon with the
              refreshing and tangy lime sorbet offers a perfect balance of rich
              and zesty flavors. Whether for a special occasion or an elegant
              dinner party, this dish is sure to impress your guests with its
              complexity and elegance.
            </p>
            <p>
              With a little preparation, this dish becomes an easy yet luxurious
              starter, providing a fresh and flavorful way to begin a festive
              meal or a romantic evening. Enjoy the contrast of textures, from
              the velvety cream cheese and the smoky salmon to the bright,
              cooling sorbet!
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/lunch"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/lunch")} />
                  Lunch
                </p>
              </a>

              <a
                href="/chef-annas-chicken-marbella"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Chef Anna’s Chicken Marbella
                </p>
              </a>

              <a
                href="/raspberry-and-speculoos-verrines"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Raspberry and Speculoos Verrines: A Sweet, Crunchy Delight
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
