import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontWeight = '700';
    this.fontSize = '1rem';
  }

  render() {
    return (
      <div className='Alert'>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: this.fontWeight,
      fontSize: this.fontSize,
    };
  };
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: this.fontWeight,
      fontSize: this.fontSize,
    };
  };
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: this.fontWeight,
      fontSize: this.fontSize,
    };
  };
}

export { InfoAlert, WarningAlert, ErrorAlert };
