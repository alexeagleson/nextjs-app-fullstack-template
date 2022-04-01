import { useState } from 'react';

interface ISearchInput {}

const SearchInput: React.FC<ISearchInput> = (_props) => {
  const [searchTerm, setSearchTerm] = useState('');

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
