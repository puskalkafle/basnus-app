import React from "react"
import cx from "classnames"
import styles from "./header.module.scss"
import { Button } from "../button"
import Container from '../../common/Container'

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
      // 'header'
      styles.header
    ])}
    {...props}
  >
    <Container>
      <h1><a href="#">BASNUS</a></h1>
      <ul
        className={cx([
          // 'menu'
          styles.menu
        ])}
      >
        <li><a href="#">Buy</a></li>
        <li><a href="#">Rent</a></li>
        <li><a href="#">Sell</a></li>
        <li><Button primary={false} label="Login/Join" size="medium" /></li>
      </ul>
    </Container>
  </header>
)
