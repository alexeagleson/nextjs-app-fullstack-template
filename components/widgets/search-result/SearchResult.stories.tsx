import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockSearchResults } from '../../../lib/search/mocks';
import SearchResult, { ISearchResult } from './SearchResult';

export default {
  title: 'widgets/SearchResult',
  component: SearchResult,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Base = Template.bind({});
Base.args = { ...mockSearchResults[0] } as ISearchResult;
