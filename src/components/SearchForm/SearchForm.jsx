import { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./SearchForm.module.css";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/movies?query=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.search}
        type="text"
        id="query"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
