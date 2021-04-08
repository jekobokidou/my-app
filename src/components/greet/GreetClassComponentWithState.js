import React, {Component} from 'react'
import './GreetClassComponentWithState.css'

class GreetClassComponentWithState extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0
        };
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello(){
        //this.state.counter++;
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render (){
        return (
            <div>
                <br/>
                <span className="Greet">Hello Guys, {this.state.counter}</span>
                <button onClick={this.sayHello}>Say Hello!</button>
            </div>
        )
    }

} 

export default GreetClassComponentWithState