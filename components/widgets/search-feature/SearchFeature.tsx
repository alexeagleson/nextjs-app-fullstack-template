import SearchInput from '../../inputs/SearchInput';
import Image from 'next/image';
import { useState } from 'react';
import SearchResultGroup from '../search-result-group/SearchResultGroup';
import { ISearchResultData } from '../../../lib/search/types';

interface ISearchFeature {}

const SearchFeature: React.FC<ISearchFeature> = (_props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ISearchResultData[]>();

  return (
    <div>
      <form
        className="flex flex-col items-center gap-y-5 mb-20"
        onSubmit={async (e) => {
          e.preventDefault();

          fetch('/api/search', {
            body: JSON.stringify({ searchTerm }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          }).then(async (response) => {
            const searchResults: ISearchResultData[] | undefined =
              await response.json();
            setSearchResults(searchResults);
          });
        }}
      >
        <Image
          src="/google-logo.png"
          alt="Google Logo"
          width={272}
          height={92}
        />
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
      {searchResults && (
        <SearchResultGroup searchResults={searchResults} className="mb-20" />
      )}
    </div>
  );
};

export default SearchFeature;
