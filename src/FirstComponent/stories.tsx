import { Story, Meta } from "@storybook/react";
import { FirstComponent, FirstComponentProps } from ".";

export default {
  title: "FirstComponent",
  component: FirstComponent,
} as Meta;

export const Default: Story<FirstComponentProps> = (args) => (
  <FirstComponent {...args} />
);
