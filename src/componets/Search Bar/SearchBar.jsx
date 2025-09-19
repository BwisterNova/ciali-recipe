import styles from "./searchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({
  value,
  onChange,
  suggestions,
  onSuggestionClick,
  onSearchIconClick, // New prop
}) {
  // Handle Enter key
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (onSearchIconClick) onSearchIconClick(e);
    }
  }

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className={styles.searchInput}
        autoComplete="on"
        onKeyDown={handleKeyDown}
      />
      {suggestions.length > 0 && (
        <div className={styles.suggestionsList}>
          <ul>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => onSuggestionClick(suggestion)}
                className={styles.suggestionItem}
              >
                {suggestion.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Make search icon clickable */}
      <AiOutlineSearch
        className={styles.searchIcon}
        onClick={onSearchIconClick}
        tabIndex={0}
        aria-label="Search"
      />
    </div>
  );
}
