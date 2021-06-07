import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

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

  // Bonus: Overriding the getStyle method
  getStyle = () => {
    return {
      color: this.color,
      fontWeight: '400',
      fontSize: '1.2rem',
    };
  };
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }

  // Bonus: Overriding the getStyle method
  getStyle = () => {
    return {
      color: this.color,
      fontWeight: '900',
      fontSize: '1rem',
    };
  };
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  // Bonus: Overriding the getStyle method
  getStyle = () => {
    return {
      color: this.color,
      fontWeight: '700',
      fontSize: '1.4rem',
    };
  };
}

export { InfoAlert, WarningAlert, ErrorAlert };
