import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./salmonBlanqutte.module.css";
import SalmonBlanqutteImage from "./Images/SalmonBlanqutteImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function SalmonBlanqutte() {
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
    <div className={styles.SalmonBlanqutteContainer}>
      <div className={styles.SalmonBlanqutteContents}>
        <div>
          <img
            src={SalmonBlanqutteImage}
            alt="Salmon Blanquette with Vegetables and Poulette Sauce"
          />
        </div>

        {/* Content Section */}
        <div className={styles.SalmonBlanqutteInfo}>
          <header>
            <h1>Salmon Blanquette with Vegetables and Poulette Sauce</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Warm and comforting,{" "}
              <strong>Salmon Blanquette with Vegetables</strong> and a creamy{" "}
              <strong>Poluette Sauce,</strong> is a delightful twist on the
              classic blanquette. This dish combines tender salmon fillets with
              fresh, vibrant vegetables, all coated in a rich, velvety sauce
              that is subtly tangy from the addition of lemon and egg yolks.
              Perfect for a cozy dinner, it pairs beautifully with rice or
              crusty bread.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For the Salmon and Vegetables:</strong>
            </p>
            <ul>
              <li>4 salmon fillets (about 150g each)</li>
              <li>2 carrots, peeled and sliced</li>
              <li>
                100ml lukewarm water1 leek, cleaned and sliced into rings1 tbsp
                vegetable oil
              </li>
              <li>1 celery stalk, chopped</li>
              <li>1 small onion, finely chopped</li>
              <li>1 bay leaf</li>
              <li>2 sprigs of thyme</li>
              <li>1 liter fish stock or water</li>
            </ul>
            <p>
              <strong>For the Poulette Sauce:</strong>
            </p>
            <ul>
              <li>40g butter</li>
              <li>40g flour</li>
              <li>
                500ml cooking liquid (reserved from poaching the salmon and
                vegetables)
              </li>
              <li>2 egg yolks</li>
              <li>100ml heavy cream</li>
              <li>Juice of ½ lemon</li>
              <li>Salt and freshly ground pepper</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Prepare the Salmon and Vegetables</strong>
            </p>
            <ol>
              <li>
                In a large saucepan, bring the fish stock (or water) to a gentle
                simmer. Add the bay leaf, thyme, onion, and celery. Let the
                flavors infuse for about 5 minutes.
              </li>
              <li>
                Add the carrots and leek, simmering for 8–10 minutes until
                slightly tender.
              </li>
              <li>
                Gently lower the salmon fillets into the stock, ensuring they
                are fully submerged. Poach on low heat for 8–10 minutes until
                the salmon is just cooked through.
              </li>
              <li>
                Carefully remove the salmon and vegetables with a slotted spoon
                and set aside. Strain and reserve 500ml of the cooking liquid.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Poulette Sauce</strong>
            </p>
            <ol>
              <li>
                In a separate saucepan, melt the butter over medium heat. Stir
                in the flour to form a roux, cooking for 1–2 minutes without
                letting it brown.
              </li>
              <li>
                Gradually whisk in the reserved cooking liquid, ensuring a
                smooth consistency. Simmer for 5 minutes, stirring regularly,
                until the sauce thickens.
              </li>
              <li>
                In a small bowl, whisk together the egg yolks, cream, and lemon
                juice. Slowly add a ladleful of the hot sauce to temper the egg
                mixture.
              </li>
              <li>
                Pour the tempered mixture back into the saucepan, stirring
                constantly, until the sauce becomes creamy. Do not let it boil.
                Season with salt and pepper to taste.
              </li>
            </ol>
            <p>
              <strong>Step 3: Assemble and Serve</strong>
            </p>
            <ol>
              <li>
                Arrange the salmon fillets and vegetables on a serving platter
                or individual plates
              </li>
              <li>
                Generously spoon the Poulette Sauce over the top. Garnish with
                freshly chopped parsley if desired.
              </li>
              <li>
                Serve immediately with steamed rice or crusty bread on the side.
              </li>
            </ol>

            <hr />
            <h3>Pro Tips</h3>
            <ul>
              <li>For a richer flavor, use homemade fish stock..</li>
              <li>
                Feel free to substitute salmon with cod or another firm white
                fish.
              </li>

              <li>Add mushrooms for an earthy touch to the blanquette.</li>
            </ul>

            <p>
              Enjoy this hearty and elegant dish that’s perfect for impressing
              guests or treating yourself to something special!
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
                href="/apple-strudel-a-classic-dessert-with-a-warm-spiced-filling"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Apple Strudel: A Classic Dessert with a Warm, Spiced Filling
                </p>
              </a>

              <a
                href="/baked-rice-pudding-a-creamy-comforting-dessert"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Baked Rice Pudding: A Creamy, Comforting Dessert
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
