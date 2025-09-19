import { FiFolder, FiMessageCircle } from "react-icons/fi";
import styles from "./desserts.module.css";
import { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";

//For images
import clementine from "./Desserts img/Clementine.jpeg";
import creme from "./Desserts img/creme.jpeg";
import Raspberry from "./Desserts img/Frozen-Raspberry-Coulis.jpeg";
import SpongeCake from "./Desserts img/Raspberry-Mascarpone-Sponge-Cake.jpeg";
import AppleCake from "./Desserts img/Cheap-Soft-Apple-Cake.jpeg";
import Speculoos from "./Desserts img/Raspberry-and-Speculoos-Verrines.jpeg";
import Mousse from "./Desserts img/Light-Chocolate-Mousse.jpeg";
import Pistachio from "./Desserts img/Raspberry-and-Pistachio-Yule-Log.jpeg";
import Alsatian from "./Desserts img/Alsatian-Christmas-Stollen.jpeg";
import Desserts2 from "./PaginationPages/navBarPaginations/DessertsPagination/Desserts2/Dessert2";
import { useNavigate, useParams } from "react-router-dom";

export default function Desserts() {
  const navigate = useNavigate();
  // for the pagination
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
    navigate(`/category/desserts/page/${page}`);
  }

  const PaginationComponents = {
    2: <Desserts2 currentPage={currentPage} />,
  };

  const dessertRecipes = [
    {
      id: 1,
      title: "Clementine Tart: A Citrusy Delight",
      date: "December 10, 2024 by Anna Walker",
      image: clementine,
      description:
        "Looking for a dessert that captures the bright, zesty flavor of winter? This clementine tart is a refreshing treat that combines the tangy sweetness of clementines with a rich, buttery …",
      link: "/clementine-tart",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/clementine-tart#comment-section",
    },
    {
      id: 2,
      title: "Crème Caramel: A Classic Dessert with Milk and Eggs",
      date: "December 10, 2024 by Anna Walker",
      image: creme,
      description:
        "Crème caramel, also known as caramel custard, is a timeless dessert that combines the creamy richness of milk and eggs with the deep sweetness of caramel. This French-inspired treat is …",
      link: "/creme-caramel",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/creme-caramel#comment-section",
    },
    {
      id: 3,
      title: "Frozen Raspberry Coulis: A Versatile and Refreshing Delight",
      date: "December 10, 2024 by Anna Walker",
      image: Raspberry,
      description:
        "Frozen raspberry coulis is a sweet and tangy sauce made from raspberries that can elevate any dessert. Whether drizzled over ice cream, cheesecake, pancakes, or used to accompany a slice …",
      link: "/frozen-raspberry-coulis",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/frozen-raspberry-coulis#comment-section",
    },
    {
      id: 4,
      title: "Raspberry Mascarpone Sponge Cake: A Perfect Blend of Elegance",
      date: "December 10, 2024 by Anna Walker",
      image: SpongeCake,
      description:
        "Raspberry mascarpone sponge cake is a delicate and delightful dessert that combines the lightness of sponge cake, the creamy richness of mascarpone, and the tangy sweetness of raspberries. Whether for …",
      link: "/raspberry-mascarpone-sponge-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/raspberry-mascarpone-sponge-cake#comment-section",
    },
    {
      id: 5,
      title: "Cheap Soft Apple Cake: A Budget-Friendly, Moist Dessert",
      date: "December 10, 2024 by Anna Walker",
      image: AppleCake,
      description:
        "If you’re craving a comforting, homemade dessert but don’t want to break the bank, cheap soft apple cake is the perfect solution. This simple, budget-friendly cake combines the sweetness of …",
      link: "/cheap-soft-apple-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/cheap-soft-apple-cake#comment-section",
    },
    {
      id: 6,
      title: "Raspberry and Speculoos Verrines: A Sweet, Crunchy Delight",
      date: "December 9, 2024 by Anna Walker",
      image: Speculoos,
      description:
        "Raspberry and Speculoos verrines are a perfect blend of smooth, creamy layers and a crunchy, spiced base. These individual desserts are served in clear glasses, showcasing the vibrant colors and …",
      link: "/raspberry-and-speculoos-verrines",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/raspberry-and-speculoos-verrines#comment-section",
    },
    {
      id: 7,
      title: "Light Chocolate Mousse: A Decadent Yet Airy Dessert",
      date: "December 9, 2024 by Anna Walker",
      image: Mousse,
      description:
        "Light chocolate mousse is the perfect dessert for those who crave indulgence without feeling too heavy. This airy, velvety mousse is made with rich chocolate and whipped cream, creating a …",
      link: "/light-chocolate-mousse",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/light-chocolate-mousse#comment-section",
    },
    {
      id: 8,
      title: "Raspberry and Pistachio Yule Log: A Festive Fusion of Flavors",
      date: "December 9, 2024 by Anna Walker",
      image: Pistachio,
      description:
        "Raspberry and pistachio log is an elegant and delicious dessert that combines the sweet-tart flavor of raspberries with the nutty richness of pistachios. This beautiful Yule log, perfect for holiday …",
      link: "/raspberry-and-pistachio-yule-log",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/raspberry-and-pistachio-yule-log#comment-section",
    },
    {
      id: 9,
      title: "Alsatian Christmas Stollen: A Traditional Holiday Delight",
      date: "December 9, 2024 by Anna Walker",
      image: Alsatian,
      description:
        "Alsatian Christmas Stollen is a festive, yeasted bread that has become a beloved holiday tradition in the Alsace region of France. This sweet, spiced bread is typically filled with dried …",
      link: "/alsatian-christmas-stollen",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/alsatian-christmas-stollen#comment-section",
    },
  ];

  return (
    <div>
      <div className={styles.textH}>
        <h3>Desserts Category</h3>
      </div>

      {/* Recipes Grid */}
      <div className={styles.grid}>
        {currentPage === 1 && (
          <>
            {dessertRecipes.map((recipe) => (
              <div className={styles.bodyContainer} key={recipe.id}>
                <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                <p className={styles.recipeDate}>{recipe.date}</p>
                <img src={recipe.image} alt={recipe.title} />
                <h4 className={styles.recipeDescription}>
                  {recipe.description}
                </h4>
                <button onClick={() => navigate(recipe.link)}>READ MORE</button>
                <div className={styles.bodyBottom}>
                  <p
                    onClick={() => (window.location.href = recipe.categoryLink)}
                  >
                    <FiFolder /> {recipe.category}
                  </p>
                  <p
                    onClick={() => (window.location.href = recipe.commentLink)}
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

      <div>{PaginationComponents[currentPage]}</div>
      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
