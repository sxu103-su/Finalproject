import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default class Inputone extends React.Component{
    state = {
        title: ''
    }
    onChange = (e) => this.setState({title: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.inputone(this.state.title);
        this.setState({ title:''})
    }
 
    render(){
  return (
     <form onSubmit={this.onSubmit}>
         <input 
         className="inputtext"
         type="text"  
         name="title" 
         placeholder="edit heading" 
         value={this.state.title}
         onChange={this.onChange}/>
         <input
         type="submit"
         value="Submit"
         className="btn" />
         <button onClick={this.props.del} className="close">x</button>
     </form>
  );
}
}
