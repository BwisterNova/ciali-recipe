import { useNavigate } from "react-router-dom";
import styles from "./dessert2.module.css";
import { FiFolder, FiMessageCircle } from "react-icons/fi";
//for images
import mascarponeImage from "./Images/mascarponeImage.jpeg";
import strudelImage from "./Images/strudelImage.jpeg";
import puddingImage from "./Images/puddingImage.jpeg";
import easyMascarponeImage from "./Images/easyMascarponeImage.jpeg";
import cakeImage from "./Images/cakeImage.jpeg";
import chocolateImage from "./Images/chocolateImage.jpeg";
import iceCreamImage from "./Images/iceCreamImage.jpeg";
import pancakesImage from "./Images/pancakesImage.jpeg";
import rollCakeImage from "./Images/rollCakeImage.jpeg";
import pumpkinCakeImage from "./Images/pumpkinCakeImage.jpeg";
import softPumpkinImage from "./Images/softPumpkinImage.jpeg";

export default function Desserts2({ currentPage }) {
  const navigate = useNavigate();

  const dessert2Recipes = [
    {
      id: 1,
      title: "Apple Mascarpone Cake: A Delightful Dessert for All Occasions",
      date: "December 9, 2024 by Anna Walker",
      Image: mascarponeImage,
      description:
        "Apple mascarpone cake is a moist, flavorful dessert that perfectly combines the sweetness of apples with the creamy richness of mascarpone cheese. This cake is a wonderful way to celebrate …",
      link: "/apple-mascarpone-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/apple-mascarpone-cake#comment-section",
    },
    {
      id: 2,
      title: "Apple Strudel: A Classic Dessert with a Warm, Spiced Filling",
      date: "December 9, 2024 by Anna Walker",
      Image: strudelImage,
      description:
        "Apple strudel, or Apfelstrudel, is a classic dessert originating from Austria, but it has become beloved worldwide. This delicate pastry features a thin, flaky crust wrapped around a filling of …",
      link: "/apple-strudel-a-classic-dessert-with-a-warm-spiced-filling",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/apple-strudel-a-classic-dessert-with-a-warm-spiced-filling#comment-section",
    },
    {
      id: 3,
      title: "Baked Rice Pudding: A Creamy, Comforting Dessert",
      date: "December 9, 2024 by Anna Walker",
      Image: puddingImage,
      description:
        "Rice pudding is a beloved dessert that brings warmth and comfort to any occasion. While stovetop versions are popular, baked rice pudding takes the classic dish to the next level. …",
      link: "/baked-rice-pudding-a-creamy-comforting-dessert",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/baked-rice-pudding-a-creamy-comforting-dessert#comment-section",
    },
    {
      id: 4,
      title: "Easy Mascarpone and Raspberry Christmas Yule Log",
      date: "December 9, 2024 by Anna Walker",
      Image: easyMascarponeImage,
      description:
        "The Yule log, or Bûche de Noël, is a traditional Christmas dessert that brings festive joy to any celebration. This easy mascarpone and raspberry Yule log offers a fresh twist …",
      link: "/easy-mascarpone-and-raspberry-christmas-yule-log",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/easy-mascarpone-and-raspberry-christmas-yule-log#comment-section",
    },
    {
      id: 5,
      title: "Christmas Cake with Pear, Speculoos, and Salted Butter Caramel",
      date: "December 9, 2024 by Anna Walker",
      Image: cakeImage,
      description:
        "Christmas is the perfect time to indulge in festive desserts, and this Christmas cake with pear, speculoos, and salted butter caramel is a true holiday showstopper. Combining the warm, spiced …",
      link: "/christmas-cake-with-pear-speculoos-and-salted-butter-caramel",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/christmas-cake-with-pear-speculoos-and-salted-butter-caramel#comment-section",
    },
    {
      id: 6,
      title: "White Chocolate Raspberry Layer Cake",
      date: "December 8, 2024 by Anna Walker",
      Image: chocolateImage,
      description:
        "Indulge in the elegance and decadence of a white chocolate raspberry layer cake. This dessert combines fluffy vanilla cake layers with a creamy white chocolate frosting and a vibrant raspberry …",
      link: "/white-chocolate-raspberry-layer-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/white-chocolate-raspberry-layer-cake#comment-section",
    },
    {
      id: 7,
      title: "Easy Ice Cream Log for Christmas: A Delightful Frozen Treat",
      date: "December 2, 2024 by Anna Walker",
      Image: iceCreamImage,
      description:
        "Looking for a festive dessert that’s as simple to prepare as it is delicious? This easy ice cream log is the perfect solution for your Christmas celebrations. With its creamy …",
      link: "/easy-ice-cream-log-for-christmas",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/easy-ice-cream-log-for-christmas#comment-section",
    },

    {
      id: 8,
      title: "Easy Thousand-Hole Pancakes (Beghrir Express, Algerian Recipe)",
      date: "December 1, 2024 by Anna Walker",
      Image: pancakesImage,
      description:
        "Beghrir, often called “thousand-hole pancakes,” is a delightful Algerian treat with a light, spongy texture and a unique appearance thanks to the tiny bubbles that form during cooking. These semolina-based …",
      link: "/easy-thousand-hole-pancakes-beghrir-express-algerian-recipe",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink:
        "/easy-thousand-hole-pancakes-beghrir-express-algerian-recipe#comment-section",
    },
    {
      id: 9,
      title: "Light Strawberry Roll Cake: A Fresh and Fluffy Delight",
      date: "November 30, 2024 by Anna Walker",
      Image: rollCakeImage,
      description:
        "Looking for a dessert that’s light, fruity, and perfect for any occasion? This light strawberry roll cake checks all the boxes. With its airy sponge cake, creamy filling, and bursts …",
      link: "/light-strawberry-roll-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/light-strawberry-roll-cake#comment-section",
    },
    {
      id: 10,
      title: "Pumpkin Apple Cake: A Cozy Fall Delight",
      date: "November 29, 2024 by Anna Walker",
      Image: pumpkinCakeImage,
      description:
        "What’s better than a dessert that combines the earthy sweetness of pumpkin and the crisp tanginess of apples? This pumpkin apple cake is the perfect treat for cozy autumn afternoons …",
      link: "/pumpkin-apple-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/pumpkin-apple-cake#comment-section",
    },
    {
      id: 11,
      title: "Soft Pumpkin Cake: A Perfect Fall Treat",
      date: "December 9, 2024 by Anna Walker",
      Image: softPumpkinImage,
      description:
        "Soft pumpkin cake is the epitome of autumn comfort. With its moist, tender texture and rich, spiced flavor, this cake is a true celebration of the season’s best ingredients. Whether …",
      link: "/soft-pumpkin-cake",
      category: "Desserts",
      categoryLink: "/category/desserts",
      commentLink: "/soft-pumpkin-cake#comment-section",
    },
  ];
  return (
    <div className={styles.grid}>
      {currentPage === 2 && (
        <>
          {dessert2Recipes.map((recipes) => (
            <div className={styles.bodyContainer} key={recipes.id}>
              <h3 className={styles.recipesTitle}>{recipes.title}</h3>
              <p className={styles.recipesDate}>{recipes.date}</p>
              <img src={recipes.Image} alt={recipes.title} />
              <h4 className={styles.recipesDescription}>
                {recipes.description}
              </h4>
              <button onClick={() => navigate(recipes.link)}>READ MORE</button>
              <div className={styles.bodyBottom}>
                <p onClick={() => navigate(recipes.categoryLink)}>
                  <FiFolder /> {recipes.category}
                </p>
                <p
                  onClick={() => navigate(recipes.commentLink)}
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
