import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppShell, { IAppShell } from './AppShell';

export default {
  title: 'shells/AppShell',
  component: AppShell,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppShell>;

const Template: ComponentStory<typeof AppShell> = (args) => (
  <AppShell {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: '{{component}}',
} as IAppShell;
