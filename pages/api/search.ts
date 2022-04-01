// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockSearchResults } from '../../lib/search/mocks';
import { ISearchResultData } from '../../lib/search/types';

interface NextApiRequestSearch extends NextApiRequest {
  body: { searchTerm?: string };
}

export default function handler(
  req: NextApiRequestSearch,
  res: NextApiResponse<Array<ISearchResultData>>
) {
  const {
    body: { searchTerm },
  } = req;

  if (searchTerm && searchTerm.length > 0) {
    const filteredResults = mockSearchResults.filter((result) => {
      return result.text.toLowerCase().includes(searchTerm.toLowerCase());
    });
    res.status(200).json(filteredResults);
  } else {
    res.status(400).json([]);
  }
}
