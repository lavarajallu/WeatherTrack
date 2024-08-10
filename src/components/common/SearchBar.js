import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import { weatherTextInfo } from '../../utils/constants';
import '../../App.css';

const SearchBar = ({ value, onChange, onSubmit, onClear }) => (
  <InputGroup className='mb-3'>
    <Input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={weatherTextInfo.enter_city_name}
    />
    <Button className='search-button' onClick={onSubmit}>
      <i className='fas fa-search'></i>
      {weatherTextInfo.search}
    </Button>
    {value && (
      <Button color='secondary' onClick={onClear} className='clear-button'>
        <i className='fas fa-clear'></i> {weatherTextInfo.clear}
      </Button>
    )}
  </InputGroup>
);

export default SearchBar;
