import React, { useState } from "react"
import cx from "classnames"
import styles from "./GridSlider.module.scss"


export interface GridSliderProps {
  placeholder?: string
}

/**
 * Primary UI component for user interaction
 */
const cities = [
  { name: "Kathmandu" },
  { name: "Biratnagar" },
  { name: "Birgunj" },
  { name: "Pokhara" },
  { name: "Janakpur" },
  { name: "Itahari" }
];
export const GridSlider: React.FC<GridSliderProps> = ({
  placeholder = "write text here",
  ...props
}) => {

  const handleClick = (index: number) => {

  };
  return (
    <div
      {...props}
    >
      <ul className={cx([
        styles.cities
      ])}>
        {cities.map((city, index) => (
          <li key={index}><a onClick={() => handleClick(index)} className={cx([
            `city${index+1}`
          ])}
          ><img alt={city.name} title={city.name} src={'https://picsum.photos/200/300'}/></a></li>
        ))}
      </ul>
    </div>
  )
}
