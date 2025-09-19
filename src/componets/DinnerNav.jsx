import styles from "./dinner.module.css";
import { FiFolder, FiMessageCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";
import { useNavigate, useParams } from "react-router-dom";

//for images
import pizzaImage from "../img/Pizza-Margherita-Authentic-Italian-Recipe.jpg";
import tunaTart from "./Dinner img/Quick-Tuna-Tart-with-Shortcrust-Pastry-The-Best-Recipe.jpeg";
import Croquettes from "./Dinner img/Potato-Croquettes-with-Raw-Ham.jpeg";
import Verrines from "./Dinner img/Avocado-Shrimp-and-Cream-Cheese-Verrines.jpeg";
import Tortilla from "./Dinner img/Potato-Tortilla.jpeg";
import Samosas from "./Dinner img/Samosas-with-Minced-Meat.jpeg";
import cakeVeg from "./Dinner img/Cake-with-Sun-Dried-Vegetables-and-Mozzarella.jpeg";
import spicyChicken from "./Dinner img/Spicy-Chicken-Spring-Rolls-A-Flavorful-Crunchy-Delight.jpeg";
import Pork from "./Dinner img/Pork-Stir-Fry-in-the-Cookeo.jpeg";

//next page
import Dinner2 from "./PaginationPages/navBarPaginations/DinnerPagination/Dinner2/Dinner2";

export default function DinnerNav() {
  //Help's get page number from URL
  const { pageNumber } = useParams();

  //for navigating to other pages
  const navigate = useNavigate();

  //for the pagination and parse page number from URL, default to 1 if invaild
  const pageNum = parseInt(pageNumber, 10);
  const [currentPage, setCurrentPage] = useState(isNaN(pageNum) ? 1 : pageNum);
  const totalPages = 2;

  //To keep the currentPage in sync with URL
  useEffect(() => {
    setCurrentPage(isNaN(pageNum) ? 1 : pageNum);
  }, [pageNum]);

  //function to change the page
  function handlePageChange(page) {
    navigate(`/category/dinner/page/${page}`);
  }

  //for other paginationPages in Dinner
  const dinnerComponents = {
    2: <Dinner2 currentPage={currentPage} />,
  };

  const dinnerRecipes = [
    {
      id: 1,
      title: "Pizza Margherita: Authentic Italian Recipe",
      date: "December 20, 2024 by Anna Walker",
      image: pizzaImage,
      description:
        "The Pizza Margherita is a symbol of Italian cuisine, celebrated for its simplicity and authentic flavors. Comprising a thin crust, tomato sauce, mozzarella, and fresh basil, it embodies the colors …",
      link: "/pizza-margherita",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/pizza-margherita#comment-section",
    },
    {
      id: 2,
      title: "Quick Tuna Tart with Shortcrust Pastry: The Best Recipe",
      date: "December 9, 2024 by Anna Walker",
      image: tunaTart,
      description:
        "Looking for a quick, flavorful dish that’s perfect for any occasion? This quick tuna tart with shortcrust pastry is a versatile recipe that can serve as a light dinner, lunch, …",
      link: "/quick-tuna-tart-with-shortcrust-pastry",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/quick-tuna-tart#comment-section",
    },
    {
      id: 3,
      title: "Potato Croquettes with Raw Ham: A Crispy and Savory Treat",
      date: "December 9, 2024 by Anna Walker",
      image: Croquettes,
      description:
        "Potato croquettes with raw ham are a mouthwatering combination of creamy mashed potatoes and savory cured ham, encased in a golden, crispy crust. Perfect as an appetizer, side dish, or …",
      link: "/potato-croquettes-with-raw-ham",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/potato-croquettes#comment-section",
    },
    {
      id: 4,
      title: "Avocado, Shrimp, and Cream Cheese Verrines",
      date: "December 9, 2024 by Anna Walker",
      image: Verrines,
      description:
        "Avocado, shrimp, and cream cheese verrines are the perfect blend of creamy, fresh, and savory flavors served in a chic, layered presentation. This dish is ideal for dinner parties, festive …",
      link: "/avocado-shrimp-and-cream-cheese-verrines",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/avocado-shrimp-verrines#comment-section",
    },
    {
      id: 5,
      title: "Potato Tortilla: A Classic Spanish Dish for Every Occasion",
      date: "December 9, 2024 by Anna Walker",
      image: Tortilla,
      description:
        "The potato tortilla, also known as tortilla de patatas in Spain, is a timeless dish that showcases the beauty of simplicity. With just a few basic ingredients—potatoes, eggs, onions, and …",
      link: "/potato-tortilla",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/potato-tortilla#comment-section",
    },
    {
      id: 6,
      title: "Samosas with Minced Meat: A Crispy, Flavorful Snack",
      date: "December 9, 2024 by Anna Walker",
      image: Samosas,
      description:
        "Samosas with minced meat are a classic snack enjoyed around the world for their crispy exterior and savory, spiced filling. These delicious triangular pastries, traditionally from South Asia, are packed …",
      link: "/samosas-with-minced-meat",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/samosas-with-minced-meat#comment-section",
    },
    {
      id: 7,
      title: "Cake with Sun-Dried Vegetables and Mozzarella: A Savory Delight",
      date: "December 9, 2024 by Anna Walker",
      image: cakeVeg,
      description:
        "Looking for a unique, savory cake that’s both flavorful and satisfying? This cake with sun-dried vegetables and mozzarella is a perfect choice! Combining the richness of sun-dried tomatoes, roasted vegetables, …",
      link: "/cake-with-sun-dried-vegetables-and-mozzarella",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink:
        "/cake-with-sun-dried-vegetables-and-mozzarella#comment-section",
    },
    {
      id: 8,
      title: "Spicy Chicken Spring Rolls: A Flavorful, Crunchy Delight",
      date: "December 9, 2024 by Anna Walker",
      image: spicyChicken,
      description:
        "Spicy chicken spring rolls are a mouthwatering appetizer or snack that combines crispy, golden wrappers with a flavorful, spicy chicken filling. Perfectly seasoned with aromatic spices and herbs, these spring …",
      link: "/spicy-chicken-spring-rolls",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/spicy-chicken-spring-rolls#comment-section",
    },
    {
      id: 9,
      title: "Pork Stir-Fry in the Cookeo",
      date: "December 9, 2024 by Anna Walker",
      image: Pork,
      description:
        "Looking for a quick and flavorful dish to make in your Cookeo? This pork stir-fry is the perfect solution! Packed with tender pork, crisp vegetables, and a savory sauce, this …",
      link: "/pork-stir-fry-in-the-cookeo",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/pork-stir-fry-in-the-cookeo#comment-section",
    },
  ];

  return (
    <div>
      <div className={styles.textH}>
        <h3>Dinner Category</h3>
      </div>

      {/* Recipes Grid */}
      <div className={styles.grid}>
        {currentPage === 1 && (
          <>
            {dinnerRecipes.map((recipe) => (
              <div className={styles.bodyContainer} key={recipe.id}>
                <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                <p className={styles.recipeDate}>{recipe.date}</p>
                <img src={recipe.image} alt={recipe.title} />
                <h4 className={styles.recipeDescription}>
                  {recipe.description}
                </h4>
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

      {/* Next Page */}
      <div>{dinnerComponents[currentPage]}</div>

      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
