import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockSearchResults } from '../../../lib/search/mocks';
import SearchResultGroup, { ISearchResultGroup } from './SearchResultGroup';

export default {
  title: 'widgets/SearchResultGroup',
  component: SearchResultGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResultGroup>;

const Template: ComponentStory<typeof SearchResultGroup> = (args) => (
  <SearchResultGroup {...args} />
);

export const Base = Template.bind({});
Base.args = {
  searchResults: [...mockSearchResults],
} as ISearchResultGroup;
