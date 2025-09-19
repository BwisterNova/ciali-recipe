import styles from "./recipes2.module.css";
import { FiFolder, FiMessageCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Recipes2({ recipes }) {
  const navigate = useNavigate();

  return (
    <div className={styles.grid}>
      {recipes.map((recipe) => (
        <div className={styles.bodyContainer} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.date}</p>
          <img src={recipe.image} alt={recipe.title} />
          <h4>{recipe.description}</h4>
          <button onClick={() => navigate(recipe.link)}>READ MORE</button>
          <div className={styles.bodyBottom}>
            <p onClick={() => navigate(recipe.categoryLink)}>
              <FiFolder /> {recipe.category}
            </p>
            <p
              style={{ marginTop: "-10px" }}
              onClick={() => navigate(recipe.commentLink)}
            >
              <FiMessageCircle /> Leave a comment
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
