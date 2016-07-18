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
    const temps = cityData.list.map(weather => weather.main.temp);
    const key = name + this._counter;

    this._counter++;

    return (
      <tr key={key}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
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
