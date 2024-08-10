import React from 'react';
import { Row, Col } from 'reactstrap';
import WeatherCard from './WeatherCard';

const WeatherGrid = ({ weatherData }) => (
  <Row>
    {weatherData?.map((dayData, index) => (
      <Col md='4' lg='3' key={index}>
        <WeatherCard {...dayData} />
      </Col>
    ))}
  </Row>
);

export default WeatherGrid;
