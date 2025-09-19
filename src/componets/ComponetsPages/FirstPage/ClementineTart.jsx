import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./clementine.module.css";
import clementineImage from "./Images/Clementine-Tart-A-Citrusy-Delight.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ClementineTart() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#comment-section") {
      const commentSection = document.getElementById("comment-section");
      if (commentSection) {
        commentSection.scrollIntoView({ behaviour: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.clementineTartContainer}>
      <div className={styles.clementineTartContents}>
        <div>
          <img src={clementineImage} alt="Clementine Tart: A Citrusy Delight" />
        </div>

        {/* Content Section */}
        <div className={styles.clementineTartInfo}>
          <header>
            <h1>Clementine Tart: A Citrusy Delight</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Looking for a dessert that captures the bright, zesty flavor of
              winter? This <strong>clementine tart </strong> is a refreshing
              treat that combines the tangy sweetness of clementines with a
              rich, buttery crust. Perfect for a festive gathering, a family
              dinner, or a simple indulgence, this tart is as visually stunning
              as it is delicious. The vibrant citrus filling paired with the
              delicate pastry creates a dessert that’s sure to impress.
            </p>

            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p style={{ marginTop: "-15px", fontWeight: "bold" }}>
              For the Tart Crust
            </p>
            <ul>
              <li>200g all-purpose flour (about 1 1/2 cups)</li>
              <li>100g cold butter, cubed (about 1/2 cup)</li>
              <li>50g powdered sugar (about 1/4 cup)</li>
              <li>1 egg yolk</li>
              <li>2-3 tbsp cold water</li>
            </ul>

            <p style={{ fontWeight: "bold" }}>For the Clementine Filling</p>
            <ul>
              <li>5-6 clementines (zest and juice, about 200ml juice)</li>
              <li>100g granulated sugar (about 1/2 cup)</li>
              <li>3 large eggs</li>
              <li>100ml heavy cream (about 1/2 cup)</li>
              <li>1 tbsp cornstarch</li>
            </ul>

            <p style={{ fontWeight: "bold" }}>For Garnish (Optional):</p>
            <ul>
              <li>Clementine slices</li>
              <li>Powdered sugar</li>
              <li>Fresh mint leaves</li>
            </ul>

            <h3>Instructions:</h3>
            <strong>Step 1: Prepare the Tart Crust</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                In a large mixing bowl, combine the flour and powdered sugar.
                Add the cold butter and rub it into the dry ingredients with
                your fingertips until the mixture resembles breadcrumbs.
              </li>
              <li>
                Stir in the egg yolk and cold water, one tablespoon at a time,
                until the dough comes together. Be careful not to overwork the
                dough.
              </li>
              <li>
                Shape the dough into a disc, wrap it in plastic wrap, and chill
                for at least 30 minutes.
              </li>
              <li>
                Preheat your oven to 180°C (350°F). Roll out the chilled dough
                on a floured surface and fit it into a tart pan with a removable
                bottom. Trim the edges and prick the base with a fork.
              </li>
              <li>
                Line the crust with parchment paper, fill it with pie weights or
                dried beans, and bake for 15 minutes. Remove the weights and
                bake for an additional 5 minutes. Let the crust cool completely.
              </li>
            </ol>

            <strong>Step 2: Prepare the Clementine Filling</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Zest and juice the clementines. Whisk together the juice, zest,
                sugar, eggs, and cornstarch in a medium saucepan.
              </li>
              <li>
                Heat the mixture over low heat, stirring constantly, until it
                begins to thicken. Remove from heat and let it cool slightly.
              </li>
              <li>
                Stir in the heavy cream to create a smooth, creamy filling.
              </li>
            </ol>

            <strong>Step 3: Assemble and Bake the Tart</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Pour the clementine filling into the cooled tart crust,
                spreading it evenly
              </li>
              <li>
                Bake the tart at 160°C (320°F) for 20-25 minutes, or until the
                filling is set but still slightly jiggly in the center.
              </li>
              <li>
                Let the tart cool to room temperature, then refrigerate for at
                least 2 hours before serving.
              </li>
            </ol>

            <strong>Step 4: Garnish and Serve</strong>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Decorate the top with fresh clementine slices, a light dusting
                of powdered sugar, or sprigs of mint for a festive touch.
              </li>
              <li>
                Slice and serve chilled for a refreshing and tangy dessert
                experience.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Clementines:</strong> Choose ripe, juicy clementines for
                the best flavor. Mandarins or tangerines can be substituted if
                needed.
              </li>
              <li>
                <strong>Crust:</strong> For an even richer crust, add a pinch of
                cinnamon or orange zest to the dough.
              </li>
              <li>
                <strong>Creaminess:</strong>Adjust the amount of cream in the
                filling to suit your taste; more cream creates a silkier
                texture.
              </li>
              <li>
                <strong>Storage:</strong> Store the tart in the refrigerator for
                up to three days, ensuring it remains fresh and flavorful.
              </li>
            </ul>

            <p>
              This <strong>clemintine tart</strong> is the perfect blend of
              zesty citrus and creamy indulgence, making it a standout dessert
              for any occasion. The bright flavors of clementines paired with
              the buttery crust provide a harmonious balance of taste and
              texture.
            </p>

            <p>
              Whether you’re enjoying it as a centerpiece for a holiday meal or
              as a simple treat to brighten your day, this tart is sure to
              delight with every bite. Give it a try and savor the vibrant,
              sun-kissed flavor of clementines in every slice!
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
                href="/pizza-margherita"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle /> Pizza Margherita : Authentic Italian
                  Recipe
                </p>
              </a>
              <a
                href="/creme-caramel"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle /> Crème Caramel: A Classic Dessert with
                  Milk and Eggs
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
