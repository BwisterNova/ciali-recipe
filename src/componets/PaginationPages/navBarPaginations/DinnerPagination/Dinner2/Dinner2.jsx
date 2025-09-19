import styles from "./dinner2.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiFolder, FiMessageCircle } from "react-icons/fi";

//images
import knodelImage from "./Images/imageye___-_Knodel-Austrian-Savory-Bread-Dumplings.jpeg";
import lasagnaImage from "./Images/imageye___-_Prepare-Easy-Lasagna-Bolognese.jpeg";
import caponImage from "./Images/imageye___-_Capon-Stuffed-with-Chestnuts-and-Mushrooms.jpeg";
import counscousImage from "./Images/imageye___-_Traditional-vegetable-couscous.jpeg";
import porkImage from "./Images/imageye___-_Pork-Tenderloin-in-Puff-Pastry.jpeg";
import shrimpPizzaImage from "./Images/imageye___-_How-to-Prepare-Shrimp-Pizza.jpeg";
import pumpkinImage from "./Images/imageye___-_Pumpkin-Stuffed-with-Mushrooms-Onions-and-Bacon.jpeg";
import pancakesImage from "./Images/imageye___-_How-to-Prepare-Easy-Pancakes.jpeg";
import paellaImage from "./Images/imageye___-_My-holiday-paella.jpeg";
import pastaImage from "./Images/imageye___-_Italian-Carbonara-Pasta-Without-Cream.jpeg";
import hamImage from "./Images/imageye___-_Eggs-with-Ham-A-Simple-and-Delicious-Classic.jpeg";
import chickenImage from "./Images/imageye___-_Chicken-Risotto.jpeg";

export default function Dinner2({ currentPage }) {
  const navigate = useNavigate();

  const dinner2Recipes = [
    {
      id: 1,
      title: "Knödel – Austrian Savory Bread Dumplings",
      date: "December 10, 2024 by Anna Walker",
      description:
        "Knödel, a staple of Austrian cuisine, are hearty and versatile bread dumplings that embody the essence of comfort food. Often served as a side dish or main course, these dumplings …",
      image: knodelImage,
      link: "/knodel-austrian-savory-bread-dumplings",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/knodel-austrian-savory-bread-dumplings#comment-section",
    },

    {
      id: 2,
      title: "Prepare Easy Lasagna Bolognese",
      date: "December 9, 2024 by Anna Walker",
      description:
        "Lasagna Bolognese is a timeless classic that combines layers of rich meat sauce,  creamy béchamel, and tender  pasta sheets into a dish that’s comforting and satisfying. While traditional recipes can …",
      image: lasagnaImage,
      link: "/prepare-easy-lasagna-bolognese",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/prepare-easy-lasagna-bolognese#comments-section",
    },

    {
      id: 3,
      title: "Traditional Vegetable Couscous: A Heartwarming Moroccan Classic",
      date: "December 7, 2024 by Anna Walker",
      description:
        "Couscous with vegetables is a beloved dish originating from North Africa, celebrated for its vibrant flavors and hearty ingredients. This dish combines fluffy couscous with an array of colorful vegetables, …",

      image: counscousImage,
      link: "/traditional-vegetable-couscous",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/traditional-vegetable-couscous#comment-section",
    },
    {
      id: 4,
      title: "Capon Stuffed with Chestnuts and Mushrooms",
      date: "December 5, 2024 by Anna Walker",
      description:
        "A centerpiece worthy of any holiday feast, capon stuffed with chestnuts and mushrooms is a dish that exudes warmth, tradition, and indulgence. This recipe combines the tender and juicy meat …",

      image: caponImage,
      link: "/capon-stuffed-with-chestnuts-and-mushrooms",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink:
        "/capon-stuffed-with-chestnuts-and-mushrooms#comment-section",
    },
    {
      id: 5,
      title: "Pork Tenderloin in Puff Pastry",
      date: "December 4, 2024 by Anna Walker",
      description:
        "Delicate, tender, and wrapped in golden puff pastry, pork tenderloin in puff pastry is an elegant and flavorful dish that’s perfect for special occasions or a comforting dinner. This recipe …",

      image: porkImage,
      link: "/pork-tenderloin-in-puff-pastry",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/pork-tenderloin-in-puff-pastry#comment-section",
    },
    {
      id: 6,
      title: "How to Prepare Shrimp Pizza: A Delicious Seafood Twist",
      date: "December 3, 2024 by Anna Walker",
      description:
        "If you’re craving something a little different from the usual pizza toppings, why not try a shrimp pizza? The delicate sweetness of shrimp combined with tangy tomato sauce, melted cheese, …",

      image: shrimpPizzaImage,
      link: "/how-to-prepare-shrimp-pizza",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/how-to-prepare-shrimp-pizza#comment-section",
    },
    {
      id: 7,
      title:
        "Pumpkin Stuffed with Mushrooms, Onions, and Bacon: A Savory Fall Delight",
      date: "December 2, 2024 by Anna Walker",
      description:
        "As the cooler months roll in, what better way to embrace the flavors of fall than with a savory pumpkin stuffed with mushrooms, onions, and bacon? This dish brings together …",

      image: pumpkinImage,
      link: "/pumpkin-stuffed-with-mushrooms-onions-and-bacon",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink:
        "/pumpkin-stuffed-with-mushrooms-onions-and-bacon#comment-section",
    },
    {
      id: 8,
      title: "How to Prepare Easy Pancakes",
      date: "November 9, 2024 by Anna Walker",
      description:
        "There’s nothing quite like a stack of warm, fluffy pancakes to start your day on a delicious note. Pancakes are a classic breakfast favorite, and the best part? They’re incredibly …",

      image: pancakesImage,
      link: "/how-to-prepare-easy-pancakes",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/how-to-prepare-easy-pancakes#comment-section",
    },
    {
      id: 9,
      title: "My Holiday Paella: A Festive Feast for Special Occasions",
      date: "November 9, 2024 by Anna Walker",
      description:
        "Nothing brings people together quite like a colorful, flavorful paella. This Spanish classic, often associated with gatherings and celebrations, is the perfect centerpiece for your holiday table. Packed with saffron-infused …",

      image: paellaImage,
      link: "/my-holiday-paella",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/my-holiday-paella#comment-section",
    },
    {
      id: 10,
      title: "Italian Carbonara Pasta Without Cream: The Authentic Recipe",
      date: "November 9, 2024 by Anna Walker",
      description:
        "Forget the cream! Authentic Italian Carbonara is a creamy, flavorful pasta dish made without any heavy cream. The magic lies in the combination of eggs, cheese, pancetta, and pasta water, …",

      image: pastaImage,
      link: "/italian-carbonara-pasta-without-cream",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/italian-carbonara-pasta-without-cream#comment-section",
    },
    {
      id: 11,
      title: "Eggs with Ham: A Simple and Delicious Classic",
      date: "November 8, 2024 by Anna Walker",
      description:
        "Sometimes, the simplest dishes are the most satisfying. Eggs with ham is a timeless classic that combines two versatile ingredients to create a meal that’s quick, delicious, and perfect for …",

      image: hamImage,
      link: "/eggs-with-ham-a-simple-and-delicious-classic",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink:
        "/eggs-with-ham-a-simple-and-delicious-classic#comment-section",
    },
    {
      id: 12,
      title: "Chicken Risotto: The Best Recipe",
      date: "November 5, 2024 by Anna Walker",
      description:
        "Sometimes, the simplest dishes are the most satisfying. Eggs with ham is a timeless classic that combines two versatile ingredients to create a meal that’s quick, delicious, and perfect for …",

      image: chickenImage,
      link: "/chicken-risotto-the-best-recipe",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/chicken-risotto-the-best-recipe#comment-section",
    },
  ];
  return (
    <div className={styles.grid}>
      {currentPage === 2 && (
        <>
          {dinner2Recipes.map((recipe) => (
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
