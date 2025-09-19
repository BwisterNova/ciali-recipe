import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./lasagnaSoup.module.css";
import LasagnaSoupImage from "./Images/LasagnaSoupImage.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LasagnaSoup() {
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
    <div className={styles.LasagnaSoupContainer}>
      <div className={styles.LasagnaSoupContents}>
        <div>
          <img src={LasagnaSoupImage} alt="How to Prepare Lasagna Soup" />
        </div>

        {/* Content Section */}
        <div className={styles.LasagnaSoupInfo}>
          <header>
            <h1>How to Prepare Lasagna Soup</h1>
            <p>December 9, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              If you love lasagna but are short on time or want something
              lighter, <strong>lasagna soup</strong> is the perfect alternative!
              This one-pot dish combines all the rich, comforting flavors of
              traditional lasagna—meaty sauce, melty cheese, and tender
              pasta—but in a cozy, hearty soup form. Quick to make and endlessly
              customizable, it’s a family-friendly recipe you’ll want to add to
              your weekly rotation.
            </p>

            {/* Additional Content */}
            <h3>Ingredients </h3>
            <p>
              <strong>For the Soup Base:</strong>
            </p>
            <ul>
              <li>2 tbsp olive oil</li>
              <li>1 medium onion, diced</li>
              <li>2 garlic cloves, minced</li>
              <li>500g ground beef or Italian sausage (or a mix)</li>
              <li>1 can (400g) crushed tomatoes</li>
              <li>2 tbsp tomato paste</li>
              <li>1 can (400g) diced tomatoes</li>
              <li>1 liter chicken or beef broth</li>
              <li>1 tsp dried basil</li>
              <li>1 tsp dried oregano</li>
              <li>1 tsp paprika (optional)</li>
              <li>Salt and freshly ground pepper to taste</li>
            </ul>

            <p>
              <strong>For the Pasta and Cheese:</strong>
            </p>
            <ol>
              <li>
                8 lasagna sheets, broken into pieces (or any short pasta like
                penne)
              </li>
              <li>150g ricotta cheese</li>
              <li>100g mozzarella cheese, shredded</li>
              <li>50g Parmesan cheese, grated</li>
              <li>Fresh parsley or basil for garnish</li>
            </ol>

            <h3>Instructions</h3>
            <p>
              <strong> Step 1: Cook the Base</strong>
            </p>
            <ol>
              <li>
                Heat olive oil in a large pot over medium heat. Add the onion
                and garlic, sautéing until soft and fragrant (about 3 minutes).
              </li>
              <li>
                Add the ground beef or sausage, breaking it up with a spoon.
                Cook until browned and no pink remains. Drain any excess fat if
                needed.
              </li>
              <li>
                Stir in the tomato paste, cooking for 1–2 minutes to deepen the
                flavor.
              </li>
            </ol>
            <p>
              <strong>Step 2: Build the Soup</strong>
            </p>
            <ol>
              <li>
                Add the crushed tomatoes, diced tomatoes, broth, basil, oregano,
                and paprika. Stir well to combine.
              </li>
              <li>
                Bring the soup to a boil, then reduce the heat and let it simmer
                for 15–20 minutes to allow the flavors to meld.
              </li>
            </ol>
            <p>
              <strong>Step 3: Add the Pasta</strong>
            </p>
            <ol>
              <li>
                Stir in the broken lasagna sheets (or your chosen pasta). Cook
                according to the package instructions, usually 8–10 minutes,
                until the pasta is tender.
              </li>
            </ol>
            <p>
              <strong>Step 4: Prepare the Cheese Mixture</strong>
            </p>
            <ol>
              <li>
                In a small bowl, mix the ricotta cheese with half of the
                Parmesan and a pinch of salt and pepper. Set aside.
              </li>
            </ol>
            <p>
              <strong>Step 5: Assemble and Serve</strong>
            </p>
            <ol>
              <li>Ladle the hot soup into bowls.</li>
              <li>
                Add a dollop of the ricotta mixture to each bowl and sprinkle
                with shredded mozzarella and remaining Parmesan.
              </li>
              <li>
                Garnish with fresh parsley or basil for a pop of color and
                freshness.
              </li>
            </ol>

            <h3>Tips for the Perfect Lasagna Soup</h3>
            <ul>
              <li>
                <strong>Make it ahead:</strong> Prepare the soup base in
                advance, and add the pasta just before serving to avoid
                sogginess.
              </li>
              <li>
                <strong>Add greens:</strong> Toss in a handful of spinach or
                kale during the last few minutes of cooking for extra nutrients.
              </li>

              <li>
                <strong>Vegetarian option:</strong> Replace the meat with
                mushrooms or lentils, and use vegetable broth.
              </li>
            </ul>

            <h3>Serving Suggestions</h3>
            <p>
              Serve this lasagna soup with garlic bread or a crisp green salad
              for a complete and satisfying meal. It’s perfect for chilly nights
              or when you need a quick comfort food fix!
            </p>

            <p>
              Enjoy this warm, cheesy bowl of lasagna-inspired goodness—bon
              appétit!
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
                href="/knodel-austrian-savory-bread-dumplings"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Knödel – Austrian Savory Bread Dumplings
                </p>
              </a>

              <a
                href="/prepare-easy-lasagna-bolognese"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Prepare Easy Lasagna Bolognese
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
