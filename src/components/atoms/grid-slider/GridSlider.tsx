import React, { useState } from "react";
import cx from "classnames";
import styles from "./GridSlider.module.scss";
import downArrow from '../../../assets/image/arrow-down.svg';
import rightArrow from '../../../assets/image/arrow-forward.svg';
import Container from "components/common/Container"



export interface GridSliderProps {
  placeholder?: string
  downArrowPath?: string
  rightArrowPath?: string
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
  { name: "Kathmandu" },
  { name: "Itahari" },
  { name: "Birgunj" },
  { name: "Pokhara" },
  { name: "Janakpur" },
  { name: "Itahari" }
];
export const GridSlider: React.FC<GridSliderProps> = ({
  placeholder = "write text here",
  downArrowPath = downArrow,
  rightArrowPath = rightArrow,
  ...props
}) => {
  const [isRightPosition, setRightPosition] = useState('0');
  const [isActiveButton, setActiveButton] = useState('next');

  const handleClick = (index: number) => {

  };
  const animateSlider = (goto: string) => {
    if (goto === 'next') {
      setRightPosition('100%');
      setActiveButton('prev');
    } else {
      setRightPosition('0');
      setActiveButton('next');
    }
  };
  return (
    <Container>
      {props.children}
      <div
        className={cx([styles.cities_slider_wrap, styles['circular-btn-wrap']])}
        {...props}
      >
        <ul className={cx([
          styles.cities,
          styles['cities-slider']
        ])}
          style={{ right: isRightPosition }}
        >
          {cities.map((city, index) => (
            <li key={index}><a onClick={() => handleClick(index)} className={cx([
              `city${index + 1}`
            ])}
            >
              <div className={cx(styles['city_name'])}>
                <h4>{city.name}</h4>
                <h4><span className={cx(styles['down-arrow'])}><img src={downArrowPath} /></span></h4>
              </div>

              <img alt={city.name} title={city.name} src={'https://picsum.photos/1000'} /></a></li>
          ))}
        </ul>
        <button className={cx([styles['circular_btn'], styles['next_slide'], (isActiveButton === 'next' ? styles['active'] : styles['inactive'])])} onClick={() => animateSlider('next')}><img src={rightArrowPath} /></button>
        <button className={cx([styles['circular_btn'], styles['prev_slide'], (isActiveButton === 'prev' ? styles['active'] : styles['inactive'])])} onClick={() => animateSlider('prev')}><img src={rightArrowPath} /></button>
      </div>
    </Container>
  )
}
