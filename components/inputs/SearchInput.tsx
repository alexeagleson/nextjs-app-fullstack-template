export interface ISearchInput {
  searchTerm: string;
  setSearchTerm: (_s: string) => void;
}

const SearchInput: React.FC<ISearchInput> = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <input
        type="text"
        className="rounded-full border-2 w-96 h-12 px-3"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </>
  );
};

export default SearchInput;
