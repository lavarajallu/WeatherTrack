import React from 'react';
import { Row, Col } from 'reactstrap';
import WeatherCard from './WeatherCard';

const WeatherGrid = ({ weatherData }) => (
  <Row>
    {weatherData?.map((dayData, index) => (
      <Col md='3' lg='3' key={index} className='d-flex'>
        <WeatherCard {...dayData} />
      </Col>
    ))}
  </Row>
);

export default WeatherGrid;
