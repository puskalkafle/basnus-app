import React, { useState } from "react"
import cx from "classnames";



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
  { name: "Kathmandu" },
  { name: "Itahari" },
  { name: "Birgunj" },
  { name: "Pokhara" },
  { name: "Janakpur" },
  { name: "Itahari" }
];
export const GridSlider: React.FC<GridSliderProps> = ({
  placeholder = "write text here",
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
    <div
      className={cx(['cities_slider_wrap', 'circular-btn-wrap'])}
      {...props}
    >
      <ul className={cx([
        // styles.cities,
        'cities',
        'cities-slider'
      ])}
        style={{ right: isRightPosition }}
      >
        {cities.map((city, index) => (
          <li key={index}><a onClick={() => handleClick(index)} className={cx([
            `city${index + 1}`
          ])}
          >
            {/* <div className={cx([styles.city_name])}> */}
            <div className={cx(['city_name'])}>
              <h4>{city.name}</h4>
              <h4><span>V</span></h4>
            </div>

            <img alt={city.name} title={city.name} src={'https://picsum.photos/1000'} /></a></li>
        ))}
      </ul>
      <button className={cx(['circular_btn', 'next_slide', (isActiveButton === 'next' ? 'active' : 'inactive')])} onClick={() => animateSlider('next')}>&gt;</button>
      <button className={cx(['circular_btn', 'prev_slide', (isActiveButton === 'prev' ? 'active' : 'inactive')])} onClick={() => animateSlider('prev')}>&lt;</button>
    </div>
  )
}
