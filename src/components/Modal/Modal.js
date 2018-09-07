import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModal } from '../../store/actions/modal';
import './Modal.css';

class Modal extends Component {
  static propTypes = {
    cms: PropTypes.object.isRequired,
    modal: PropTypes.object.isRequired,
    resetModal: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    window.addEventListener('keydown', this.handleKeyDown, false);
  }
  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.resetModal();
    }
  };
  handleClick = () => {
    this.props.resetModal();
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, false);
  }
  render() {
    const { value } = this.props.modal;
    if (!value) { return null; }
    let text;
    if (typeof value === 'object' && value.message) {
      text = `${value.message}.`;
    } else if (typeof value === 'string') {
      text = `${value}.`;
    } else {
      text = this.props.cms.labels.modalDefaultText;
    }
    return (
      <div className="Modal">
        <div className="Modal-container">
          <p className="Modal-text">{text}</p>
          <button
            className="button Modal-cta"
            onClick={this.handleClick}
          >
            {this.props.cms.labels.modalCTA}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cms, modal }) => ({
  cms,
  modal
});
const mapDispatchToProps = dispatch => ({
  resetModal: () => dispatch(setModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
