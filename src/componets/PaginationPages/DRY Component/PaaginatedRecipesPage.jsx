import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Search Bar/SearchBar";
import { FiFolder, FiMessageCircle } from "react-icons/fi";
import styles from "../../recipe.module.css";

export default function PaginatedRecipesPage({ recipes }) {
  const navigate = useNavigate();

  // --- SEARCH BAR LOGIC STARTS HERE ---

  // State for search input and suggestion dropdown
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter recipes for suggestions as user types
  const suggestions = searchQuery
    ? recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Handle input change in search bar
  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  }

  // Handle suggestion click (autocomplete)
  function handleSuggestionClick(recipe) {
    setSearchQuery(recipe.title); // Fill input with selected title
    setShowSuggestions(false); // Hide suggestions
    navigate(recipe.link); // Navigate to recipe page
  }

  // Filter recipes for display (optional: filter cards as you type)
  const filteredRecipes = searchQuery
    ? recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : recipes;

  // --- SEARCH BAR LOGIC ENDS HERE ---

  return (
    <div>
      {/* Search Bar with autocomplete */}
      <div className={styles.SearchRecipes}>
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          suggestions={showSuggestions ? suggestions : []}
          onSuggestionClick={handleSuggestionClick}
        />
      </div>

      {/* Recipes grid for this page */}
      <div className={styles.grid}>
        {filteredRecipes.map((recipe) => (
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
      </div>
    </div>
  );
}
