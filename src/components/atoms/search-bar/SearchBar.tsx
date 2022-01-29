import React, { useState, SyntheticEvent } from "react"
import cx from "classnames"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


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
const countries = [//add google maps
  { name: "Kathmandu" },
  { name: "Pokhara" },
  { name: "Dharan" },
  { name: "Janakpur" },
  { name: "Chitwan" },
  { name: "Bhaktapur" },
  { name: "Lalitpur" },
  { name: "Dhulikhel" },
  { name: "Butwal" },
  { name: "Birgunj" },
];
export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "write text here",
  ...props
}) => {
  const [isActive, setActive] = useState(1);
  const [isSuggestionVisible, setSuggestionListVisibility] = useState(false);
  const [value, setValue] = useState(null);

  const handleToggle = (index: number) => {
    setActive(index + 1);
  };
  const searchLocation = (e: SyntheticEvent): void => {
    (e.target.value) ? setSuggestionListVisibility(true) : setSuggestionListVisibility(false);
  }
  return (
    <div
      className={cx([
        // styles.header
      ])}
      {...props}
    >
      <ul className={cx([
        'types'
      ])}>
        {tabs.map((tab, index) => (
          <li key={index}><a onClick={() => handleToggle(index)} className={isActive === (index + 1) ? "active" : ''}>{tab.name}</a></li>
        ))}
      </ul>


      <div className={cx(['search_bar_wrap'])} >
        {/* <input type="search" placeholder={placeholder} onKeyUp={searchLocation} /> */}
        <GooglePlacesAutocomplete
          // placeholder={placeholder}
          apiKey="AIzaSyB4IimYBNLrSmwr-ifOOtrGjBVjNWa732I"
          apiOptions={{ language: 'en', region: 'np' }}
          autocompletionRequest={{
            componentRestrictions: {
              country: ['np'],
            }
          }}
          selectProps={{
            value,
            onChange: setValue,
          }}
        />
        <button>Search</button>
      </div>
      {isSuggestionVisible && (
        <div>
          <ul>
            <li>Kathmandu</li>
          </ul>
        </div>
      )}
    </div>
  )
}
