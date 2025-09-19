import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./holidayPaella.module.css";
import HolidayPaellaImage from "./Images/HolidayPaellaImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function HolidayPaella() {
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
    <div className={styles.HolidayPaellaContainer}>
      <div className={styles.HolidayPaellaContents}>
        <div>
          <img
            src={HolidayPaellaImage}
            alt="My Holiday Paella: A Festive Feast for Special Occasions"
          />
        </div>

        {/* Content Section */}
        <div className={styles.HolidayPaellaInfo}>
          <header>
            <h1>My Holiday Paella: A Festive Feast for Special Occasions</h1>
            <p>November 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Nothing brings people together quite like a colorful, flavorful
              <strong>paella.</strong> This Spanish classic, often associated
              with gatherings and celebrations, is the perfect centerpiece for
              your holiday table. Packed with saffron-infused rice, a medley of
              seafood, chicken, and vibrant vegetables, my holiday paella is a
              true showstopper.
            </p>
            <p>
              Whether you’re hosting a Christmas dinner, a New Year’s Eve party,
              or any festive occasion, this dish is sure to impress your guests.
              Let’s dive into this simple yet stunning recipe!
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For the Paella Base:</strong>
            </p>
            <ul>
              <li>2 tbsp olive oil</li>
              <li>300g chicken thighs, diced</li>
              <li>200g chorizo or sausage, sliced</li>
              <li>1 onion, finely chopped</li>
              <li>2 garlic cloves, minced</li>
              <li>1 red bell pepper, diced</li>
              <li>1 yellow bell pepper, diced</li>
              <li>2 tomatoes, grated (or 200g canned diced tomatoes)</li>
              <li>300g paella rice (or short-grain rice)</li>
              <li>1 tsp smoked paprika</li>
              <li>1/2 tsp saffron threads (soaked in 2 tbsp warm water)</li>
              <li>750ml chicken or seafood stock (about 3 cups)</li>
              <li>Salt and pepper to taste</li>
            </ul>

            <p>
              <strong>For the Toppings:</strong>
            </p>
            <ul>
              <li>300g mussels, cleaned</li>
              <li>200g large shrimp, peeled and deveined</li>
              <li>100g frozen peas</li>
              <li>Lemon wedges and fresh parsley for garnish</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Base</strong>
            </p>
            <ol>
              <li>
                Heat the olive oil in a large, flat paella pan or a wide skillet
                over medium heat. Add the diced chicken and cook until golden
                brown. Remove and set aside.
              </li>
              <li>
                In the same pan, cook the chorizo until slightly crispy, then
                add the onion, garlic, and bell peppers. Sauté until softened
                and fragrant.
              </li>
            </ol>
            <p>
              <strong>Step 2: Build the Flavour</strong>
            </p>
            <ol>
              <li>
                Stir in the grated tomatoes, smoked paprika, and saffron water.
                Cook for a few minutes until the mixture thickens.
              </li>
              <li>
                Add the paella rice, stirring to coat it in the tomato mixture.
                Return the chicken to the pan.
              </li>
            </ol>
            <p>
              <strong>Step 3: Cook the Paella</strong>
            </p>
            <ol>
              <li>
                Pour in the stock, ensuring the rice is evenly distributed. Do
                not stir after this point, as this helps create the crispy
                “socarrat” layer at the bottom.
              </li>
              <li>
                Reduce the heat to low and simmer gently for 10-15 minutes.
              </li>
            </ol>
            <p>
              <strong>Step 4: Add the Seafood</strong>
            </p>
            <ol>
              <li>
                Arrange the mussels, shrimp, and calamari on top of the rice.
                Scatter the frozen peas over the dish.
              </li>
              <li>
                Cover the pan with a lid or foil and cook for an additional
                10-12 minutes until the seafood is cooked through and the rice
                is tender.
              </li>
            </ol>
            <p>
              <strong>Step 5: Garnish and Serve</strong>
            </p>
            <ol>
              <li>
                Remove the paella from the heat and let it rest for 5 minutes.
                Garnish with lemon wedges and fresh parsley.
              </li>
              <li>
                Serve directly from the pan for an authentic, family-style
                experience.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Pan choice:</strong> A traditional paella pan works
                best, but any wide, shallow skillet will do. Avoid deep pans as
                they can prevent even cooking.
              </li>
              <li>
                <strong>Saffron:</strong> Authentic saffron gives paella its
                signature color and flavor, but you can use turmeric as a
                budget-friendly alternative.
              </li>
              <li>
                <strong>Toppings:</strong> Customize the toppings with clams,
                scallops, or even vegetables like artichokes or zucchini.
              </li>
              <li>
                <strong>Socarrat:</strong> For the crispy bottom layer, let the
                paella cook undisturbed for the last few minutes over slightly
                higher heat.
              </li>
            </ul>

            <p>
              My <strong>holiday paella</strong> is a celebration on a plate,
              bringing vibrant colors, bold flavors, and a touch of elegance to
              your festive table. It’s a dish that invites everyone to gather,
              share, and savor the joy of the holidays.
            </p>

            <p>
              Give this recipe a try, and make your special occasions even more
              memorable with the irresistible charm of paella. Bon appétit, or
              as the Spanish say, ¡Buen provecho!
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
                href="/how-to-prepare-easy-pancakes"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  How to Prepare Easy Pancakes
                </p>
              </a>

              <a
                href="/italian-carbonara-pasta-without-cream"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Italian Carbonara Pasta Without Cream: The Authentic Recipe
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
