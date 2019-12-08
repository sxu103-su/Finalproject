import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default class Inputtwo extends React.Component{
    state = {
        title: ''
    }
    onChange = (e) => this.setState({title: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.inputtwo(this.state.title);
        this.setState({ title:''})
    }
    render(){
  return (
     <form onSubmit={this.onSubmit}>
         <textarea
         className="inputtext description"
         type="text"  
         name="title" 
         placeholder="Describe yourself" 
         value={this.state.title}
         onChange={this.onChange}/>
         <input
         type="submit"
         value="Submit"
         className="btn"/>
         <button onClick={this.props.del} className="close">x</button>
     </form>
  );
}
}