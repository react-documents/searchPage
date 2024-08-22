const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form className="flex flex-col gap-2">
      <input type="text" className="border-gray border-2 p-2" placeholder="Search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
      <label className="flex items-center gap-2">
        <input className="size-4" type="checkbox" value={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;