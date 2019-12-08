import React from 'react';
import'./display.css';
import PropTypes from 'prop-types';

export default class Imgd extends React.Component{
    render(){
        console.log(this.props.pictures)
  return (

      <div>{this.props.pictures.File}</div>
  
    
  );
}
}
Imgd.propTypes = {
    pictures: PropTypes.object.isRequired
 }