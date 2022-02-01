import React from "react"
import cx from "classnames"
import styles from "./card.module.scss"
import { Button } from "../button"

export interface CardProps {
  /**
   * Loading state
   */
  loading?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * Card contents
   */
  imgSrc?: string
  title: string
  content: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Card: React.FC<CardProps> = ({
  backgroundColor,
  imgSrc,
  title,
  content,
  loading,
  onClick,
  ...props
}) => (
  <div
    className={cx([
      styles.card
    ])}
    style={{ backgroundColor }}
    onClick={loading ? undefined : onClick}
    {...props}
  >
    <img src={imgSrc} alt="" />
    <h4>{loading ? "Loading" : title}</h4>
    <p>{loading ? "Loading" : content}</p>
    <Button primary={true} label="Buy Now" />
  </div>
)
