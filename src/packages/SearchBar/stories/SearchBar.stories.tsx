import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { SearchBar, SearchBarProps } from "../src"

export default {
  title: "Components/Search Bar",
  component: SearchBar,
  argTypes: {
  },
} as Meta

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />

export const Ui = Template.bind({})
Ui.args = {
  // variant: 'primary',
  placeholder: 'text'
}
