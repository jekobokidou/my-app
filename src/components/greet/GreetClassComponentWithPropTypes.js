import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './GreetClassComponentWithState.css'

class GreetClassComponentWithPropTypes extends Component {

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
                <span>{this.props.isSad ? "😟":"😄"}</span>
                <button onClick={this.sayHello}>Say Hello!</button>
            </div>
        )
    }

}

GreetClassComponentWithPropTypes.defaultProps = {
    helloTo : "Hamster",
    isSad : false
};

GreetClassComponentWithPropTypes.propTypes = {
    helloTo : PropTypes.string,
    isSad : PropTypes.bool
};

export default GreetClassComponentWithPropTypes