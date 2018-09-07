import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchByCityname, searchByZipcode, searchByGeolocation } from '../../store/actions/place';
import './LocationForm.css';

class LocationForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    validate: PropTypes.func,
    cms: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    searchByCityname: PropTypes.func.isRequired,
    searchByZipcode: PropTypes.func.isRequired,
    searchByGeolocation: PropTypes.func.isRequired
  };
  static defaultProps = {
    validate: null
  }
  state = {
    value: '',
    isValid: false
  };
  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    switch (this.props.id) {
      case 'city':
        this.props.searchByCityname(value);
        break;
      case 'zipcode':
        this.props.searchByZipcode(value);
        break;
      case 'geolocation':
        this.props.searchByGeolocation();
        break;
      default:
        break;
    }
  };
  handleChange = e => {
    const value = e.currentTarget.value;
    this.setState({
      value,
      isValid: !this.props.validate || this.props.validate(value)
    });
  };
  render() {
    const { id, ui } = this.props;
    const cms = this.props.cms.controls[id];
    const isGeoLocation = id === 'geolocation';
    return (
      <div className="LocationForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={id} className="LocationForm-label">{cms.label}</label>
          <div className="LocationForm-controls">
            {!isGeoLocation && (
              <input
                className="LocationForm-input"
                id={id}
                name={id}
                placeholder={cms.placeholder}
                onChange={this.handleChange}
                value={this.state.value}
                autoComplete="off"
              />
            )}
            <button
              className={['button', 'LocationForm-cta', ui.loadingType === id && 'is-loading'].filter(Boolean).join(' ')}
              disabled={ui.isLoading || (!isGeoLocation && !this.state.isValid)}
            >
              {cms.cta}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ cms, ui }) => ({
  cms,
  ui
});
const mapDispatchToProps = dispatch => ({
  searchByCityname: name => dispatch(searchByCityname(name)),
  searchByZipcode: zipcode => dispatch(searchByZipcode(zipcode)),
  searchByGeolocation: () => dispatch(searchByGeolocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
