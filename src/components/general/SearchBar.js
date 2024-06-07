import './general.css';

const SearchBar = ({ title, setTitle }) => {
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <input
      className="search-bar"
      value={title}
      onChange={handleInput}
      placeholder="Search Movies"
    ></input>
  );
};

export default SearchBar;
