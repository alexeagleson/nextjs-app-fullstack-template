import { ISearchResultData } from '../../../lib/search/types';
import SearchResult from '../search-result/SearchResult';

export type ISearchResult = React.ComponentPropsWithoutRef<'div'> & {
  searchResults: ISearchResultData[];
};

const SearchResultGroup: React.FC<ISearchResult> = ({
  searchResults,
  className,
  ...divProps
}) => {
  return (
    <div {...divProps} className={`${className} flex flex-col space-y-8`}>
      {searchResults.map((result, idx) => {
        return <SearchResult key={result.url + " " + idx} {...result} />;
      })}
    </div>
  );
};

export default SearchResultGroup;
