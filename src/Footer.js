/* eslint-disable no-useless-constructor */
import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h3>This is my Footer</h3>
      <p>Contact {this.props.trademark} Team</p>
      </>
    )
  }
}

export default Footer;