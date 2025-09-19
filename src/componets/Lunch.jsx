import styles from "./lunch.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiFolder, FiMessageCircle } from "react-icons/fi";

//for images
import rice from "./Lunch img/Indian-Chicken-with-Tomato-and-Rice.jpeg";
import tunaPasta from "./Lunch img/tuna-pasta-salad.jpeg";
import greenCabbage from "./Lunch img/Green-cabbage-stew.jpeg";
import homeChicken from "./Lunch img/Homemade-Chicken-Cordon-Bleu.jpeg";
import Lasagna from "./Lunch img/Mushroom-Lasagna.jpeg";
import salmon from "./Lunch img/Salmon-and-spinach-lasagna.jpeg";
import marbella from "./Lunch img/Chicken-Marbella.jpeg";
import millefeuille from "./Lunch img/Smoked-Salmon-Millefeuille-with-Lime-Sorbet.jpeg";
import creamCheese from "./Lunch img/Mushrooms-Stuffed-with-Cream-Cheese.jpeg";
import Pagination from "./Pagination/Pagination";
import Lunch2 from "./PaginationPages/navBarPaginations/LunchPagination/Lunch2/Lunch2";

export default function Lunch() {
  const navigate = useNavigate();

  //for the pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const { pageNumber } = useParams();

  const pageNum = parseInt(pageNumber, 10);

  useEffect(() => {
    setCurrentPage(isNaN(pageNum) ? 1 : pageNum);
  }, [pageNum]);

  //function to change the page
  function handlePageChange(page) {
    navigate(`/category/lunch/page/${page}`);
  }
  // for next page
  const lunchComponents = {
    2: <Lunch2 currentPage={currentPage} />,
  };

  const lunchRecipes = [
    {
      id: 1,
      title: "Indian Chicken with Tomato and Rice",
      date: "December 10, 2024 by Anna Walker",
      image: rice,
      description:
        "Indian chicken with tomato and rice is a flavorful and satisfying one-pot dish that combines aromatic spices, tender chicken, and perfectly cooked rice. Inspired by the vibrant flavors of Indian …",
      link: "/indian-chicken-with-tomato-and-rice",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/indian-chicken-with-tomato-and-rice#comment-section",
    },
    {
      id: 2,
      title: "Tuna Pasta Salad Recipe",
      date: "December 10, 2024 by Anna Walker",
      image: tunaPasta,
      description:
        "Tuna pasta salad is the ultimate go-to dish for a quick lunch, a light dinner, or a potluck favorite. Combining tender pasta, flaked tuna, crisp vegetables, and a tangy dressing, …",
      link: "/tuna-pasta-salad-recipe",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/tuna-pasta-salad-recipe#comment-section",
    },
    {
      id: 3,
      title: "Green Cabbage Stew: A Hearty and Nutritious Dish",
      date: "December 10, 2024 by Anna Walker",
      image: greenCabbage,
      description:
        "Green cabbage stew is a comforting and nourishing meal that’s perfect for chilly days. Packed with vibrant vegetables and a rich broth, this dish is both hearty and healthy. Whether …",
      link: "/green-cabbage-stew",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/green-cabbage-stew#comment-section",
    },
    {
      id: 4,
      title: "Homemade Chicken Cordon Bleu",
      date: "December 10, 2024 by Anna Walker",
      image: homeChicken,
      description:
        "Chicken Cordon Bleu is a classic dish that combines tender chicken breast, savory ham, and gooey melted cheese, all wrapped in a crispy breadcrumb coating. Making it at home is …",
      link: "/homemade-chicken-cordon-bleu",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/homemade-chicken-cordon-bleu#comment-section",
    },
    {
      id: 5,
      title: "Mushroom Lasagna: A Creamy and Savory Delight",
      date: "December 10, 2024 by Anna Walker",
      image: Lasagna,
      description:
        "For those who love the earthy flavor of mushrooms and crave the comforting layers of a classic lasagna, this Mushroom Lasagna is the perfect dish. It’s a delightful twist on …",
      link: "/mushroom-lasagna",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/mushroom-lasagna#comment-section",
    },
    {
      id: 6,
      title: "Salmon and Spinach Lasagna: A Delicious and Elegant Twist",
      date: "December 10, 2024 by Anna Walker",
      image: salmon,
      description:
        "For a fresh take on a classic comfort food, try this Salmon and Spinach Lasagna. This creamy, flavorful dish combines tender lasagna layers with rich salmon, vibrant spinach, and a …",
      link: "/salmon-and-spinach-lasagna",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/salmon-and-spinach-lasagna#comment-section",
    },
    {
      id: 7,
      title: "Chef Anna’s Chicken Marbella",
      date: "December 9, 2024 by Anna Walker",
      image: marbella,
      description:
        "Chicken Marbella is a dish that brings the best of Mediterranean flavors to your table. Combining juicy chicken with sweet prunes, briny olives, capers, and aromatic herbs, this dish is …",
      link: "/chef-annas-chicken-marbella",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/chef-annas-chicken-marbella#comment-section",
    },
    {
      id: 8,
      title: "Smoked Salmon Millefeuille with Lime Sorbet",
      date: "December 9, 2024 by Anna Walker",
      image: millefeuille,
      description:
        "Smoked salmon millefeuille with lime sorbet is an exquisite and refreshing starter that combines the rich, smoky flavor of salmon with the tangy freshness of lime. The millefeuille, traditionally a …",
      link: "/smoked-salmon-millefeuille-with-lime-sorbet",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/smoked-salmon-millefeuille-with-lime-sorbet#comment-section",
    },
    {
      id: 9,
      title:
        "Mushrooms Stuffed with Cream Cheese: A Simple Yet Sophisticated Appetizer",
      date: "December 9, 2024 by Anna Walker",
      image: creamCheese,
      description:
        "Mushrooms stuffed with cream cheese are a delectable appetizer that’s quick to prepare and always a crowd-pleaser. These bite-sized treats combine the earthy flavor of mushrooms with the creamy richness …",
      link: "/mushrooms-stuffed-with-cream-cheese",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/mushrooms-stuffed-with-cream-cheese#comment-section",
    },
  ];

  return (
    <div>
      <div className={styles.textH}>
        <h3>Lunch Category</h3>
      </div>

      {/* Recipes Grid */}
      <div className={styles.grid}>
        {currentPage === 1 && (
          <>
            {lunchRecipes.map((recipe) => (
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
      <div>{lunchComponents[currentPage]}</div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
