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
      onKeyDown={(event) => event.key === 'Enter' && onSubmit()}
      placeholder={weatherTextInfo.enter_city_name}
    />
    <Button className='search-button' onClick={onSubmit}>
      <i className='fas fa-search'></i> {weatherTextInfo.search}
    </Button>
    {value && (
      <Button onClick={onClear} className='clear-button' disabled={!value}>
        <i className='fas fa-times'></i> {weatherTextInfo.clear}
      </Button>
    )}
  </InputGroup>
);

export default SearchBar;
