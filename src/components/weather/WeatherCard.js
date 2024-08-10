import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const WeatherCard = ({ date, minTemp, maxTemp, pressure, humidity }) => (
  <Card className='mb-2'>
    <CardBody>
      <CardTitle tag='h5'>Date: {date}</CardTitle>
      <CardText>
        Temperature: Min:{minTemp}°C - Max:{maxTemp}°C
      </CardText>
      <CardText>Pressure: {pressure} hPa</CardText>
      <CardText>Humidity: {humidity}%</CardText>
    </CardBody>
  </Card>
);

export default WeatherCard;
