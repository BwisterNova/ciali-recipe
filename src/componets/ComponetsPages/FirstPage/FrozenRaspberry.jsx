import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./frozenRaspberry.module.css";
import raspberryImage from "./Images/Frozen-Raspberry-Coulis.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function FrozenRaspberry() {
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
    <div className={styles.FrozenRaspberryContainer}>
      <div className={styles.FrozenRaspberryContents}>
        <div>
          <img
            src={raspberryImage}
            alt="Frozen Raspberry Coulis: A Versatile and Refreshing Delight"
          />
        </div>

        {/* Content Section */}
        <div className={styles.FrozenRaspberryInfo}>
          <header>
            <h1>Frozen Raspberry Coulis: A Versatile and Refreshing Delight</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Frozen raspberry coulis</strong>is a sweet and tangy sauce
              made from raspberries that can elevate any dessert. Whether
              drizzled over ice cream, cheesecake, pancakes, or used to
              accompany a slice of chocolate cake, this coulis adds a burst of
              fruity freshness. The frozen aspect makes it convenient for
              storing and using as needed, allowing you to enjoy the vibrant
              flavor of raspberries year-round. Best of all, it’s easy to
              prepare and requires just a few simple ingredients.
            </p>

            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <ul>
              <li>300g frozen raspberries (about 2 1/2 cups)</li>
              <li>100g granulated sugar (about 1/2 cup)</li>
              <li>1 tbsp lemon juice</li>
              <li>2 tbsp water (optional, for adjusting consistency)</li>
            </ul>

            <h3>Instructions:</h3>
            <strong>Step 1: Thaw the Raspberries</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Remove the frozen raspberries from the freezer and allow them to
                thaw slightly at room temperature for about 10-15 minutes. This
                will make them easier to blend and release their natural juices.
              </li>
            </ol>

            <strong>Step 2: Blend the Ingredients</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                In a blender or food processor, combine the raspberries, sugar,
                and lemon juice. Blend until smooth and well combined.
              </li>
              <li>
                Taste the coulis and adjust the sweetness by adding more sugar
                if desired. The lemon juice enhances the raspberry flavor,
                balancing the sweetness with a touch of acidity.
              </li>
            </ol>

            <strong>Step 3: Strain the Coulis</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                For a silky-smooth texture, pour the blended mixture through a
                fine-mesh sieve into a bowl, using a spatula or spoon to press
                the liquid through. Discard the seeds.
              </li>
              <li>
                If the coulis seems too thick, stir in a tablespoon or two of
                water until you achieve your desired consistency.
              </li>
            </ol>

            <strong>Step 4: Freeze the Coulis</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Pour the strained coulis into an airtight container or an ice
                cube tray for portioned servings.
              </li>
              <li>
                Freeze for up to 3 months. When ready to use, thaw the coulis in
                the refrigerator or at room temperature.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Fresh raspberries:</strong> If you prefer, you can use
                fresh raspberries instead of frozen. This works well during
                raspberry season and eliminates the need for thawing.
              </li>
              <li>
                <strong>Enhance the flavor:</strong> Add a splash of vanilla
                extract or a pinch of cinnamon for a unique twist.
              </li>
              <li>
                <strong>Sugar alternatives: </strong>To make the coulis
                healthier, replace granulated sugar with honey, maple syrup, or
                a sugar substitute. Adjust the quantity to your taste.
              </li>
              <li>
                <strong>Storage:</strong> Freeze the coulis in an ice cube tray
                to create small portions, making it easy to thaw only what you
                need.
              </li>
            </ul>

            <h3>Ways to Use Raspberry Coulis</h3>
            <ul>
              <li>
                <strong>Desserts:</strong> Drizzle over ice cream, panna cotta,
                cheesecake, or chocolate mousse
              </li>
              <li>
                <strong>Breakfast:</strong> Add it as a topping for pancakes,
                waffles, or yogurt.
              </li>
              <li>
                <strong>Beverages: </strong> Stir into cocktails, mocktails, or
                even sparkling water for a fruity flair.
              </li>
              <li>
                <strong>Decor:</strong> Use it to plate desserts by adding
                artistic swirls or dots for a professional presentation.
              </li>
            </ul>

            <p>
              <strong>Frozen raspberry coulis</strong> is a versatile kitchen
              staple that brings the vibrant flavor of raspberries to countless
              dishes. With its quick preparation and ability to be stored for
              months, it’s a practical solution for adding a touch of
              sophistication to your meals and desserts.
            </p>

            <p>
              Prepare a batch today and enjoy the convenience of having this
              fruity delight at your fingertips, ready to transform your
              everyday recipes into something extraordinary!
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
                href="/creme-caramel"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle /> Crème Caramel: A Classic Dessert with
                  Milk and Eggs
                </p>
              </a>
              <a
                href="/indian-chicken-with-tomato-and-rice"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Indian Chicken with Tomato and Rice
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
