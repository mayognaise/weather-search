import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './LocationResult.css';

class LocationResult extends PureComponent {
  static propTypes = {
    cms: PropTypes.object.isRequired,
    place: PropTypes.object.isRequired,
    unit: PropTypes.string.isRequired
  };
  getTemperature = K => {
    const { unit, cms } = this.props;
    const temp = unit === 'imperial' ?
      (K - 273.15) * 9 / 5 + 32 :
      K - 273.15;
    return `${Math.floor(temp)}${cms.units[unit]}`;
  };
  render() {
    const { place, cms } = this.props;
    if (!place.weather) { return null; }
    const weather = place.weather[0];
    return (
      <div className="LocationResult">
        <div className="LocationResult-name">
          {place.name}
        </div>
        <div className="LocationResult-items">
          <div className="LocationResult-left">
            <div className="LocationResult-icon">
              <img
                className="LocationResult-icon-image"
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                alt={weather.main}
              />
            </div>
            <div className="LocationResult-weather">
              {weather.main}
            </div>
          </div>
          <div className="LocationResult-right">
            <div className="LocationResult-temp">
              {this.getTemperature(place.main.temp)}
            </div>
            <div className="LocationResult-temp-items">
              <div className="LocationResult-temp--max">
                {this.getTemperature(place.main.temp_max)}
              </div>
              <div className="LocationResult-temp--min">
                {this.getTemperature(place.main.temp_min)}
              </div>
            </div>
          </div>
        </div>
        <div className="LocationResult-options">
          <div className="LocationResult-option">
            <div className="LocationResult-option--attr">
              {cms.labels.wind}
            </div>
            <div className="LocationResult-option--value">
              {`${place.wind.speed} ${cms.units.wind}`}
            </div>
          </div>
          <div className="LocationResult-option">
            <div className="LocationResult-option--attr">
              {cms.labels.humidity}
            </div>
            <div className="LocationResult-option--value">
              {`${place.main.humidity} ${cms.units.humidity}`}
            </div>
          </div>
          <div className="LocationResult-option">
            <div className="LocationResult-option--attr">
              {cms.labels.pressure}
            </div>
            <div className="LocationResult-option--value">
              {`${place.main.pressure} ${cms.units.pressure}`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cms, place, unit }) => ({
  cms,
  place,
  unit: unit.value
});

export default connect(mapStateToProps)(LocationResult);
