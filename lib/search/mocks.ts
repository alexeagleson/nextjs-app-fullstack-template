import { ISearchResultData } from './types';

const mockSearchResultA: ISearchResultData = {
  url: 'https://www.google.com',
  title: 'This is a link to a search result about cats',
  text: 'The topic of this link is cats.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result.',
};

const mockSearchResultB: ISearchResultData = {
  url: 'https://www.google.com',
  title: 'This is a link to a search result about dogs',
  text: 'The topic of this link is dogs.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result.',
};

const mockSearchResultC: ISearchResultData = {
  url: 'https://www.google.com',
  title: 'This is a link to a search result about cauliflower',
  text: 'The topic of this link is cauliflower.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result.',
};

const mockSearchResultD: ISearchResultData = {
  url: 'https://www.google.com',
  title: 'This is a link to a search result about cats and dogs',
  text: 'The topic of this link is both cats and dogs.  Description of the search result. The description might be a bit long and it will tell you everything you need to know about the search result.',
};

export const mockSearchResults = [
  mockSearchResultA,
  mockSearchResultB,
  mockSearchResultC,
  mockSearchResultD,
] as const;
