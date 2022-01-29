import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Footer, FooterProps } from "./"

export default {
    title: "Components/Footer",
    component: Footer
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Ui = Template.bind({})
Ui.args = {}