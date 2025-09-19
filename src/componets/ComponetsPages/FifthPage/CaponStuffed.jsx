import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./caponStuffed.module.css";
import CaponStuffedImage from "./Images/CaponStuffedImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CaponStuffed() {
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
    <div className={styles.CaponStuffedContainer}>
      <div className={styles.CaponStuffedContents}>
        <div>
          <img
            src={CaponStuffedImage}
            alt="Capon Stuffed with Chestnuts and Mushrooms"
          />
        </div>

        {/* Content Section */}
        <div className={styles.CaponStuffedInfo}>
          <header>
            <h1>Capon Stuffed with Chestnuts and Mushrooms</h1>
            <p>December 5, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              A centerpiece worthy of any holiday feast,{" "}
              <strong>capon stuffed with chestnuts and mushrooms</strong>
              is a dish that exudes warmth, tradition, and indulgence. This
              recipe combines the tender and juicy meat of a roasted capon with
              a flavorful stuffing of earthy mushrooms and sweet chestnuts,
              enhanced by aromatic herbs and spices. Perfect for Christmas or
              any celebratory gathering, this recipe is sure to impress your
              guests and become a family favorite.
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Capon:</strong>
            </p>
            <ul>
              <li>1 whole capon (about 3-4 kg / 6-9 lbs)</li>
              <li>Salt and pepper, to taste</li>
              <li>50g unsalted butter, softened (about 3 tbsp)</li>
              <li>2 tbsp olive oil</li>
            </ul>

            <p>
              <strong>For the Stuffing:</strong>
            </p>
            <ul>
              <li>200g cooked chestnuts, chopped (about 1 cup)</li>
              <li>200g mushrooms, finely chopped (about 2 cups)</li>
              <li>1 onion, finely diced</li>
              <li>2 garlic cloves, minced</li>
              <li>100g breadcrumbs (about 1 cup)</li>
              <li>1 egg, beaten</li>
              <li>2 tbsp fresh parsley, chopped</li>
              <li>1 tsp thyme leaves</li>
              <li>Salt and pepper, to taste</li>
              <li>2 tbsp olive oil</li>
            </ul>
            <p>
              <strong>For Basting and Garnish:</strong>
            </p>
            <ul>
              <li>250ml chicken stock (about 1 cup)</li>
              <li>100ml white wine (optional)</li>
              <li>Fresh herbs (rosemary, thyme, or sage) for garnish</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Stuffing</strong>
            </p>
            <ol>
              <li>
                Heat olive oil in a skillet over medium heat. Add the onion and
                garlic, cooking until softened and fragrant.
              </li>
              <li>
                Add the chopped mushrooms and cook until their moisture
                evaporates. Stir in the chestnuts and cook for another 2-3
                minutes.
              </li>
              <li>
                Remove from heat and mix in the breadcrumbs, beaten egg,
                parsley, thyme, salt, and pepper. Set the stuffing aside to cool
                slightly.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Capon</strong>
            </p>
            <ol>
              <li>
                Remove from heat and mix in the breadcrumbs, beaten egg,
                parsley, thyme, salt, and pepper. Set the stuffing aside to cool
                slightly.
              </li>
              <li>
                Season the inside of the capon with salt and pepper. Stuff the
                cavity with the prepared chestnut and mushroom mixture. Secure
                the cavity with kitchen twine or toothpicks.
              </li>
              <li>
                Rub the outside of the capon with softened butter and olive oil,
                then season generously with salt and pepper.
              </li>
            </ol>
            <p>
              <strong>Step 3: Roast the Capon</strong>
            </p>
            <ol>
              <li>
                Place the stuffed capon on a roasting rack in a large baking
                dish. Pour the chicken stock and white wine (if using) into the
                bottom of the dish.
              </li>
              <li>
                Roast the capon in the preheated oven for about 2.5-3 hours,
                basting every 30 minutes with the pan juices to keep it moist.
                Cover loosely with foil if the skin starts to brown too quickly.
              </li>
              <li>
                The capon is done when the internal temperature of the thickest
                part of the thigh reaches 75°C (165°F).
              </li>
            </ol>
            <p>
              <strong>Step 4: Rest and Serve</strong>
            </p>
            <ol>
              <li>
                Remove the capon from the oven and let it rest for 15-20 minutes
                before carving. This ensures the juices redistribute throughout
                the meat.
              </li>
              <li>
                Garnish with fresh herbs and serve alongside the stuffing,
                roasted vegetables, or a light salad.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Chestnuts:</strong> Use vacuum-packed or freshly roasted
                chestnuts for the best flavor.
              </li>
              <li>
                <strong>Mushrooms:</strong> Button mushrooms work well, but wild
                mushrooms like chanterelles or porcini can add a more intense
                flavor.
              </li>
              <li>
                <strong>Crisp skin:</strong> Increase the oven temperature to
                200°C (400°F) for the final 10 minutes of roasting to achieve a
                golden, crispy skin.
              </li>
              <li>
                <strong>Gravy:</strong>Make a simple gravy by deglazing the
                roasting pan with additional chicken stock and thickening it
                with a bit of cornstarch.
              </li>
            </ul>

            <p>
              A <strong>capon stuffed with chestnuts and mushrooms</strong> is a
              dish that captures the essence of festive dining—rich, flavorful,
              and beautifully presented. The combination of tender poultry and
              aromatic stuffing creates a symphony of textures and tastes that
              your family and guests will savor.
            </p>

            <p>
              Perfect as the star of your holiday table, this recipe is as
              satisfying to prepare as it is to enjoy. Pair it with seasonal
              sides like roasted potatoes, glazed carrots, or a crisp green
              salad, and toast to a memorable meal!
            </p>

            <div className={styles.infoButtom}>
              <a
                href="/category/dinner"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p className={styles.categoryLink}>
                  <FiFolder onClick={() => navigate("/category/dinner")} />
                  Dinner
                </p>
              </a>

              <a
                href="/baked-butternut-squash-gratin-with-comte-and-thyme"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Baked Butternut Squash Gratin with Comté and Thyme
                </p>
              </a>

              <a
                href="/pork-tenderloin-in-puff-pastry"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Pork Tenderloin in Puff Pastry
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
