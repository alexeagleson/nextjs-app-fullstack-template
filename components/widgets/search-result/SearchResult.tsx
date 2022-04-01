import Link from 'next/link';

export interface ISearchResult extends React.ComponentPropsWithoutRef<'div'> {
  url: string;
  title: string;
  text: string;
}

export const mockSearchResult: ISearchResult = {
  url: 'https://www.google.com',
  title: 'This is a link to a search result',
  text: 'Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result.',
};

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
