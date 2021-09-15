import { Component } from 'react';
import React from 'react';
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onClick);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.props.onClick}>
        <div className="Modal">
          <img
            src={this.props.showImg.largeImageURL}
            alt={this.props.showImg.tags}
          />
        </div>
      </div>
    );
  }
}

export default Modal;
