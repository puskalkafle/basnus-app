import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { GridSlider, GridSliderProps } from "."

export default {
  title: "Components/GridSlider",
  component: GridSlider,
  argTypes: {
  },
} as Meta

const Template: Story<GridSliderProps> = (args) => <GridSlider {...args} />

export const Ui = Template.bind({})
Ui.args = {
  // variant: 'primary',
  placeholder: 'text'
}
