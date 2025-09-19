import React from "react";
import styles from "./RecentRecipes.module.css";

/* Importing images */
import turkeyImage from "../img/Preparing-Your-Christmas-Turkey-in-Advance-Tips-and-Recipes-150x150.jpg";
import pizzaImage from "../img/Pizza-Margherita-Authentic-Italian-Recipe-150x150.jpg";
import clementineImage from "../img/Clementine-Tart-A-Citrusy-Delight-150x150.jpg";
import cremeImage from "../img/Creme-Caramel-A-Classic-Dessert-with-Milk-and-Eggs-150x150.jpg";
import raspberryImage from "../img/Frozen-Raspberry-Coulis-150x150.jpg";

export default function RecentRecipes() {
  const recentRecipes = [
    {
      id: 1,
      title: "Preparing Your Christmas Turkey in Advance",
      date: "December 21, 2024",
      description:
        "A stuffed turkey is a quintessential dish for the holiday season, cherished for its generosity and comforting flavors.",
      image: turkeyImage,
      link: "/christmas-turkey",
    },
    {
      id: 2,
      title: "Pizza Margherita: Authentic Italian Recipe",
      date: "December 20, 2024",
      description:
        "The Pizza Margherita is a symbol of Italian cuisine, celebrated for its simplicity and authentic flavors.",
      image: pizzaImage,
      link: "/pizza-margherita",
    },
    {
      id: 3,
      title: "Clementine Tart: A Citrusy Delight",
      date: "December 10, 2024",
      description:
        "Looking for a dessert that captures the bright, zesty flavor of winter? This clementine tart is a refreshing treat.",
      image: clementineImage,
      link: "/clementine-tart",
    },
    {
      id: 4,
      title: "Crème Caramel: A Classic Dessert with Milk and Eggs",
      date: "December 10, 2024",
      description:
        "Crème caramel, also known as caramel custard, is a timeless dessert that combines the creamy richness of milk and eggs.",
      image: cremeImage,
      link: "/creme-caramel",
    },
    {
      id: 5,
      title: "Frozen Raspberry Coulis: A Versatile and Refreshing Delight",
      date: "December 10, 2024",
      description:
        "Frozen raspberry coulis is a sweet and tangy sauce made from raspberries that can elevate any dessert.",
      image: raspberryImage,
      link: "/frozen-raspberry-coulis",
    },
  ];

  return (
    <div className={styles.recentRecipesContainer}>
      <h3 className={styles.heading}>Recent Recipes</h3>
      <div className={styles.recipesList}>
        {recentRecipes.map((recipe) => (
          <div className={styles.recipeItem} key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className={styles.recipeImage}
            />
            {/* Text grouped on the right */}
            <div className={styles.recipeText}>
              <h4 className={styles.recipeTitle}>{recipe.title}</h4>
              <p className={styles.recipeDate}>{recipe.date}</p>
              <p className={styles.recipeDescription}>{recipe.description}</p>
              <a href={recipe.link} className={styles.readMore}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
