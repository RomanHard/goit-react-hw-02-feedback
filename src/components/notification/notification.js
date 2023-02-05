import React from 'react';

class Notification extends React.Component {
  render() {
    return <div className="statistics">"{this.props.message}"</div>;
  }
}

export default Notification;
