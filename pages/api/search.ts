// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mockSearchResult } from '../../lib/search/mocks';
import { ISearchResultData } from '../../lib/search/types';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Array<ISearchResultData>>
) {
  res.status(200).json([mockSearchResult, mockSearchResult, mockSearchResult]);
}
