import SearchInput from '../../inputs/SearchInput';
import Image from 'next/image';
import { useState } from 'react';
import { ISearchResultData } from '../../../lib/search/types';

interface ISearch {}

const Search: React.FC<ISearch> = (_props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={async (e) => {
        e.preventDefault();

        fetch('/api/search', {
          body: JSON.stringify({ searchTerm }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }).then(async (response) => {
          const searchResults = await response.json();
          console.log(searchResults);
        });
      }}
    >
      <Image src="/google-logo.png" alt="Google Logo" width={272} height={92} />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="space-x-3">
        <button
          type="submit"
          className="border-1 p-2 px-6 bg-slate-100 rounded-md"
        >
          Google Search
        </button>
        <button
          type="submit"
          className="border-1 p-2 px-6 bg-slate-100 rounded-md"
        >
          {`I'm feeling lucky`}
        </button>
      </div>
      <p>
        Google offered in:{' '}
        <a href="/fr" className="underline text-blue-600">
          Français
        </a>
      </p>
    </form>
  );
};

export default Search;
