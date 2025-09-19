import styles from "./lunch2.module.css";
import { useNavigate } from "react-router-dom";
import { FiFolder, FiMessageCircle } from "react-icons/fi";

//for images
import springRolls from "./Images/imageye___-_Spring-Rolls-with-Crab-Chinese-Cabbage-and-Bamboo-Shoots.jpeg";
import blinisImage from "./Images/imageye___-_Revisited-Blinis-with-Buckwheat-and-Smoked-Salmon.jpeg";
import quchieImage from "./Images/imageye___-_Crustless-and-Gluten-Free-Quiche-A-Delicious-and-Versatile-Dish.jpeg";
import salmonImage from "./Images/imageye___-_Salmon-Blanquette-with-Vegetables-and-Poulette-Sauce.jpeg";
import lasagnaImage from "./Images/imageye___-_Perfect-Lasagna-Soup.jpeg";
import tartImage from "./Images/imageye___-_Easy-and-Quick-Tartiflette-Recipe.jpeg";
import vegImage from "./Images/imageye___-_My-Grandmothers-Stuffed-Vegetables.jpeg";
import butternutImage from "./Images/imageye___-_Butternut-Squash-and-Ham-Quiche.jpeg";
import bakedImage from "./Images/imageye___-_Baked-Butternut-Squash-Gratin-with-Comte-and-Thyme.jpeg";
import winterVegImage from "./Images/imageye___-_Winter-Vegetable-Flan.jpeg";
import caponImage from "./Images/imageye___-_Capon-Supreme-with-Morels.jpeg";

export default function Lunch2({ currentPage }) {
  const navigate = useNavigate();
  const lunch2recipes = [
    {
      id: 1,
      title: "Spring Rolls with Crab, Chinese Cabbage, and Bamboo Shoots",
      date: "December 9, 2024 by Anna Walker",
      image: springRolls,
      description:
        "Spring rolls with crab, Chinese cabbage, and bamboo shoots offer a perfect balance of flavors and textures, with the delicate sweetness of crab meat, the crunchiness of fresh bamboo shoots, …",
      link: "/spring-rolls-with-crab-chinese-cabbage-and-bamboo-shoots",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/spring-rolls-with-crab-chinese-cabbage-and-bamboo-shoots#comment-section",
    },
    {
      id: 2,
      title: "Revisited Blinis with Buckwheat and Smoked Salmon",
      date: "December 9, 2024 by Anna Walker",
      image: blinisImage,
      description:
        "Blinis are a traditional Russian dish often associated with celebrations, but this revisited blinis with buckwheat and smoked salmon brings a modern twist to the classic recipe. With the earthy …",
      link: "/revisited-blinis-with-buckwheat-and-smoked-salmon",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/revisited-blinis-with-buckwheat-and-smoked-salmon#comment-section",
    },
    {
      id: 3,
      title:
        "Crustless (and Gluten-Free) Quiche: A Delicious and Versatile Dish",
      date: "December 9, 2024 by Anna Walker",
      image: quchieImage,
      description:
        "A crustless quiche is a perfect option for anyone seeking a lighter, gluten-free version of the classic dish. Packed with eggs, cheese, vegetables, and your favorite proteins, this quiche is …",
      link: "/crustless-and-gluten-free-quiche",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/crustless-and-gluten-free-quiche#comment-section",
    },

    {
      id: 4,
      title: "Salmon Blanquette with Vegetables and Poulette Sauce",
      date: "December 9, 2024 by Anna Walker",
      image: salmonImage,
      description:
        "Warm and comforting, Salmon Blanquette with Vegetables and a creamy Poulette Sauce is a delightful twist on the classic blanquette. This dish combines tender salmon fillets with fresh, vibrant vegetables, …",
      link: "/salmon-blanquette-with-vegetables-and-poulette-sauce",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/salmon-blanquette-with-vegetables-and-poulette-sauce#comment-section",
    },
    {
      id: 5,
      title: "How to Prepare Lasagna Soup",
      date: "December 9, 2024 by Anna Walker",
      image: lasagnaImage,
      description:
        "If you love lasagna but are short on time or want something lighter, lasagna soup is the perfect alternative! This one-pot dish combines all the rich, comforting flavors of traditional …",
      link: "/how-to-prepare-lasagna-soup",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/how-to-prepare-lasagna-soup#comment-section",
    },
    {
      id: 6,
      title: "Easy and Quick Tartiflette Recipe",
      date: "December 9, 2024 by Anna Walker",
      image: tartImage,
      description:
        "Tartiflette, the quintessential French comfort food, originates from the Savoie region. Traditionally made with creamy Reblochon cheese, potatoes, lardons, and onions, it’s the ultimate indulgent dish for winter evenings. This …",
      link: "/easy-and-quick-tartiflette-recipe",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/easy-and-quick-tartiflette-recipe#comment-section",
    },

    {
      id: 7,
      title: "My Grandmother’s Stuffed Vegetables: A Family Tradition",
      date: "December 6, 2024 by Anna Walker",
      image: vegImage,
      description:
        "There’s something deeply comforting about a dish that carries the warmth of family memories. Stuffed vegetables, a timeless recipe passed down from my grandmother, are more than just a meal—they’re …",
      link: "/my-grandmothers-stuffed-vegetables#comment-section",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/my-grandmothers-stuffed-vegetables#comment-section",
    },

    {
      id: 8,
      title: "Butternut Squash and Ham Quiche: A Seasonal Delight",
      date: "December 5, 2024 by Anna Walker",
      image: butternutImage,
      description:
        "If you’re looking for a dish that’s perfect for brunch, lunch, or a light dinner, look no further than this Butternut Squash and Ham Quiche. This recipe combines the creamy …",
      link: "/butternut-squash-and-ham-quiche",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "//butternut-squash-and-ham-quiche#comment-section",
    },

    {
      id: 9,
      title: "Baked Butternut Squash Gratin with Comté and Thyme",
      date: "December 5, 2024 by Anna Walker",
      image: bakedImage,
      description:
        "If you’re looking for a comforting and elegant side dish, this Baked Butternut Squash Gratin with Comté and Thyme is the perfect choice. Creamy layers of sweet butternut squash are …",
      link: "/baked-butternut-squash-gratin-with-comte-and-thyme",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/baked-butternut-squash-gratin-with-comte-and-thyme#comment-section",
    },

    {
      id: 10,
      title: "Winter Vegetable Flan: A Comforting Seasonal Recipe",
      date: "December 1, 2024 by Anna Walker",
      image: winterVegImage,
      description:
        "Warm, comforting, and packed with the goodness of winter vegetables, this Winter Vegetable Flan is a versatile dish that can be served as a light main course, a side dish, …",
      link: "/winter-vegetable-flan",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/winter-vegetable-flan#comment-section",
    },

    {
      id: 11,
      title: "Capon Supreme with Morels: A Refined Holiday Recipe",
      date: "December 1, 2024 by Anna Walker",
      image: caponImage,
      description:
        "When it comes to festive meals, few dishes rival the elegance and flavor of Capon Supreme with Morels. This dish combines the tender, juicy meat of capon with the earthy, …",
      link: "/capon-supreme-with-morels",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/capon-supreme-with-morels#comment-section",
    },
  ];

  return (
    <div className={styles.grid}>
      {currentPage === 2 && (
        <>
          {lunch2recipes.map((recipe) => (
            <div className={styles.bodyContainer} key={recipe.id}>
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
              <p className={styles.recipeDate}>{recipe.date}</p>
              <img src={recipe.image} alt={recipe.title} />
              <h4 className={styles.recipeDescription}>{recipe.description}</h4>
              <button onClick={() => navigate(recipe.link)}>READ MORE</button>
              <div className={styles.bodyBottom}>
                <p onClick={() => navigate(recipe.categoryLink)}>
                  <FiFolder /> {recipe.category}
                </p>
                <p
                  onClick={() => navigate(recipe.commentLink)}
                  style={{ marginTop: "-10px" }}
                >
                  <FiMessageCircle /> Leave a comment
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
