import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiFolder,
} from "react-icons/fi";
import styles from "./tunaPasta.module.css";
import TunaPastaImage from "./Images/tuna-pasta-salad-878x1024.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function TunaPasta() {
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
    <div className={styles.TunaPastaContainer}>
      <div className={styles.TunaPastaContents}>
        <div>
          <img src={TunaPastaImage} alt="Raspberry Mascarpone Sponge Cake" />
        </div>

        {/* Content Section */}
        <div className={styles.TunaPastaInfo}>
          <header>
            <h1>Tuna Pasta Salad Recipe</h1>
            <p>December 10, 2024 by Anna Walker</p>
          </header>

          <article>
            <p>
              <strong>Tuna pasta salad</strong> is the ultimate go-to dish for a
              quick lunch, a light dinner, or a potluck favorite. Combining
              tender pasta, flaked tuna, crisp vegetables, and a tangy dressing,
              this versatile recipe is easy to customize and always satisfying.
              Perfect for meal prep or a last-minute meal, this salad is as
              flavorful as it is simple to make.
            </p>
            {/* Additional Content */}
            <h3>Ingredients:</h3>
            <p>
              <strong>For 4-6 servings:</strong>
            </p>
            <ul>
              <li>250g (8 oz) pasta (penne, fusilli, or shells)</li>
              <li>
                2 cans (150g/5 oz each) tuna in olive oil or water, drained
              </li>
              <li>1 small red onion, finely chopped</li>
              <li>1 cup cherry tomatoes, halved</li>
              <li>1 cup cucumber, diced</li>
              <li>1/2 cup black olives, sliced</li>
              <li>1/2 cup corn kernels (optional)</li>
              <li>2 tbsp fresh parsley, chopped</li>
              <li>2 tbsp grated Parmesan cheese (optional)</li>
            </ul>
            <p>
              <strong>For the Dressing:</strong>
            </p>
            <ul>
              <li>3 tbsp olive oil</li>
              <li>2 tbsp lemon juice or white wine vinegar</li>
              <li>1 tsp Dijon mustard</li>
              <li>1 tsp honey or sugar</li>
              <li>Salt and freshly ground black pepper, to taste</li>
            </ul>

            <h3>Instructions:</h3>
            <p>
              <strong>Step 1: Cook the Pasta</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>Bring a large pot of salted water to a boil.</li>
              <li>
                Add the pasta and cook according to package instructions until
                al dente.
              </li>
              <li>
                Drain the pasta and rinse it under cold water to stop the
                cooking process. Set aside to cool.
              </li>
            </ol>
            <p>
              <strong>Step 2: Prepare the Vegetables and Tuna</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>While the pasta cools, chop the vegetables and parsley.</li>
              <li>Flake the tuna into bite-sized pieces using a fork.</li>
            </ol>
            <p>
              <strong>Step 3: Make the Dressing</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                In a small bowl, whisk together olive oil, lemon juice or
                vinegar, Dijon mustard, honey or sugar, and a pinch of salt and
                pepper. Adjust the seasoning to taste.
              </li>
            </ol>
            <p>
              <strong>Step 4: Assemble the Salad</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                In a large mixing bowl, combine the cooked pasta, tuna, onion,
                cherry tomatoes, cucumber, olives, corn (if using), and parsley.
              </li>
              <li>
                Pour the dressing over the salad and toss gently to coat all the
                ingredients evenly.
              </li>
            </ol>
            <p>
              <strong>Step 5: Chill and Serve</strong>
            </p>
            <ol style={{ marginLeft: "10px" }}>
              <li>
                Cover the salad and refrigerate for at least 30 minutes to let
                the flavors meld together.
              </li>
              <li>
                Serve chilled, garnished with Parmesan cheese or extra parsley
                if desired.
              </li>
            </ol>

            <h3>Tips for Success</h3>
            <ul>
              <li>
                <strong>Pasta Choice:</strong> Use short pasta shapes that hold
                dressing well, like fusilli or rotini.
              </li>
              <li>
                <strong>Extra Add-Ins:</strong> Add diced bell peppers, capers,
                or boiled eggs for additional flavor and texture.
              </li>
              <li>
                <strong>Make Ahead:</strong>This salad can be made a day in
                advance and stored in an airtight container in the fridge.
              </li>
            </ul>

            <p>
              This <strong>Tuna Pasta Salad</strong> is a refreshing and
              satisfying dish that’s perfect for any occasion. Easy to prepare
              and packed with flavor, it’s a crowd-pleaser that’s sure to become
              a regular in your meal rotation.
            </p>
            <p>
              Try this recipe today and enjoy a delicious blend of textures and
              tastes in every bite!
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
                href="/raspberry-mascarpone-sponge-cake"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-17px" }}
                  className={styles.nextComponent}
                >
                  <FiArrowLeftCircle />
                  Raspberry Mascarpone Sponge Cake: A Perfect Blend of Elegance
                  and Flavor
                </p>
              </a>
              <a
                href="/green-cabbage-stew"
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                <p
                  style={{ marginTop: "-15px" }}
                  className={styles.nextComponent2}
                >
                  <FiArrowRightCircle />
                  Green Cabbage Stew: A Hearty and Nutritious Dish
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
