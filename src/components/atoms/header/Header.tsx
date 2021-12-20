import React from "react"
import cx from "classnames"
// import styles from "./header.module.scss"
import { Button } from "../button"

export interface HeaderProps {

}

/**
 * Primary UI component for user interaction
 */
export const Header: React.FC<HeaderProps> = ({
  ...props
}) => (
  <header
    className={cx([
      'header'
    ])}
    {...props}
  >
    <h1><a href="#">BASNUS</a></h1>
    <ul
      className={cx([
        'menu'
      ])}
    >
      <li><a href="#">Buy</a></li>
      <li><a href="#">Rent</a></li>
      <li><a href="#">Sell</a></li>
      <li><Button primary={false} label="Login/Join" size="medium" /></li>
    </ul>
  </header>
)
