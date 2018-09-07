import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCMS } from './store/actions/cms';
import LocationInput from './components/LocationInput/LocationInput';
import LocationResult from './components/LocationResult/LocationResult';
import Modal from './components/Modal/Modal';
import UnitSelector from './components/UnitSelector/UnitSelector';
import './App.css';

class App extends Component {
  static propTypes = {
    cms: PropTypes.object.isRequired,
    loadCMS: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    props.loadCMS();
  }
  render() {
    const { cms } = this.props
    if (!cms.labels) { return null; }
    return (
      <div className="App">
        <div className="App-container">
          <header className="App-header">
            <h1 className="App-title">{cms.labels.headerTitle}</h1>
          </header>
          <main className="App-main">
            <UnitSelector />
            <LocationResult />
            <LocationInput />
          </main>
        </div>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cms: state.cms
});
const mapDispatchToProps = dispatch => ({
  loadCMS: () => dispatch(loadCMS())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
