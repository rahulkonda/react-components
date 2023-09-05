import React, {Component, Fragment, createElement} from "react";

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count: props.value};
    }
    incrementHandler = ()=>{
        this.setState({count: this.state.count+1});
    }
    
    decrementHandler = ()=>{
        this.setState({count: this.state.count-1});
    }
    render(){
        return createElement(
            Fragment,
            null,
            createElement("div", null, "Counter using class Component"),
            createElement("div", null, this.state.count),
            createElement("div",
                null,
                createElement("button", {onClick:this.incrementHandler}, "Increment"),
                createElement("button", {onClick:this.decrementHandler}, "Decrement")
            )
        )
        // return (
        //     <>
        //         <div> Counter using class Component</div>
        //         <div>{this.state.count}</div>
        //         <div>
        //             <button onClick={this.incrementHandler}>Increment</button>
        //             <button onClick={this.decrementHandler}>Decrement</button>
        //         </div>
        //     </>
        // )
    }
}

export default Counter;