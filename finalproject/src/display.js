import React from 'react';
import'./display.css';


export default class Display extends React.Component{
    render(){
        console.log(this.props.displayhead)
  return (
    <nav className="row">
      <div className="heading col-8">{this.props.displayhead}</div>
    <div className="col-1 "><img className="dotm" src={require("./picture/dots-menu.svg")} width="30 px" height="30 px"alt="menu"/></div>
    </nav>
  );
}
}