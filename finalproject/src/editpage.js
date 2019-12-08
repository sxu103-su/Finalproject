import React from 'react';
import Inputone from  './input1';
import Inputtwo from  './input2';
import Inputthree from  './input3';
import Display from  './display';
import About from './about';
import Todos from './experience';
import uuid from 'uuid'; 
import Image from './image';
import Imgd from './imgdisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css';
var mystorage = window.localStorage;
export default class Editpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayhead: "",
            about:"",
            showinput: true,
            todos: [
                {
                    id:uuid.v4(),
                   title:"gg",
                },
                {
                    id:uuid.v4(),
                    title :"ss",
                },
                {
                    id:uuid.v4(),
                    title :"ss",
                }
            ],
            pictures:[
                { File:'./picture/demo.jpg'},
            ],
                

        }
    
    }
   
    
    inputone = (title) => {
        this.setState({displayhead: title});  
    }
    
    inputtwo = (title) => {
        this.setState({about: title});  
    }
    inputthree = (title) => {
        console.log(title)
        const newbullet = {
            id:uuid.v4(),
            title,
        }
        this.setState({todos: [...this.state.todos,newbullet]});  
    }
    del= () => {
        this.setState({ showinput: false });
    }
   
 
    render(){
       console.log(this.state.pictures)
        var form = this.state.showinput ? <Inputone/> : '';
  return (
    <div className="Homepage">
      <h1>Edit Your Page</h1>
      <h2>Headline</h2>
    <Inputone inputone={this.inputone} del={this.del}/>
      <Display displayhead = {this.state.displayhead}/>
      <br></br>
      <Inputtwo inputtwo={this.inputtwo}/>
      <About about = {this.state.about}/>
      <Inputthree inputthree={this.inputthree}/>
      <Todos todos={this.state.todos}/>
      <Image pictures={this.pictures}/>
      <Imgd pictures={this.state.pictures}/>
      
    </div>
  );
    }
}