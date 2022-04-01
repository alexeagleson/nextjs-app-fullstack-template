// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockSearchResult } from '../../lib/search/mocks';
import { ISearchResultData } from '../../lib/search/types';

interface NextApiRequestSearch extends NextApiRequest {
  body: { searchTerm?: string };
}

export default function handler(
  req: NextApiRequestSearch,
  res: NextApiResponse<Array<ISearchResultData>>
) {
  const { body } = req;
  if (body.searchTerm && body.searchTerm.length > 0) {
    res
      .status(200)
      .json([mockSearchResult, mockSearchResult, mockSearchResult]);
  } else {
    res.status(400).json([]);
  }
}
