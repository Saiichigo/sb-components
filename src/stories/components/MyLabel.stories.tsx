import { ComponentStory, Meta, StoryObj } from "@storybook/react";
import { MyLabel, MyLabelProps } from "../../components/MyLabel";

export default {
  title: "UI/Etiquetas/MyLabel",
  tags: ["autodocs"],
  component: MyLabel,
  argTypes: {
    size: {control: "select", option: ["normal", "h1"]},
    color: {control: "select"}

  }
} satisfies Meta<typeof MyLabel>;

// const Template = (args) => <MyLabel {...args} />;
type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = {
  args: {
    size: "normal",
    allCaps: false,
  },
};

export const AllCaps: Story = {
  args: {
    size: "normal",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    size: "normal",
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    size: "normal",
    color: "tertiary",
  },
};
export const CumstonLabel: Story = {
  args: {
    size: "h1",
    fontColor: "#5517ac",
  },
};

// customFon
