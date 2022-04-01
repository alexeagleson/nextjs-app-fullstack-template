import SearchInput from '../../inputs/SearchInput';
import Image from 'next/image';
import SearchResultGroup from '../search-result-group/SearchResultGroup';
import { useSearch } from '../../../lib/search/useSearch';
import { useTranslation } from 'next-i18next';

interface ISearchFeature {}

const SearchFeature: React.FC<ISearchFeature> = (_props) => {
  const { t } = useTranslation();
  const { searchResults, searchTerm, setSearchTerm, submitSearch } =
    useSearch();

  return (
    <div>
      <form
        className="flex flex-col items-center gap-y-5 mb-14"
        onSubmit={(e) => {
          e.preventDefault();
          submitSearch();
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
            {t('google_search', { ns: 'common' })}
          </button>
          <button className="border-1 p-2 px-6 bg-slate-100 rounded-md">
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
        <SearchResultGroup searchResults={searchResults} className="mb-14" />
      )}
    </div>
  );
};

export default SearchFeature;
