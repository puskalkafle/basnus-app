import React, { useState } from "react"
import cx from "classnames"
import styles from "./SearchBar.module.scss"


export interface SearchBarProps {
  placeholder?: string
}

/**
 * Primary UI component for user interaction
 */
const tabs = [
  { name: "Buy" },
  { name: "Rent" },
  { name: "Sold" },
];
export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "write text here",
  ...props
}) => {
  const [isActive, setActive] = useState(1);
  const handleToggle = (index: number) => {
    setActive(index + 1);
  };
  return (
    <div
      className={cx([
        // styles.header
      ])}
      {...props}
    >
      <ul className={cx([
        styles.types
      ])}>
        {tabs.map((tab, index) => (
          <li key={index}><a onClick={() => handleToggle(index)} className={isActive === (index + 1) ? "active" : ''}>{tab.name}</a></li>
        ))}
      </ul>

      <div className={cx([styles.search_bar_wrap])} >
        <input type="search" placeholder={placeholder} />
        <button>Search</button>
      </div>
    </div>
  )
}
