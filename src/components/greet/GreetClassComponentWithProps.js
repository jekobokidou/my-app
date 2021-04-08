import React, {Component} from 'react'
import './GreetClassComponentWithState.css'

class GreetClassComponentWithProps extends Component {

    constructor(props){
        super(props);
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
                <span className="Greet">Hello {this.props.helloTo}, {this.state.counter}</span>
                <button onClick={this.sayHello}>Say Hello!</button>
            </div>
        )
    }

}

GreetClassComponentWithProps.defaultProps = {
    helloTo : "Hamster"
};

export default GreetClassComponentWithProps