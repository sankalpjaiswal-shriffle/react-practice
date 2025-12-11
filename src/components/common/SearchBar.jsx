import { memo } from "react";
import { debounce } from "../../utils/debounce";
const SearchBar = memo(({ setSearch }) => {
  const handleSearch = debounce((e) => {
    let value = e.target.value;
    if (value.length >= 2) {
      setSearch(value);
    } else {
      setSearch(null);
    }
  }, 500);

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-dark dark:text-white">Search product</h3>
      <input
        className="border-2 rounded dark:border-white text-black dark:text-white"
        type="text"
        name="search"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
});

export default SearchBar;
