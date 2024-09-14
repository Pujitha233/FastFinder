import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import './SearchBar.css'; // Import CSS file for styles

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setLoading(true);
      axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
          const countries = response.data.map(country => ({
            value: country.name.common,
            label: `${country.name.common} (${country.capital ? country.capital[0] : 'No Capital'})`
          }));
          setOptions(countries.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          ));
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching countries data", error);
          setLoading(false);
        });
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  return (
    <div className="search-container">
      <Select
        options={options}
        onInputChange={newValue => setInputValue(newValue)}
        isLoading={loading}
        placeholder="Search for a country or capital..."
        noOptionsMessage={() => "No results"}
      />
    </div>
  );
};

export default SearchBar;