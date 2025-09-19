import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./appleStrudel.module.css";
import AppleStrudelImage from "./Images/imageye___-_Apple-Strudel-A-Classic-Dessert-with-a-Warm-Spiced-Filling.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AppleStrudel() {
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
    <div className={styles.AppleStrudelContainer}>
      <div className={styles.AppleStrudelContents}>
        <div>
          <img
            src={AppleStrudelImage}
            alt="Apple Strudel: A Classic Dessert with a Warm, Spiced Filling"
          />
        </div>

        {/* Content Section */}
        <div className={styles.AppleStrudelInfo}>
          <header>
            <h1>
              Apple Strudel: A Classic Dessert with a Warm, Spiced Filling
            </h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Apple strudel</strong>, or <strong>Apfelstrudel,</strong>{" "}
              is a classic dessert originating from Austria, but it has become
              beloved worldwide. This delicate pastry features a thin, flaky
              crust wrapped around a filling of sweet, spiced apples, raisins,
              and nuts, making it the perfect treat for any occasion. Whether
              served warm with a scoop of vanilla ice cream or dusted with
              powdered sugar, apple strudel is a dessert that’s as comforting as
              it is delicious.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Dough</strong>
            </p>
            <ul>
              <li>200g all-purpose flour</li>
              <li>1/2 tsp salt</li>
              <li>100ml lukewarm water</li>
              <li>1 tbsp vegetable oil</li>
              <li>1 tsp white vinegar</li>
            </ul>
            <p>
              <strong>For the Filling</strong>
            </p>
            <ul>
              <li>
                4 medium apples (e.g., Granny Smith or Braeburn), peeled and
                thinly sliced
              </li>
              <li>50g raisins</li>
              <li>50g granulated sugar</li>
              <li>1 tsp ground cinnamon</li>
              <li>1/4 tsp ground nutmeg</li>
              <li>2 tbsp breadcrumbs</li>
              <li>2 tbsp butter, melted</li>
            </ul>
            <p>
              <strong>For Assembly and Decoration:</strong>
            </p>
            <ul>
              <li>1 egg, beaten (for brushing)</li>
              <li>Powdered sugar, for dusting</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Dough</strong>
            </p>
            <ol>
              <li>
                In a mixing bowl, combine the flour and salt. Add the lukewarm
                water, oil, and vinegar. Mix until a rough dough forms.
              </li>
              <li>
                Knead the dough on a lightly floured surface for about 10
                minutes until it becomes smooth and elastic.
              </li>
              <li>
                Shape the dough into a ball, coat it lightly with oil, and cover
                it with plastic wrap. Let it rest for at least 1 hour at room
                temperature.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Filling</strong>
            </p>
            <ol>
              <li>
                In a bowl, mix the sliced apples, raisins, chopped nuts, sugar,
                cinnamon, and nutmeg. Set aside to allow the flavors to meld.
              </li>
            </ol>
            <p>
              <strong>Step 3: Stretch the Dough</strong>
            </p>
            <ol>
              <li>
                Preheat your oven to 180°C (350°F) and line a baking sheet with
                parchment paper.
              </li>
              <li>
                Place a clean, large kitchen towel on your work surface and
                lightly dust it with flour. Roll out the dough as thinly as
                possible with a rolling pin.
              </li>
              <li>
                Gently stretch the dough using the back of your hands, working
                from the center outward, until it becomes almost translucent.
                Aim for a rectangular shape.
              </li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Strudel</strong>
            </p>
            <ol>
              <li>
                Brush the stretched dough with melted butter and sprinkle evenly
                with breadcrumbs. The breadcrumbs help absorb the apple juices
                during baking.
              </li>
              <li>
                Spread the apple mixture evenly along one short edge of the
                dough, leaving a border of about 2 cm.If you like, you can top
                the quiche with a bit more cheese for a golden, cheesy top.
              </li>
              <li>
                Use the kitchen towel to gently roll the strudel from the edge
                with the filling, tucking in the sides as you go to seal the
                filling. Place the strudel seam-side down on the prepared baking
                sheet.
              </li>
            </ol>
            <p>
              <strong>Step 5: Bake the Strudel</strong>
            </p>
            <ol>
              <li>
                Brush the top of the strudel with the beaten egg for a golden
                finish.
              </li>
              <li>
                Bake in the preheated oven for 35–40 minutes, or until the
                strudel is golden brown and crisp.
              </li>
              <li>Remove from the oven and let it cool slightly.</li>
            </ol>
            <p>
              <strong>Step 6: Serve and Enjoy</strong>
            </p>
            <ol>
              <li>
                Dust the strudel with powdered sugar before serving. Slice it
                into pieces and serve warm with a scoop of vanilla ice cream,
                whipped cream, or a drizzle of custard sauce.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Dough tips:</strong>The dough needs to be stretched
                thinly but handled delicately. A properly rested dough is easier
                to stretch without tearing.
              </li>
              <li>
                <strong>Apple variety:</strong> Choose tart apples like Granny
                Smith to balance the sweetness of the sugar and raisins.
              </li>

              <li>
                <strong>Flavour boost:</strong> Add a splash of rum to the
                raisins or a bit of lemon zest to the apple filling for extra
                depth.
              </li>
            </ul>

            <p>
              <strong>Apple strudel</strong> is a timeless dessert that
              beautifully balances flaky pastry with a warm, spiced apple
              filling. Whether you’re making it for a holiday gathering or a
              simple treat for family and friends, this classic recipe is sure
              to impress. With a little practice, you’ll master the art of
              strudel-making and have a new favorite dessert to share.
            </p>
            <p>Guten Appetit!</p>

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
                href="/crustless-and-gluten-free-quiche"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Crustless (and Gluten-Free) Quiche: A Delicious and Versatile
                  Dish
                </p>
              </a>

              <a
                href="/salmon-blanquette-with-vegetables-and-poulette-sauce"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Salmon Blanquette with Vegetables and Poulette Sauce
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
