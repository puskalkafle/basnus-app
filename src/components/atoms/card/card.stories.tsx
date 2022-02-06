import { Story, Meta } from "@storybook/react/types-6-0"

import { Card, CardProps } from "."

import icon from "../../../assets/image/card/buy_home.svg"

export default {
  title: "Components/Card",
  component: Card,
  imgSrc: 'img',
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Ui = Template.bind({})
Ui.args = {
  imgSrc: icon,
  title: "Buy Home",
  content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."
}

