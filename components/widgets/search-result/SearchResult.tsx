import Link from 'next/link';
import { ISearchResultData } from '../../../lib/search/types';

export type ISearchResult = ISearchResultData &
  React.ComponentPropsWithoutRef<'div'> & {};

const SearchResult: React.FC<ISearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div {...divProps} className={`${className} flex flex-col w-96`}>
      <p>{url}</p>
      <Link href={url}>
        <a
          className="text-blue-600 text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;
