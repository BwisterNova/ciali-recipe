import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import styles from "../componets/recipe.module.css";
import { FiFolder, FiMessageCircle } from "react-icons/fi";
import SearchBar from "./Search Bar/SearchBar";

// --- Image imports for all pages ---
import turkeyImage from "../img/Preparing-Your-Christmas-Turkey-in-Advance-Tips-and-Recipes.jpg";
import pizzaImage from "../img/Pizza-Margherita-Authentic-Italian-Recipe.jpg";
import clementineImage from "../img/Clementine-Tart-A-Citrusy-Delight.jpg";
import cremeImage from "../img/Creme-Caramel-A-Classic-Dessert-with-Milk-and-Eggs.jpg";
import raspberryImage from "../img/Frozen-Raspberry-Coulis.jpg";
import indianChickenImage from "../img/Indian-Chicken-with-Tomato-and-Rice.jpg";
import raspberryMascarponeImage from "../img/Raspberry-Mascarpone-Sponge-Cake.jpg";
import tunaPastaImage from "../img/tuna-pasta-salad-768x896.jpg";
import greenCabbageImage from "../img/Green-cabbage-stew.jpg";

// Images for page 2
import chickenCordonBleuImage from "./PaginationPages/Recipes2/Images/Homemade-Chicken-Cordon-Bleu.jpg";
import mushroomLasagnaImage from "./PaginationPages/Recipes2/Images/imageye___-_Mushroom-Lasagna.jpeg";
import spinachLasagnaImage from "./PaginationPages/Recipes2/Images/imageye___-_Salmon-and-spinach-lasagna.jpeg";
import appleCakeImage from "./PaginationPages/Recipes2/Images/imageye___-_Cheap-Soft-Apple-Cake.jpeg";
import chickenMarbellaImage from "./PaginationPages/Recipes2/Images/imageye___-_Chicken-Marbella.jpeg";
import smokedSalmonImage from "./PaginationPages/Recipes2/Images/imageye___-_Smoked-Salmon-Millefeuille-with-Lime-Sorbet.jpeg";
import raspberryImage2 from "./PaginationPages/Recipes2/Images/imageye___-_Raspberry-and-Speculoos-Verrines.jpeg";
import chocolateMousseImage from "./PaginationPages/Recipes2/Images/imageye___-_Light-Chocolate-Mousse.jpeg";
import pistachioImage from "./PaginationPages/Recipes2/Images/imageye___-_Raspberry-and-Pistachio-Yule-Log.jpeg";

// Images for page 3
import tunaTartImage from "./PaginationPages/Recipes3/Images/imageye___-_Quick-Tuna-Tart-with-Shortcrust-Pastry-The-Best-Recipe.jpeg";
import mascarponeCakeImage from "./PaginationPages/Recipes3/Images/imageye___-_Apple-Mascarpone-Cake.jpeg";
import croquettesImage from "./PaginationPages/Recipes3/Images/imageye___-_Potato-Croquettes-with-Raw-Ham.jpeg";
import cheeseImage from "./PaginationPages/Recipes3/Images/imageye___-_Avocado-Shrimp-and-Cream-Cheese-Verrines.jpeg";
import creamCheeseImage from "./PaginationPages/Recipes3/Images/imageye___-_Mushrooms-Stuffed-with-Cream-Cheese.jpeg";
import potatoTortillaImage from "./PaginationPages/Recipes3/Images/imageye___-_Potato-Tortilla.jpeg";
import samosasImage from "./PaginationPages/Recipes3/Images/imageye___-_Samosas-with-Minced-Meat.jpeg";
import springRollsImage from "./PaginationPages/Recipes3/Images/imageye___-_Spring-Rolls-with-Crab-Chinese-Cabbage-and-Bamboo-Shoots.jpeg";
import cakeImage from "./PaginationPages/Recipes3/Images/imageye___-_Cake-with-Sun-Dried-Vegetables-and-Mozzarella.jpeg";

// Images for page 4
import spicyChicken from "./PaginationPages/Recipes4/Images/imageye___-_Spicy-Chicken-Spring-Rolls-A-Flavorful-Crunchy-Delight.jpeg";
import crustlessImage from "./PaginationPages/Recipes4/Images/imageye___-_Crustless-and-Gluten-Free-Quiche-A-Delicious-and-Versatile-Dish.jpeg";
import appleStrudelImage from "./PaginationPages/Recipes4/Images/imageye___-_Apple-Strudel-A-Classic-Dessert-with-a-Warm-Spiced-Filling.jpeg";
import salmonImage from "./PaginationPages/Recipes4/Images/imageye___-_Salmon-Blanquette-with-Vegetables-and-Poulette-Sauce.jpeg";
import ricePuddingImage from "./PaginationPages/Recipes4/Images/imageye___-_Baked-Rice-Pudding-A-Creamy-Comforting-Dessert.jpeg";
import mascarponeImage from "./PaginationPages/Recipes4/Images/imageye___-_Easy-Mascarpone-and-Raspberry-Christmas-Yule-Log.jpeg";
import christmascakeImage from "./PaginationPages/Recipes4/Images/imageye___-_Christmas-Cake-with-Pear-Speculoos-and-Salted-Butter-Caramel.jpeg";
import porkStirImage from "./PaginationPages/Recipes4/Images/imageye___-_Pork-Stir-Fry-in-the-Cookeo.jpeg";
import knodelImage from "./PaginationPages/Recipes4/Images/imageye___-_Knodel-Austrian-Savory-Bread-Dumplings.jpeg";

// Images for page 5
import lasagnaImage from "./PaginationPages/Recipes5/Images/imageye___-_Prepare-Easy-Lasagna-Bolognese.jpeg";
import tartifletteImage from "./PaginationPages/Recipes5/Images/imageye___-_Easy-and-Quick-Tartiflette-Recipe.jpeg";
import layerCakeImage from "./PaginationPages/Recipes5/Images/imageye___-_White-Chocolate-Raspberry-Layer-Cake.jpeg";
import couscousImage from "./PaginationPages/Recipes5/Images/imageye___-_Traditional-vegetable-couscous.jpeg";
import stuffedVegImage from "./PaginationPages/Recipes5/Images/imageye___-_My-Grandmothers-Stuffed-Vegetables.jpeg";
import butternutImage from "./PaginationPages/Recipes5/Images/imageye___-_Butternut-Squash-and-Ham-Quiche.jpeg";
import bakedButternutImage from "./PaginationPages/Recipes5/Images/imageye___-_Baked-Butternut-Squash-Gratin-with-Comte-and-Thyme.jpeg";
import caponImage from "./PaginationPages/Recipes5/Images/imageye___-_Capon-Stuffed-with-Chestnuts-and-Mushrooms.jpeg";
import tenderloinImage from "./PaginationPages/Recipes5/Images/imageye___-_Pork-Tenderloin-in-Puff-Pastry.jpeg";

// Images for page 6
import iceCreamImage from "./PaginationPages/Recipes6/Images/imageye___-_Easy-Ice-Cream-Log-for-Christmas.jpeg";
import pumpkinImage from "./PaginationPages/Recipes6/Images/imageye___-_Pumpkin-Stuffed-with-Mushrooms-Onions-and-Bacon.jpeg";
import vegFlanImage from "./PaginationPages/Recipes6/Images/imageye___-_Winter-Vegetable-Flan.jpeg";
import caponSupremeImage from "./PaginationPages/Recipes6/Images/imageye___-_Capon-Supreme-with-Morels.jpeg";
import pancakesImage from "./PaginationPages/Recipes6/Images/imageye___-_Easy-Thousand-Hole-Pancakes.jpeg";
import rollCakeImage from "./PaginationPages/Recipes6/Images/imageye___-_Light-Strawberry-Roll-Cake-A-Fresh-and-Fluffy-Delight.jpeg";
import appleCakeImage2 from "./PaginationPages/Recipes6/Images/imageye___-_Pumpkin-Apple-Cake-A-Cozy-Fall-Delight.jpeg";
import easyPancakesImage from "./PaginationPages/Recipes6/Images/imageye___-_How-to-Prepare-Easy-Pancakes.jpeg";
import paellaImage from "./PaginationPages/Recipes6/Images/imageye___-_My-holiday-paella.jpeg";

// Images for page 7
import eggsHamImage from "./PaginationPages/Recipes7/Images/imageye___-_Eggs-with-Ham-A-Simple-and-Delicious-Classic.jpeg";
import chickenRisottoImage from "./PaginationPages/Recipes7/Images/imageye___-_Chicken-Risotto.jpeg";
import alsatianImage from "./PaginationPages/Recipes7/Images/imageye___-_Alsatian-Christmas-Stollen.jpeg";
import pumpkinCakeImage from "./PaginationPages/Recipes7/Images/imageye___-_Soft-pumpkin-cake.jpeg";
import blinisImage from "./PaginationPages/Recipes7/Images/imageye___-_Revisited-Blinis-with-Buckwheat-and-Smoked-Salmon.jpeg";
import lasagnaImage2 from "./PaginationPages/Recipes7/Images/imageye___-_Perfect-Lasagna-Soup.jpeg";
import shrimpPizzaImage from "./PaginationPages/Recipes7/Images/imageye___-_How-to-Prepare-Shrimp-Pizza.jpeg";
import carbonaraImage from "./PaginationPages/Recipes7/Images/imageye___-_Italian-Carbonara-Pasta-Without-Cream.jpeg";

// --- Other components ---
import AboutMe from "./AboutMe";
import RecentRecipes from "./RecentRecipes";

// --- Pagination Components ---
import Recipes2 from "./PaginationPages/Recipes2/Recipes2";
import Recipes3 from "./PaginationPages/Recipes3/Recipes3";
import Recipes4 from "./PaginationPages/Recipes4/Recipes4";
import Recipes5 from "./PaginationPages/Recipes5/Recipes5";
import Recipes6 from "./PaginationPages/Recipes6/Recipes6";
import Recipes7 from "./PaginationPages/Recipes7/Recipes7";

export default function Recipes() {
  const navigate = useNavigate();
  const { pageNumber } = useParams();

  // --- Pagination logic ---
  const pageNum = parseInt(pageNumber, 10);
  const [currentPage, setCurrentPage] = useState(isNaN(pageNum) ? 1 : pageNum);
  const totalPages = 7;

  useEffect(() => {
    setCurrentPage(isNaN(pageNum) ? 1 : pageNum);
  }, [pageNum]);

  function handlePageChange(page) {
    navigate(`/page/${page}`);
  }

  // --- Recipe data for each page (already in your file, keep as is) ---
  const recipesPage1 = [
    {
      id: 1,
      title: "Preparing Your Christmas Turkey in Advance",
      date: "December 21, 2024 by Anna Walker",
      image: turkeyImage,
      description:
        "A stuffed turkey is a quintessential dish for the holiday season, cherished for its generosity and comforting flavors. To fully enjoy your guests on the big day, it’s wise to …",
      link: "/preparing-your-christmas-turkey-in-advance",
      category: "Uncategorized",
      categoryLink: "/uncategorized",
      commentLink:
        "/preparing-your-christmas-turkey-in-advance#comment-section",
    },
    {
      id: 2,
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
      id: 3,
      title: "Clementine Tart: A Citrusy Delight",
      date: "December 10, 2024 by Anna Walker",
      image: clementineImage,
      description:
        "Looking for a dessert that captures the bright, zesty flavor of winter? This clementine tart is a refreshing treat that combines the tangy sweetness of clementines with a rich, buttery …",
      link: "/clementine-tart",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/clementine-tart#comment-section",
    },
    {
      id: 4,
      title: "Crème Caramel: A Classic Dessert with Milk and Eggs",
      date: "December 10, 2024 by Anna Walker",
      image: cremeImage,
      description:
        "Crème caramel, also known as caramel custard, is a timeless dessert that combines the creamy richness of milk and eggs with the deep sweetness of caramel. This French-inspired treat is …",
      link: "/creme-caramel",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/creme-caramel#comment-section",
    },
    {
      id: 5,
      title: "Frozen Raspberry Coulis: A Versatile and Refreshing Delight",
      date: "December 10, 2024 by Anna Walker",
      image: raspberryImage,
      description:
        "Frozen raspberry coulis is a sweet and tangy sauce made from raspberries that can elevate any dessert. Whether drizzled over ice cream, cheesecake, pancakes, or used to accompany a slice …",
      link: "/frozen-raspberry-coulis",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/frozen-raspberry-coulis#comment-section",
    },
    {
      id: 6,
      title: "Indian Chicken with Tomato and Rice",
      date: "December 10, 2024 by Anna Walker",
      image: indianChickenImage,
      description:
        "Indian chicken with tomato and rice is a flavorful and satisfying one-pot dish that combines aromatic spices, tender chicken, and perfectly cooked rice. Inspired by the vibrant flavors of Indian …",
      link: "/indian-chicken-with-tomato-and-rice",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/indian-chicken-with-tomato-and-rice#comment-section",
    },
    {
      id: 7,
      title: "Raspberry Mascarpone Sponge Cake",
      date: "December 10, 2024 by Anna Walker",
      image: raspberryMascarponeImage,
      description:
        "Raspberry mascarpone sponge cake is a delicate and delightful dessert that combines the lightness of sponge cake, the creamy richness of mascarpone, and the tangy sweetness of raspberries. Whether for …",
      link: "/raspberry-mascarpone-sponge-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/raspberry-mascarpone-sponge-cake#comment-section",
    },
    {
      id: 8,
      title: "Tuna Pasta Salad Recipe",
      date: "December 10, 2024 by Anna Walker",
      image: tunaPastaImage,
      description:
        "Tuna pasta salad is the ultimate go-to dish for a quick lunch, a light dinner, or a potluck favorite. Combining tender pasta, flaked tuna, crisp vegetables, and a tangy dressing, …",
      link: "/tuna-pasta-salad-recipe",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/tuna-pasta-salad-recipe#comment-section",
    },
    {
      id: 9,
      title: "Green Cabbage Stew: A Hearty and Nutritious Dish",
      date: "December 10, 2024 by Anna Walker",
      image: greenCabbageImage,
      description:
        "Green cabbage stew is a comforting and nourishing meal that’s perfect for chilly days. Packed with vibrant vegetables and a rich broth, this dish is both hearty and healthy.",
      link: "/green-cabbage-stew",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/green-cabbage-stew#comment-section",
    },
  ];

  const recipesPage2 = [
    {
      id: 1,
      title: "Homemade Chicken Cordon Bleu",
      date: "December 10, 2024 by Anna Walker",
      image: chickenCordonBleuImage,
      description:
        "Chicken Cordon Bleu is a classic dish that combines tender chicken breast, savory ham, and gooey melted cheese, all wrapped in a crispy breadcrumb coating. Making it at home is …",
      link: "/homemade-chicken-cordon-bleu",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/homemade-chicken-cordon-bleu#comment-section",
    },
    {
      id: 2,
      title: "Mushroom Lasagna: A Creamy and Savory Delight",
      date: "December 10, 2024 by Anna Walker",
      image: mushroomLasagnaImage,
      description:
        "For those who love the earthy flavor of mushrooms and crave the comforting layers of a classic lasagna, this Mushroom Lasagna is the perfect dish. It’s a delightful twist on …",
      link: "/mushroom-lasagna",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/mushroom-lasagna#comment-section",
    },
    {
      id: 3,
      title: "Salmon and Spinach Lasagna: A Delicious and Elegant Twist",
      date: "December 10, 2024 by Anna Walker",
      image: spinachLasagnaImage,
      description:
        "For a fresh take on a classic comfort food, try this Salmon and Spinach Lasagna. This creamy, flavorful dish combines tender lasagna layers with rich salmon, vibrant spinach, and a …",
      link: "/salmon-and-spinach-lasagna",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/salmon-and-spinach-lasagna#comment-section",
    },
    {
      id: 4,
      title: "Cheap Soft Apple Cake: A Budget-Friendly, Moist Dessert",
      date: "December 10, 2024 by Anna Walker",
      image: appleCakeImage,
      description:
        "If you’re craving a comforting, homemade dessert but don’t want to break the bank, cheap soft apple cake is the perfect solution. This simple, budget-friendly cake combines the sweetness of …",
      link: "/cheap-soft-apple-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/cheap-soft-apple-cake#comment-section",
    },
    {
      id: 5,
      title: "Chef Anna’s Chicken Marbella",
      date: "December 10, 2024 by Anna Walker",
      image: chickenMarbellaImage,
      description:
        "Chicken Marbella is a dish that brings the best of Mediterranean flavors to your table. Combining juicy chicken with sweet prunes, briny olives, capers, and aromatic herbs, this dish is …",
      link: "/chef-annas-chicken-marbella",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/chef-annas-chicken-marbella#comment-section",
    },
    {
      id: 6,
      title: "Smoked Salmon Millefeuille with Lime Sorbet",
      date: "December 9, 2024 by Anna Walker",
      image: smokedSalmonImage,
      description:
        "Smoked salmon millefeuille with lime sorbet is an exquisite and refreshing starter that combines the rich, smoky flavor of salmon with the tangy freshness of lime. The millefeuille, traditionally a …",
      link: "/smoked-salmon-millefeuille-with-lime-sorbet",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/smoked-salmon-millefeuille-with-lime-sorbet#comment-section",
    },
    {
      id: 7,
      title: "Raspberry and Speculoos Verrines: A Sweet, Crunchy Delight",
      date: "December 9, 2024 by Anna Walker",
      image: raspberryImage2,
      description:
        "Raspberry and Speculoos verrines are a perfect blend of smooth, creamy layers and a crunchy, spiced base. These individual desserts are served in clear glasses, showcasing the vibrant colors and …",
      link: "/raspberry-and-speculoos-verrines",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/raspberry-and-speculoos-verrines#comment-section",
    },
    {
      id: 8,
      title: "Light Chocolate Mousse: A Decadent Yet Airy Dessert",
      date: "December 9, 2024 by Anna Walker",
      image: chocolateMousseImage,
      description:
        "Light chocolate mousse is the perfect dessert for those who crave indulgence without feeling too heavy. This airy, velvety mousse is made with rich chocolate and whipped cream, creating a …",
      link: "/light-chocolate-mousse",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/light-chocolate-mousse#comment-section",
    },
    {
      id: 9,
      title: "Raspberry and Pistachio Yule Log: A Festive Fusion of Flavors",
      date: "December 9, 2024 by Anna Walker",
      image: pistachioImage,
      description:
        "Raspberry and pistachio log is an elegant and delicious dessert that combines the sweet-tart flavor of raspberries with the nutty richness of pistachios. This beautiful Yule log, perfect for holiday …",
      link: "/raspberry-and-pistachio-yule-log",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/raspberry-and-pistachio-yule-log#comment-section",
    },
  ];
  const recipesPage3 = [
    {
      id: 1,
      title: "Quick Tuna Tart with Shortcrust Pastry: The Best Recipe",
      date: "December 9, 2024 by Anna Walker",
      image: tunaTartImage,
      description:
        "Looking for a quick, flavorful dish that’s perfect for any occasion? This quick tuna tart with shortcrust pastry is a versatile recipe that can serve as a light dinner, lunch, …",
      link: "/quick-tuna-tart-with-shortcrust-pastry",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/quick-tuna-tart-with-shortcrust-pastry#comment-section",
    },
    {
      id: 2,
      title: "Apple Mascarpone Cake: A Delightful Dessert for All Occasions",
      date: "December 9, 2024 by Anna Walker",
      image: mascarponeCakeImage,
      description:
        "Apple mascarpone cake is a moist, flavorful dessert that perfectly combines the sweetness of apples with the creamy richness of mascarpone cheese. This cake is a wonderful way to celebrate …",
      link: "/apple-mascarpone-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/apple-mascarpone-cake#comment-section",
    },
    {
      id: 3,
      title: "Potato Croquettes with Raw Ham: A Crispy and Savory Treat",
      date: "December 9, 2024 by Anna Walker",
      image: croquettesImage,
      description:
        "Potato croquettes with raw ham are a mouthwatering combination of creamy mashed potatoes and savory cured ham, encased in a golden, crispy crust. Perfect as an appetizer, side dish, or …",
      link: "/potato-croquettes-with-raw-ham",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/potato-croquettes-with-raw-ham#comment-section",
    },
    {
      id: 4,
      title: "Avocado, Shrimp, and Cream Cheese Verrines",
      date: "December 9, 2024 by Anna Walker",
      image: cheeseImage,
      description:
        "Avocado, shrimp, and cream cheese verrines are the perfect blend of creamy, fresh, and savory flavors served in a chic, layered presentation. This dish is ideal for dinner parties, festive …",
      link: "/avocado-shrimp-and-cream-cheese-verrines",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/avocado-shrimp-and-cream-cheese-verrines#comment-section",
    },
    {
      id: 5,
      title:
        "Mushrooms Stuffed with Cream Cheese: A Simple Yet Sophisticated Appetizer",
      date: "December 9, 2024 by Anna Walker",
      image: creamCheeseImage,
      description:
        "Mushrooms stuffed with cream cheese are a delectable appetizer that’s quick to prepare and always a crowd-pleaser. These bite-sized treats combine the earthy flavor of mushrooms with the creamy richness …",
      link: "/mushrooms-stuffed-with-cream-cheese",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/mushrooms-stuffed-with-cream-cheese#comment-section",
    },
    {
      id: 6,
      title: "Potato Tortilla: A Classic Spanish Dish for Every Occasion",
      date: "December 9, 2024 by Anna Walker",
      image: potatoTortillaImage,
      description:
        "The potato tortilla, also known as tortilla de patatas in Spain, is a timeless dish that showcases the beauty of simplicity. With just a few basic ingredients—potatoes, eggs, onions, and …",
      link: "/potato-tortilla",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/potato-tortilla#comment-section",
    },
    {
      id: 7,
      title: "Samosas with Minced Meat: A Crispy, Flavorful Snack",
      date: "December 9, 2024 by Anna Walker",
      image: samosasImage,
      description:
        "Samosas with minced meat are a classic snack enjoyed around the world for their crispy exterior and savory, spiced filling. These delicious triangular pastries, traditionally from South Asia, are packed …",
      link: "/samosas-with-minced-meat",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/samosas-with-minced-meat#comment-section",
    },
    {
      id: 8,
      title: "Spring Rolls with Crab, Chinese Cabbage, and Bamboo Shoots",
      date: "December 9, 2024 by Anna Walker",
      image: springRollsImage,
      description:
        "Spring rolls with crab, Chinese cabbage, and bamboo shoots offer a perfect balance of flavors and textures, with the delicate sweetness of crab meat, the crunchiness of fresh bamboo shoots, …",
      link: "/spring-rolls-with-crab-chinese-cabbage-and-bamboo-shoots",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/spring-rolls-with-crab-chinese-cabbage-and-bamboo-shoots#comment-section",
    },
    {
      id: 9,
      title:
        "Cake with Sun-Dried Vegetables and Mozzarella: A Savory Delight for Every Occasion",
      date: "December 9, 2024 by Anna Walker",
      image: cakeImage,
      description:
        "Looking for a unique, savory cake that’s both flavorful and satisfying? This cake with sun-dried vegetables and mozzarella is a perfect choice! Combining the richness of sun-dried tomatoes, roasted vegetables, …",
      link: "/cake-with-sun-dried-vegetables-and-mozzarella",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink:
        "/cake-with-sun-dried-vegetables-and-mozzarella#comment-section",
    },
  ];
  const recipesPage4 = [
    {
      id: 1,
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
      id: 2,
      title:
        "Crustless (and Gluten-Free) Quiche: A Delicious and Versatile Dish",
      date: "December 9, 2024 by Anna Walker",
      image: crustlessImage,
      description:
        "A crustless quiche is a perfect option for anyone seeking a lighter, gluten-free version of the classic dish. Packed with eggs, cheese, vegetables, and your favorite proteins, this quiche is …",
      link: "/crustless-and-gluten-free-quiche",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/crustless-and-gluten-free-quiche#comment-section",
    },
    {
      id: 3,
      title: "Apple Strudel: A Classic Dessert with a Warm, Spiced Filling",
      date: "December 9, 2024 by Anna Walker",
      image: appleStrudelImage,
      description:
        "Apple strudel, or Apfelstrudel, is a classic dessert originating from Austria, but it has become beloved worldwide. This delicate pastry features a thin, flaky crust wrapped around a filling of …",
      link: "/apple-strudel-a-classic-dessert-with-a-warm-spiced-filling",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/apple-strudel-a-classic-dessert-with-a-warm-spiced-filling#comment-section",
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
      title: "Baked Rice Pudding: A Creamy, Comforting Dessert",
      date: "December 9, 2024 by Anna Walker",
      image: ricePuddingImage,
      description:
        "Rice pudding is a beloved dessert that brings warmth and comfort to any occasion. While stovetop versions are popular, baked rice pudding takes the classic dish to the next level. …",
      link: "/baked-rice-pudding-a-creamy-comforting-dessert",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/baked-rice-pudding-a-creamy-comforting-dessert#comment-section",
    },

    {
      id: 6,
      title: "Easy Mascarpone and Raspberry Christmas Yule Log",
      date: "December 9, 2024 by Anna Walker",
      image: mascarponeImage,
      description:
        "The Yule log, or Bûche de Noël, is a traditional Christmas dessert that brings festive joy to any celebration. This easy mascarpone and raspberry Yule log offers a fresh twist …",
      link: "/easy-mascarpone-and-raspberry-christmas-yule-log",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/easy-mascarpone-and-raspberry-christmas-yule-log#comment-section",
    },

    {
      id: 7,
      title: "Christmas Cake with Pear, Speculoos, and Salted Butter Caramel",
      date: "December 9, 2024 by Anna Walker",
      image: christmascakeImage,
      description:
        "Christmas is the perfect time to indulge in festive desserts, and this Christmas cake with pear, speculoos, and salted butter caramel is a true holiday showstopper. Combining the warm, spiced …",
      link: "/christmas-cake-with-pear-speculoos-and-salted-butter-caramel",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/christmas-cake-with-pear-speculoos-and-salted-butter-caramel#comment-section",
    },

    {
      id: 8,
      title: "Pork Stir-Fry in the Cookeo",
      date: "December 9, 2024 by Anna Walker",
      image: porkStirImage,
      description:
        "Looking for a quick and flavorful dish to make in your Cookeo? This pork stir-fry is the perfect solution! Packed with tender pork, crisp vegetables, and a savory sauce, this …",
      link: "/pork-stir-fry-in-the-cookeo",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/pork-stir-fry-in-the-cookeo#comment-section",
    },
    {
      id: 9,
      title: "Knodel – Austrian Savory Bread Dumplings",
      date: "December 9, 2024 by Anna Walker",
      image: knodelImage,
      description:
        "Knödel, a staple of Austrian cuisine, are hearty and versatile bread dumplings that embody the essence of comfort food. Often served as a side dish or main course, these dumplings …",
      link: "/knodel-austrian-savory-bread-dumplings",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/knodel-austrian-savory-bread-dumplings#comment-section",
    },
  ];
  const recipesPage5 = [
    {
      id: 1,
      title: "Prepare Easy Lasagna Bolognese",
      date: "December 9, 2024 by Anna Walker",
      image: lasagnaImage,
      description:
        "Lasagna Bolognese is a timeless classic that combines layers of rich meat sauce, creamy béchamel, and tender pasta sheets into a dish that’s comforting and satisfying. While traditional recipes can …",
      link: "/prepare-easy-lasagna-bolognese",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/prepare-easy-lasagna-bolognese#comment-section",
    },
    {
      id: 2,
      title: "Easy and Quick Tartiflette Recipe",
      date: "December 9, 2024 by Anna Walker",
      image: tartifletteImage,
      description:
        "Tartiflette, the quintessential French comfort food, originates from the Savoie region. Traditionally made with creamy Reblochon cheese, potatoes, lardons, and onions, it’s the ultimate indulgent dish for winter evenings. This …",
      link: "/easy-and-quick-tartiflette-recipe",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/easy-and-quick-tartiflette-recipe#comment-section",
    },
    {
      id: 3,
      title: "White Chocolate Raspberry Layer Cake",
      date: "December 8, 2024 by Anna Walker",
      image: layerCakeImage,
      description:
        "Indulge in the elegance and decadence of a white chocolate raspberry layer cake. This dessert combines fluffy vanilla cake layers with a creamy white chocolate frosting and a vibrant raspberry …",
      link: "/white-chocolate-raspberry-layer-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/white-chocolate-raspberry-layer-cake#comment-section",
    },
    {
      id: 4,
      title: "Traditional Vegetable Couscous: A Heartwarming Moroccan Classic",
      date: "December 7, 2024 by Anna Walker",
      image: couscousImage,
      description:
        "Couscous with vegetables is a beloved dish originating from North Africa, celebrated for its vibrant flavors and hearty ingredients. This dish combines fluffy couscous with an array of colorful vegetables, …",
      link: "/traditional-vegetable-couscous",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/traditional-vegetable-couscous#comment-section",
    },
    {
      id: 5,
      title: "My Grandmother’s Stuffed Vegetables: A Family Tradition",
      date: "December 6, 2024 by Anna Walker",
      image: stuffedVegImage,
      description:
        "There’s something deeply comforting about a dish that carries the warmth of family memories. Stuffed vegetables, a timeless recipe passed down from my grandmother, are more than just a meal—they’re …",
      link: "/my-grandmothers-stuffed-vegetables",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/my-grandmothers-stuffed-vegetables#comment-section",
    },
    {
      id: 6,
      title: "Butternut Squash and Ham Quiche: A Seasonal Delight",
      date: "December 5, 2024 by Anna Walker",
      image: butternutImage,
      description:
        "If you’re looking for a dish that’s perfect for brunch, lunch, or a light dinner, look no further than this Butternut Squash and Ham Quiche. This recipe combines the creamy …",
      link: "/butternut-squash-and-ham-quiche",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/butternut-squash-and-ham-quiche#comment-section",
    },
    {
      id: 7,
      title: "Baked Butternut Squash Gratin with Comté and Thyme",
      date: "December 5, 2024 by Anna Walker",
      image: bakedButternutImage,
      description:
        "If you’re looking for a comforting and elegant side dish, this Baked Butternut Squash Gratin with Comté and Thyme is the perfect choice. Creamy layers of sweet butternut squash are …",
      link: "/baked-butternut-squash-gratin-with-comte-and-thyme",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink:
        "/baked-butternut-squash-gratin-with-comte-and-thyme#comment-section",
    },
    {
      id: 8,
      title: "Capon Stuffed with Chestnuts and Mushrooms",
      date: "December 5, 2024 by Anna Walker",
      image: caponImage,
      description:
        "A centerpiece worthy of any holiday feast, capon stuffed with chestnuts and mushrooms is a dish that exudes warmth, tradition, and indulgence. This recipe combines the tender and juicy meat …",
      link: "/capon-stuffed-with-chestnuts-and-mushrooms",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink:
        "/capon-stuffed-with-chestnuts-and-mushrooms#comment-section",
    },
    {
      id: 9,
      title: "Pork Tenderloin in Puff Pastry",
      date: "December 4, 2024 by Anna Walker",
      image: tenderloinImage,
      description:
        "Delicate, tender, and wrapped in golden puff pastry, pork tenderloin in puff pastry is an elegant and flavorful dish that’s perfect for special occasions or a comforting dinner. This recipe …",
      link: "/pork-tenderloin-in-puff-pastry",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/pork-tenderloin-in-puff-pastry#comment-section",
    },
  ];
  const recipesPage6 = [
    {
      id: 1,
      title: "Easy Ice Cream Log for Christmas: A Delightful Frozen Treat",
      date: "December 2, 2024 by Anna Walker",
      image: iceCreamImage,
      description:
        "Looking for a festive dessert that’s as simple to prepare as it is delicious? This easy ice cream log is the perfect solution for your Christmas celebrations. With its creamy …",
      link: "/easy-ice-cream-log-for-christmas",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/easy-ice-cream-log-for-christmas#comment-section",
    },
    {
      id: 2,
      title:
        "Pumpkin Stuffed with Mushrooms, Onions, and Bacon: A Savory Fall Delight",
      date: "December 2, 2024 by Anna Walker",
      image: pumpkinImage,
      description:
        "As the cooler months roll in, what better way to embrace the flavors of fall than with a savory pumpkin stuffed with mushrooms, onions, and bacon? This dish brings together …",
      link: "/pumpkin-stuffed-with-mushrooms-onions-and-bacon",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink:
        "/pumpkin-stuffed-with-mushrooms-onions-and-bacon#comment-section",
    },
    {
      id: 3,
      title: "Winter Vegetable Flan: A Comforting Seasonal Recipe",
      date: "December 1, 2024 by Anna Walker",
      image: vegFlanImage,
      description:
        "Warm, comforting, and packed with the goodness of winter vegetables, this Winter Vegetable Flan is a versatile dish that can be served as a light main course, a side dish, …",
      link: "/winter-vegetable-flan",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/winter-vegetable-flan#comment-section",
    },
    {
      id: 4,
      title: "Capon Supreme with Morels: A Refined Holiday Recipe",
      date: "December 1, 2024 by Anna Walker",
      image: caponSupremeImage,
      description:
        "When it comes to festive meals, few dishes rival the elegance and flavor of Capon Supreme with Morels. This dish combines the tender, juicy meat of capon with the earthy, …",
      link: "/capon-supreme-with-morels",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/capon-supreme-with-morels#comment-section",
    },
    {
      id: 5,
      title: "Easy Thousand-Hole Pancakes (Beghrir Express, Algerian Recipe)",
      date: "December 1, 2024 by Anna Walker",
      image: pancakesImage,
      description:
        "Beghrir, often called “thousand-hole pancakes,” is a delightful Algerian treat with a light, spongy texture and a unique appearance thanks to the tiny bubbles that form during cooking. These semolina-based …",
      link: "/easy-thousand-hole-pancakes-beghrir-express-algerian-recipe",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/easy-thousand-hole-pancakes-beghrir-express-algerian-recipe#comment-section",
    },
    {
      id: 6,
      title: "Light Strawberry Roll Cake: A Fresh and Fluffy Delight",
      date: "November 30, 2024 by Anna Walker",
      image: rollCakeImage,
      description:
        "Looking for a dessert that’s light, fruity, and perfect for any occasion? This light strawberry roll cake checks all the boxes. With its airy sponge cake, creamy filling, and bursts …",
      link: "/light-strawberry-roll-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/light-strawberry-roll-cake#comment-section",
    },
    {
      id: 7,
      title: "Pumpkin Apple Cake: A Cozy Fall Delight",
      date: "November 29, 2024 by Anna Walker",
      image: appleCakeImage2,
      description:
        "What’s better than a dessert that combines the earthy sweetness of pumpkin and the crisp tanginess of apples? This pumpkin apple cake is the perfect treat for cozy autumn afternoons …",
      link: "/pumpkin-apple-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/pumpkin-apple-cake#comment-section",
    },
    {
      id: 8,
      title: "How to Prepare Easy Pancakes",
      date: "November 9, 2024 by Anna Walker",
      image: easyPancakesImage,
      description:
        "There’s nothing quite like a stack of warm, fluffy pancakes to start your day on a delicious note. Pancakes are a classic breakfast favorite, and the best part? They’re incredibly …",
      link: "/how-to-prepare-easy-pancakes",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/how-to-prepare-easy-pancakes#comment-section",
    },
    {
      id: 9,
      title: "My Holiday Paella: A Festive Feast for Special Occasions",
      date: "November 9, 2024 by Anna Walker",
      image: paellaImage,
      description:
        "Nothing brings people together quite like a colorful, flavorful paella. This Spanish classic, often associated with gatherings and celebrations, is the perfect centerpiece for your holiday table. Packed with saffron-infused …",
      link: "/my-holiday-paella",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/my-holiday-paella#comment-section",
    },
  ];
  const recipesPage7 = [
    {
      id: 1,
      title: "Eggs with Ham: A Simple and Delicious Classic",
      date: "November 8, 2024 by Anna Walker",
      image: eggsHamImage,
      description:
        "Sometimes, the simplest dishes are the most satisfying. Eggs with ham is a timeless classic that combines two versatile ingredients to create a meal that’s quick, delicious, and perfect for …",
      link: "/eggs-with-ham-a-simple-and-delicious-classic",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/eggs-with-ham-a-simple-and-delicious-classic#comment-section",
    },
    {
      id: 2,
      title: "Chicken Risotto: The Best Recipe",
      date: "November 5, 2024 by Anna Walker",
      image: chickenRisottoImage,
      description:
        "Rich, creamy, and deeply satisfying, chicken risotto is a timeless Italian dish that’s perfect for cozy dinners or special occasions. Made with tender chicken, Arborio rice, and flavorful stock, this …",
      link: "/chicken-risotto-the-best-recipe",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/chicken-risotto-the-best-recipe#comment-section",
    },
    {
      id: 3,
      title: "Alsatian Christmas Stollen: A Traditional Holiday Delight",
      date: "December 9, 2024 by Anna Walker",
      image: alsatianImage,
      description:
        "Alsatian Christmas Stollen is a festive, yeasted bread that has become a beloved holiday tradition in the Alsace region of France. This sweet, spiced bread is typically filled with dried …",
      link: "/alsatian-christmas-stollen",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/alsatian-christmas-stollen#comment-section",
    },
    {
      id: 4,
      title: "Soft Pumpkin Cake: A Perfect Fall Treat",
      date: "December 9, 2024 by Anna Walker",
      image: pumpkinCakeImage,
      description:
        "Soft pumpkin cake is the epitome of autumn comfort. With its moist, tender texture and rich, spiced flavor, this cake is a true celebration of the season’s best ingredients. Whether …",
      link: "/soft-pumpkin-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/soft-pumpkin-cake#comment-section",
    },
    {
      id: 5,
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
      id: 6,
      title: "How to Prepare Lasagna Soup",
      date: "December 9, 2024 by Anna Walker",
      image: lasagnaImage2,
      description:
        "If you love lasagna but are short on time or want something lighter, lasagna soup is the perfect alternative! This one-pot dish combines all the rich, comforting flavors of traditional …",
      link: "/how-to-prepare-lasagna-soup",
      category: "Lunch",
      categoryLink: "/category/lunch",
      commentLink: "/how-to-prepare-lasagna-soup#comment-section",
    },
    {
      id: 7,
      title: "How to Prepare Shrimp Pizza: A Delicious Seafood Twist",
      date: "December 3, 2024 by Anna Walker",
      image: shrimpPizzaImage,
      description:
        "If you’re craving something a little different from the usual pizza toppings, why not try a shrimp pizza? The delicate sweetness of shrimp combined with tangy tomato sauce, melted cheese, …",
      link: "/how-to-prepare-shrimp-pizza",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/how-to-prepare-shrimp-pizza#comment-section",
    },
    {
      id: 8,
      title: "Italian Carbonara Pasta Without Cream: The Authentic Recipe",
      date: "November 9, 2024 by Anna Walker",
      image: carbonaraImage,
      description:
        "Forget the cream! Authentic Italian Carbonara is a creamy, flavorful pasta dish made without any heavy cream. The magic lies in the combination of eggs, cheese, pancetta, and pasta water, …",
      link: "/italian-carbonara-pasta-without-cream",
      category: "Dinner",
      categoryLink: "/category/dinner",
      commentLink: "/italian-carbonara-pasta-without-cream#comment-section",
    },
  ];

  // --- Combine all recipes for search and suggestions ---
  const allRecipes = [
    ...recipesPage1,
    ...recipesPage2,
    ...recipesPage3,
    ...recipesPage4,
    ...recipesPage5,
    ...recipesPage6,
    ...recipesPage7,
  ];

  // --- SEARCH BAR LOGIC STARTS HERE ---

  // State for search input and suggestion dropdown
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Limit suggestions to 4, match only from start of title
  const suggestions = searchQuery
    ? allRecipes
        .filter((recipe) =>
          recipe.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
        .slice(0, 4)
    : [];

  // When user types, update searchQuery and show suggestions
  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  }

  // When user clicks a suggestion, fill input and filter cards (don't navigate)
  function handleSuggestionClick(recipe) {
    setSearchQuery(recipe.title);
    setShowSuggestions(false);
  }

  // When user clicks search icon or presses Enter, just hide suggestions
  function handleSearchSubmit(e) {
    if (e) e.preventDefault();
    setShowSuggestions(false);
  }

  // --- LIVE FILTERING: as user types, filter cards below in real time ---
  // If searchQuery is not empty, show all matching recipes from all pages
  // If searchQuery is empty, show recipes for the current page
  const recipesToShow = searchQuery
    ? allRecipes.filter((recipe) =>
        recipe.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    : (
        currentPage === 1 ? recipesPage1 :
        currentPage === 2 ? recipesPage2 :
        currentPage === 3 ? recipesPage3 :
        currentPage === 4 ? recipesPage4 :
        currentPage === 5 ? recipesPage5 :
        currentPage === 6 ? recipesPage6 :
        recipesPage7
      );

  // --- SEARCH BAR LOGIC ENDS HERE ---

  return (
    <div>
      {/* Header */}
      <div className={styles.textH}>
        <h3>All Recipes Categories</h3>
      </div>

      {/* Search Bar with autocomplete and submit */}
      <form
        className={styles.SearchRecipes}
        onSubmit={handleSearchSubmit}
        style={{ position: "relative" }}
      >
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          suggestions={showSuggestions ? suggestions : []}
          onSuggestionClick={handleSuggestionClick}
          onSearchIconClick={handleSearchSubmit}
        />
      </form>

      {/* Recipes grid: show filtered or default for current page */}
      <div className={styles.grid}>
        {recipesToShow.length === 0 && searchQuery ? (
          <div style={{ color: "pink", padding: "2rem" }}>
            No recipes found for "{searchQuery}"
          </div>
        ) : (
          recipesToShow.map((recipe) => (
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
          ))
        )}
      </div>

      {/* Pagination only shows when not searching */}
      {!searchQuery && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}

      {/* Other components */}
      <div>
        <AboutMe />
        <RecentRecipes />
      </div>
    </div>
  );
}
