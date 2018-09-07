import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUnit } from '../../store/actions/unit';
import './UnitSelector.css';

class UnitSelector extends PureComponent {
  static propTypes = {
    cms: PropTypes.object.isRequired,
    unit: PropTypes.string.isRequired,
    setUnit: PropTypes.func.isRequired
  };
  handleClick = unit => {
    this.props.setUnit(unit);
  };
  renderButton = unit => {
    const isActive = unit === this.props.unit;
    return (
      <button
        key={unit}
        className="button UnitSelector-cta"
        data-active={isActive}
        onClick={() => !isActive && this.handleClick(unit)}
      >
        {this.props.cms.units[unit]}
      </button>
    );
  };
  render() {
    return (
      <div className="UnitSelector">
        <div className="UnitSelector-controls">
          {['imperial', 'metric'].map(this.renderButton)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cms, unit }) => ({
  cms,
  unit: unit.value
});
const mapDispatchToProps = dispatch => ({
  setUnit: unit => dispatch(setUnit(unit))
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitSelector);
