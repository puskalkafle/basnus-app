import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Footer, FooterProps } from "."
import iconFacebook from "../../../../public/image/social-media/facebook.svg"

export default {
    title: "Components/Footer",
    component: Footer
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Ui = Template.bind({})

Ui.args = {
    socialMedias: [
        { name: "Facebook", link: "#test", image: iconFacebook },
        { name: "Facebook", link: "#test", image: iconFacebook },
        { name: "Facebook", link: "#test", image: iconFacebook }
    ]
}