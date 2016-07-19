import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  constructor() {
    super();

    this._counter = 0;
    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const key = name + this._counter;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    this._counter++;

    return (
      <tr key={key}>
        <th scope="row" width="10%">{name}</th>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="brown" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover table-sm">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  static mapStateToProps({weather}) {
    return {weather};
  }

  // ^ same as below
  // static mapStateToProps(state) {
  //   return { weather: state.weather };
  // }
}

export default connect(WeatherList.mapStateToProps)(WeatherList);
