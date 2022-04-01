import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  title: 'inputs/SearchInput',
  component: SearchInput,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Base = Template.bind({});
Base.args = {};
