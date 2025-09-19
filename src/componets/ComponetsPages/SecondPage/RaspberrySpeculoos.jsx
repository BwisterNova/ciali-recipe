import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./raspberrySpeculoos.module.css";
import RaspberrySpeculoosImage from "./Images/RaspberrySpeculoosImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function RaspberrySpeculoos() {
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
    <div className={styles.RaspberrySpeculoosContainer}>
      <div className={styles.RaspberrySpeculoosContents}>
        <div>
          <img
            src={RaspberrySpeculoosImage}
            alt="Raspberry and Speculoos Verrines"
          />
        </div>

        {/* Content Section */}
        <div className={styles.RaspberrySpeculoosInfo}>
          <header>
            <h1>Raspberry and Speculoos Verrines: A Sweet, Crunchy Delight</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Raspberry and Speculoos verrines</strong> are a perfect
              blend of smooth, creamy layers and a crunchy, spiced base. These
              individual desserts are served in clear glasses, showcasing the
              vibrant colors and textures that make each bite a treat for both
              the eyes and the palate. The tartness of fresh raspberries pairs
              beautifully with the warm, spiced flavor of Speculoos cookies,
              creating a satisfying contrast in every spoonful. Perfect for
              dinner parties, holiday gatherings, or just as a sweet treat,
              these verrines are sure to impress!
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Speculoos Base:</strong>
            </p>
            <ul>
              <li>200g Speculoos cookies (or Biscoff cookies)</li>
              <li>50g unsalted butter, melted (about 1/4 cup)</li>
            </ul>
            <p>
              <strong>For the Raspberry Layer:</strong>
            </p>
            <ul>
              <li>250g fresh raspberries (about 2 cups)</li>
              <li>
                2 tbsp powdered sugar (or more, depending on sweetness
                preference)
              </li>
              <li>1 tsp lemon juice</li>
            </ul>
            <p>
              <strong>For the Creamy Layer:</strong>
            </p>
            <ul>
              <li>250g mascarpone cheese (about 1 cup)</li>
              <li>200ml heavy cream (about 3/4 cup)</li>
              <li>3 tbsp powdered sugar</li>
              <li>1 tsp vanilla extract</li>
            </ul>
            <p>
              <strong>For Garnish (Optional):</strong>
            </p>
            <ul>
              <li>Extra fresh raspberries</li>
              <li>Crumbled Speculoos cookies</li>
              <li>Fresh mint leaves</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Speculoos Base</strong>
            </p>
            <ol>
              <li>
                Begin by crushing the Speculoos cookies into fine crumbs. You
                can do this by placing the cookies in a ziplock bag and using a
                rolling pin or by pulsing them in a food processor.
              </li>
              <li>
                In a bowl, combine the crushed Speculoos with the melted butter
                and mix until the crumbs are evenly coated.
              </li>
              <li>
                Divide the cookie mixture among the bottom of your serving
                glasses or verrines, pressing gently to create a firm, even
                base.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Raspberry Layer</strong>
            </p>
            <ol>
              <li>
                In a small bowl, gently mash the raspberries with a fork or
                potato masher, leaving some small chunks for texture.
              </li>
              <li>
                Stir in the powdered sugar and lemon juice, adjusting the
                sweetness to your liking. If you prefer a smoother raspberry
                layer, you can blend the mixture in a food processor.
              </li>
              <li>
                Spoon the raspberry mixture on top of the Speculoos base in your
                verrines. Set aside while you prepare the creamy layer.
              </li>
            </ol>
            <p>
              <strong>Step 3: Prepare the Creamy Layer</strong>
            </p>
            <ol>
              <li>
                In a large mixing bowl, whisk together the mascarpone cheese,
                heavy cream, powdered sugar, and vanilla extract.
              </li>
              <li>
                Whisk until the mixture becomes smooth and slightly thickened,
                but be careful not to overwhip. The texture should be creamy,
                not stiff.
              </li>
              <li>
                Spoon or pipe the mascarpone mixture on top of the raspberry
                layer in your verrines, smoothing it out with the back of a
                spoon.
              </li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Verrines</strong>
            </p>
            <ol>
              <li>
                Once all the layers are in place, refrigerate the verrines for
                at least 2 hours, allowing the flavors to meld and the dessert
                to firm up.
              </li>
              <li>
                Before serving, garnish with extra fresh raspberries, crumbled
                Speculoos cookies, and fresh mint leaves for a pop of color and
                added flavor.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Customize the layers:</strong> If you want to get
                creative, you can add additional layers like a lemon curd,
                whipped cream, or even a layer of fruit jelly to enhance the
                flavors.
              </li>
              <li>
                <strong>Cookie alternatives:</strong> If you can’t find
                Speculoos cookies, you can substitute them with gingerbread
                cookies or any spiced biscuit that has a similar crunch and
                flavor.
              </li>
              <li>
                <strong>Make it ahead:</strong> These verrines can be made the
                day before and stored in the fridge, allowing you to prepare
                them in advance for a hassle-free dessert at your next dinner
                party or gathering.
              </li>
              <li>
                <strong>Sweetness:</strong> The sweetness of the raspberry layer
                can be adjusted based on the tartness of the raspberries and
                your personal preference. If you want a tangier contrast to the
                creamy layer, use less sugar.
              </li>
            </ul>

            <p>
              <strong>Raspberry and Speculoos verrines</strong> offer a
              delightful combination of textures and flavors that are as
              visually appealing as they are delicious. The crunchy, spiced
              cookie base, the tangy raspberry layer, and the smooth mascarpone
              cream come together to create a perfectly balanced dessert.
              Whether you’re serving them at a holiday party or enjoying them as
              a special treat, these verrines are sure to become a favorite in
              your dessert repertoire.
            </p>
            <p>
              With minimal preparation and a beautiful presentation, you’ll
              impress your guests and satisfy your sweet cravings all at once!
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
                href="/smoked-salmon-millefeuille-with-lime-sorbet"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Smoked Salmon Millefeuille with Lime Sorbet
                </p>
              </a>

              <a
                href="/light-chocolate-mousse"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Light Chocolate Mousse: A Decadent Yet Airy Dessert
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
