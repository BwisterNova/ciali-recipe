import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./italianPasta.module.css";
import ItalianPastaImage from "./Images/ItalianPastaImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ItalianPasta() {
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
    <div className={styles.ItalianPastaContainer}>
      <div className={styles.ItalianPastaContents}>
        <div>
          <img
            src={ItalianPastaImage}
            alt="Italian Carbonara Pasta Without Cream"
          />
        </div>

        {/* Content Section */}
        <div className={styles.ItalianPastaInfo}>
          <header>
            <h1>Italian Carbonara Pasta Without Cream: The Authentic Recipe</h1>
            <p>November 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              Forget the cream! Authentic <strong>Italian Carbonara</strong> is
              a creamy, flavorful pasta dish made without any heavy cream. The
              magic lies in the combination of eggs, cheese, pancetta, and pasta
              water, which creates a rich, velvety sauce. This classic Roman
              dish is quick, easy, and a perfect option for a comforting meal.
            </p>
            <p>
              Let’s dive into this traditional recipe and discover how to create
              the perfect carbonara without cream!
            </p>

            {/* Additional Content */}
            <h3>Ingredients</h3>
            <p>
              <strong>For Two Servings:</strong>
            </p>
            <ul>
              <li>200g spaghetti (or your preferred pasta)</li>
              <li>100g pancetta or guanciale, diced</li>
              <li>2 large egg yolks</li>
              <li>1 whole egg</li>
              <li>50g Pecorino Romano cheese, finely grated (about 1/2 cup)</li>
              <li>1 tsp freshly ground black pepper</li>
              <li>Salt, for the pasta water</li>
            </ul>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Prepare the Ingredients</strong>
            </p>
            <ol>
              <li>
                Bring a large pot of salted water to a boil. Add the spaghetti
                and cook according to package instructions until al dente.
              </li>
              <li>
                While the pasta cooks, dice the pancetta or guanciale into small
                cubes.
              </li>
            </ol>
            <p>
              <strong>Step 2: Make the Egg Mixture</strong>
            </p>
            <ol>
              <li>
                In a mixing bowl, whisk together the egg yolks, whole egg,
                grated Pecorino Romano, and black pepper. The mixture should
                have a thick, creamy consistency. Set aside.
              </li>
            </ol>
            <p>
              <strong>Step 3: Cook the Pancetta</strong>
            </p>
            <ol>
              <li>
                Heat a large skillet over medium heat. Add the diced pancetta or
                guanciale and cook until crispy and golden. You don’t need
                additional oil, as the fat from the meat will render out.
              </li>
              <li>
                Remove the skillet from heat to prevent the pancetta from
                burning while you finish the pasta.
              </li>
            </ol>
            <p>
              <strong>Step 4: Combine the Pasta and Sauce</strong>
            </p>
            <ol>
              <li>
                When the spaghetti is ready, reserve about 1 cup of pasta water,
                then drain the pasta.
              </li>
              <li>
                Add the drained pasta directly to the skillet with the pancetta.
                Toss to coat the pasta in the rendered fat.
              </li>
            </ol>
            <p>
              <strong>Step 5: Create the Creamy Sauce</strong>
            </p>
            <ol>
              <li>
                Slowly pour the egg mixture over the hot pasta, stirring quickly
                to coat each strand. The heat of the pasta will gently cook the
                eggs, creating a creamy sauce.
              </li>
              <li>
                Add a splash of reserved pasta water to loosen the sauce if
                needed, adjusting the consistency to your liking.
              </li>
            </ol>
            <p>
              <strong>Step 6: Serve and Garnish</strong>
            </p>
            <ol>
              <li>
                Divide the carbonara into serving plates and garnish with
                additional Pecorino Romano and a pinch of black pepper.
              </li>
              <li>
                Serve immediately and enjoy the authentic taste of Italian
                carbonara!
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Use the right meat:</strong> Traditional carbonara calls
                for guanciale (cured pork cheek), but pancetta is a great
                substitute. Avoid using bacon, as it has a different flavor
                profile.
              </li>
              <li>
                <strong>Cheese choice:</strong>Pecorino Romano is the classic
                choice for carbonara, but Parmesan can be used if you prefer a
                milder flavor.
              </li>
              <li>
                <strong>Avoid scrambling:</strong> Stir the egg mixture quickly
                when adding it to the pasta to prevent the eggs from scrambling.
              </li>
              <li>
                <strong>Perfect consistency:</strong> The reserved pasta water
                is your secret weapon—add it gradually to achieve a silky sauce.
              </li>
            </ul>

            <p>
              This <strong>Italian Carbonara Pasta Without Cream</strong> is
              proof that simple ingredients can create an unforgettable dish.
              Rich, creamy, and packed with flavor, it’s a testament to the
              beauty of authentic Italian cooking.
            </p>

            <p>
              With this recipe, you’ll master the art of traditional carbonara
              and impress your family or guests with a restaurant-worthy meal.
              Buon appetito!
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
                href="/my-holiday-paella"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  My Holiday Paella: A Festive Feast for Special Occasions
                </p>
              </a>

              <a
                href="/eggs-with-ham-a-simple-and-delicious-classic"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Eggs with Ham: A Simple and Delicious Classic
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
