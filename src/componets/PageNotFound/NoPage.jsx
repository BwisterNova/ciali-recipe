import styles from "./noPage.module.css";
export default function NoPage() {
  return (
    <div>
      <div className={styles.NoPageContainer}>
        <h3>Oops!, Page doesn't exist...😶</h3>
        <p>
          To Navigate to a page you can find your Recipe.{" "}
          <a href="/">Click here</a>{" "}
        </p>
      </div>
    </div>
  );
}
