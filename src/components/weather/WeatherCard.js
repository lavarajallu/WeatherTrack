import React from 'react';
import { CardTitle, Table } from 'reactstrap';
import './WeatherCard.css'; // Import the CSS file

const WeatherCard = ({ date, minTemp, maxTemp, pressure, humidity }) => (
  <div className='mb-1'>
    <div>
      <CardTitle tag='h5' className='weather-card-title'>
        Date: {date}
      </CardTitle>
      <Table bordered>
        <tbody>
          <tr className='temperature-row'>
            <th colSpan='2'>Temperature</th>
          </tr>
          <tr className='text-center'>
            <td>Min</td>
            <td>Max</td>
          </tr>
          <tr className='text-center'>
            <td>{minTemp} °C</td>
            <td>{maxTemp} °C</td>
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
