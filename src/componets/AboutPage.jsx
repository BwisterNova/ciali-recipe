import styles from "./aboutPage.module.css";
import annaWalkerImage from "../img/AnnaWalker.jpg";

export default function AboutPage() {
  return (
    <section>
      <div className={styles.aboutContainer}>
        <h2>About Me</h2>
        <p>
          Welcome to Ciali Recipes, your ultimate destination for quick,
          delicious meals that anyone can create! Whether you’re a beginner
          finding your way around the kitchen or a seasoned home cook, there’s
          something here for you. I’m Amanda—an AI-powered culinary companion
          with a mission to make cooking enjoyable, stress-free, and accessible
          to everyone.
        </p>

        <h3>Why Ciali Recipes?</h3>
        <p>
          Cooking should be a pleasure, not a chore. That’s why Ciali Recipes is
          packed with fast, easy, and flavorful dishes designed to fit your busy
          lifestyle. From speedy weeknight dinners and kid-friendly favorites to
          adventurous new flavors, you’ll find recipes to suit every occasion.
        </p>

        <h3>A Tech-Driven Culinary Touch</h3>
        <p>
          As an AI chef, I combine advanced technology with a love for food to
          bring you recipes that are simple, tasty, and foolproof. My
          ever-growing culinary knowledge allows me to suggest the best
          ingredients, techniques, and flavor combinations to ensure success in
          the kitchen every time. Think of me as your digital sous chef, guiding
          you through every step.
        </p>

        <h3>Who Is Amanda?</h3>
        <p>
          A chef with a passion for turning simple ingredients into
          unforgettable meals. Cooking has been my creative outlet for as long
          as I can remember, and I believe that food is more than just
          sustenance—it’s a way to bring people together, spark joy, and tell
          stories.
        </p>

        <figure>
          <img
            src={annaWalkerImage}
            alt="Anna Walker, the creator of Ciali Recipes"
            className={styles.aboutImage}
          />
          <figcaption>Anna Walker - Creator of Ciali Recipes</figcaption>
        </figure>

        <p>
          On this site, you’ll find a collection of my favorite recipes, each
          one crafted with love and tested in my own kitchen. Whether you’re
          looking for quick weekday dinners, indulgent desserts, or tips to
          elevate your cooking skills, I’m here to guide you every step of the
          way.
        </p>

        <h3>What You’ll Find Here</h3>
        <p>
          At Ciali Recipes, you’ll discover a variety of meals—from quick
          breakfasts and hearty lunches to indulgent desserts and everything in
          between. Every recipe is designed to be versatile, allowing you to
          adapt it to your tastes and dietary needs.
        </p>

        <p>
          Beyond recipes, I share kitchen hacks, ingredient guides, and tips to
          make cooking even easier. Plus, I explore seasonal trends and fresh
          ideas to keep your kitchen inspired all year long.
        </p>

        <h3>Join Our Community</h3>
        <p>
          Ciali Recipes isn’t just a blog—it’s a community of food lovers who
          share a passion for great, simple meals. Dive in, try out recipes, and
          share your experiences. Need advice or have a question? I’m here to
          help! Together, we can make cooking a joyful part of your day.
        </p>

        <p>
          Thank you for stopping by. Let’s create something delicious together
          today!
        </p>
      </div>
    </section>
  );
}
