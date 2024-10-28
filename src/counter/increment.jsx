import { Component } from "react";
class Increment extends Component{
    constructor(){
        super()
        this.state={
            a:0
        }
    }
    increment=()=>{
        this.setState({
            a:this.state.a+1
        })
    }
    decrement=()=>{
        this.setState({
            a:this.state.a-1
        })
    }
    render(){
        var b;
        if(this.state.a>5){
            b=<h1 style={{color:"red"}}>  {this.state.a}</h1>

        }else if(this.state.a<=5 && this.state.a>=0){
            b=<h1 style={{color:"blue"}}>  {this.state.a}</h1>

        }
        else {
            b=<h1 style={{color:"yellow"}}>  {this.state.a}</h1>
        }


        return(<>
        <h1>this is karnakar</h1>
        <button onClick={this.decrement}>decrement</button>
        {b}
   
        <button onClick={this.increment}>increment</button>
        </>)
    }
}
export default Increment;