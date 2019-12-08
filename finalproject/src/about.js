import React from 'react';
import'./display.css';


export default class About extends React.Component{
    render(){
        console.log(this.props.about)
  return (
    <div>
        <div className="subhead">About</div>
        <div className="border-bottom"></div>
        <div className="prcontain">
      <div className="pr">{this.props.about}</div></div>
    </div>
  );
}
}