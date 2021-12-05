import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Button, ButtonProps } from "../src"


// import styles from "../src/button.module.scss"


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Login/Join",
}

// export const Large = Template.bind({})
// Large.args = {
//   size: "large",
//   label: "Button",
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: "small",
//   label: "Button",
// }
