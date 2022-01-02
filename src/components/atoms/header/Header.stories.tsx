import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Header, HeaderProps } from "./"

export default {
  title: "Components/Header",
  component: Header
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Ui = Template.bind({})
Ui.args = {}
