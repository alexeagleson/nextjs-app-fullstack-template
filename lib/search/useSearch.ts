import { useState } from 'react';
import { ISearchResultData } from './types';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ISearchResultData[]>();

  const submitSearch = async () => {
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
  };

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    submitSearch,
  };
};
