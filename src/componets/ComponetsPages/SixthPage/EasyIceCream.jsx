import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./easyIceCream.module.css";
import EasyIceCreamImage from "./Images/imageye___-_Easy-Ice-Cream-Log-for-Christmas.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function EasyIceCream() {
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
    <div className={styles.EasyIceCreamContainer}>
      <div className={styles.EasyIceCreamContents}>
        <div>
          <img
            src={EasyIceCreamImage}
            alt="Easy Ice Cream Log for Christmas: A Delightful Frozen Treat"
          />
        </div>

        {/* Content Section */}
        <div className={styles.EasyIceCreamInfo}>
          <header>
            <h1>Easy Ice Cream Log for Christmas: A Delightful Frozen Treat</h1>
            <p>December 2, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Looking for a festive dessert that’s as simple to prepare as it is
              delicious? This <strong>easy ice cream log</strong> is the perfect
              solution for your Christmas celebrations. With its creamy texture,
              customizable flavors, and stunning presentation, it’s a
              crowd-pleaser that requires minimal effort. Whether you’re hosting
              a holiday dinner or contributing to a family gathering, this
              frozen treat is guaranteed to impress.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Ice Cream Log Base:</strong>
            </p>
            <ul>
              <li>
                1 liter (4 cups) vanilla ice cream (or your favorite flavor)
              </li>
              <li>500ml (2 cups) chocolate or fruit-flavored ice cream</li>
              <li>
                200g biscuits (such as ladyfingers, shortbread, or speculoos)
              </li>
              <li>100g melted chocolate or fruit coulis for binding</li>
            </ul>
            <p>
              <strong>For the Decoraton:</strong>
            </p>
            <ul>
              <li>Whipped cream or meringue</li>
              <li>Chocolate shavings or cocoa powder</li>
              <li>Fresh berries or edible glitter</li>
              <li>Christmas-themed sprinkles</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Ice Cream</strong>
            </p>
            <ol>
              <li>
                Allow the ice cream to soften at room temperature for 10-15
                minutes, just enough to make it spreadable but not melted.
              </li>

              <li>
                Line a rectangular loaf pan with plastic wrap, leaving extra
                over the edges for easy removal.
              </li>
            </ol>
            <p>
              <strong>Step 2: Assemble the Ice Cream Log</strong>
            </p>
            <ol>
              <li>
                Spread a layer of vanilla ice cream evenly in the bottom of the
                pan. Use a spatula to smooth it out.
              </li>
              <li>
                Add a layer of biscuits on top of the vanilla ice cream,
                pressing gently. Drizzle with melted chocolate or fruit coulis
                to hold the biscuits together.
              </li>
              <li>
                Spread a layer of chocolate or fruit-flavored ice cream over the
                biscuits. Repeat the layers if your pan allows, finishing with a
                layer of ice cream.
              </li>
              <li>
                Cover with plastic wrap and freeze for at least 4-6 hours or
                overnight until firm.
              </li>
            </ol>
            <p>
              <strong>Step 3: Decorate the Ice Cream Log</strong>
            </p>
            <ol>
              <li>
                Remove the ice cream log from the pan by lifting it out with the
                plastic wrap. Flip it onto a serving plate and peel off the
                wrap.
              </li>
              <li>
                Decorate with whipped cream, meringue, or a dusting of cocoa
                powder. Add chocolate shavings, berries, or festive sprinkles
                for a holiday touch.
              </li>
            </ol>
            <p>
              <strong>Step 4: Serve</strong>
            </p>
            <ol>
              <li>
                Let the ice cream log sit at room temperature for 5-10 minutes
                before slicing to make it easier to cut. Serve slices with extra
                toppings like caramel sauce, berry coulis, or chocolate drizzle
                for an extra indulgence.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Flavor combinations:</strong> Get creative with your
                layers! Try pistachio and raspberry, coffee and caramel, or
                matcha and vanilla for unique pairings.
              </li>
              <li>
                <strong>Biscuits:</strong> Use gluten-free biscuits for a
                gluten-free version, or swap for crushed cookies for a crunchier
                texture.
              </li>
              <li>
                <strong>Make ahead:</strong> Prepare this dessert a day or two
                in advance to save time on Christmas Day.
              </li>
              <li>
                <strong>Personalized portions:</strong> For individual servings,
                assemble the ice cream log in silicone muffin molds or ramekins.
              </li>
            </ul>
            <p>
              This <strong>easy ice cream log for Christmas</strong>combines
              elegance and ease, making it the ultimate holiday dessert. Its
              creamy layers and festive decorations will delight both kids and
              adults, ensuring your celebration ends on a sweet note.
            </p>

            <p>
              Best of all, the recipe is endlessly adaptable—customize the
              flavors and decorations to suit your preferences or match your
              holiday theme. Try this quick and impressive treat, and let it
              become a part of your Christmas traditions!
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
                href="/how-to-prepare-shrimp-pizza"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  How to Prepare Shrimp Pizza: A Delicious Seafood Twist
                </p>
              </a>

              <a
                href="/pumpkin-stuffed-with-mushrooms-onions-and-bacon"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Pumpkin Stuffed with Mushrooms, Onions, and Bacon: A Savory
                  Fall Delight
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
