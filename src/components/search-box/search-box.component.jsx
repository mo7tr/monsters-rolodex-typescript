import "./search-box.styles.css";

const SearchBox = ({ onSearchHandler, className, placeholder }) => {
  console.log("render SearchBox component");

  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default SearchBox;
