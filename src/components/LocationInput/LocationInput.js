import React, { PureComponent } from 'react';
import LocationForm from '../LocationForm/LocationForm';
import './LocationInput.css';

const regExp = /^\d{5}$/;

const controls = [
  {
    id: 'city',
    validate: value => value.trim()
  },
  {
    id: 'zipcode',
    validate: value => regExp.test(value)
  },
  {
    id: 'geolocation'
  }
];

class LocationInput extends PureComponent {
  renderForm = item => (
    <div className={`LocationInput-item ${item.id}`} key={item.id}>
      <LocationForm {...item} />
    </div>
  );
  render() {
    return (
      <div className="LocationInput">
        {controls.map(this.renderForm)}
      </div>
    );
  }
}

export default LocationInput;
