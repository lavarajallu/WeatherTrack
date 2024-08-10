import React from 'react';
import { CardTitle, Table } from 'reactstrap';
import './WeatherCard.css';

const WeatherCard = ({ date, minTemp, maxTemp, pressure, humidity }) => (
  <div className='mb-1'>
    <div>
      <CardTitle tag='h5' className='weather-card-title'>
        Date: {date}
      </CardTitle>
      <Table bordered>
        <tbody>
          <tr className='temperature-row'>
            <th colSpan='2' className='temp-background'>
              Temperature
            </th>
          </tr>
          <tr className='text-center'>
            <td className='temp-background'>Min</td>
            <td className='temp-background'>Max</td>
          </tr>
          <tr className='text-center'>
            <td className='temp-background'>{minTemp} °C</td>
            <td className='temp-background'>{maxTemp} °C</td>
          </tr>
          <tr>
            <td className='text-center'>Pressure</td>
            <td className='text-center'>{pressure} hPa</td>
          </tr>
          <tr>
            <td className='text-center'>Humidity</td>
            <td className='text-center'>{humidity} %</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
);

export default WeatherCard;
