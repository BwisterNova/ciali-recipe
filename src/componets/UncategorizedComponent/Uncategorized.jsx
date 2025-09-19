import turkeyImage from "./img/Preparing-Your-Christmas-Turkey-in-Advance-Tips-and-Recipes.jpg";
import styles from "./uncategorized.module.css";
import { FiFolder, FiMessageCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function Uncategorized() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className={styles.uncategorizedContainer}>
        <h3>Preparing Your Christmas Turkey in Advance : Tips and Recipes</h3>
        <p>December 21, 2024 by Anna Walker</p>
        <img
          src={turkeyImage}
          alt="Preparing Your Christmas Turkey in Advance"
        />
        <h4>
          A stuffed turkey is a quintessential dish for the holiday season,
          cherished for its generosity and comforting flavors. To fully enjoy
          your guests on the big day, it’s wise to …
        </h4>
        <button onClick={() => navigate("/christmas-turkey")}>READ MORE</button>
        <div className={styles.uncategorizedbuttom}>
          <p onClick={() => navigate("/uncategorized")}>
            <FiFolder /> Uncategorized
          </p>
          <p style={{ marginTop: "-10px" }}>
            <FiMessageCircle /> Leave a comment
          </p>
        </div>
      </div>
    </div>
  );
}
