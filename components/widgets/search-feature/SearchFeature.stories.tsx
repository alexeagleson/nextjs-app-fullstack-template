import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchFeature from './SearchFeature';

export default {
  title: 'widgets/SearchFeature',
  component: SearchFeature,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchFeature>;

const Template: ComponentStory<typeof SearchFeature> = (args) => (
  <SearchFeature {...args} />
);

export const Base = Template.bind({});
Base.args = {};
