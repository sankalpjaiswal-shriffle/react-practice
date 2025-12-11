import { memo } from "react";
const SearchBar = memo(({ setSearch }) => {
  console.log("render");
  return (
    <div className="flex flex-col items-center justify-center">
      <h3>Search product</h3>
      <input
        className="border-2 rounded"
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
});

export default SearchBar;
