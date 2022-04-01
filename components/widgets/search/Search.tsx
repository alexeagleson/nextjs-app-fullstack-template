import SearchInput from '../../inputs/SearchInput';
import Image from 'next/image';
import { useState } from 'react';

interface ISearch {}

const Search: React.FC<ISearch> = (_props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert('submit the form');
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
