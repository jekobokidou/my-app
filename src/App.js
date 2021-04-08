import logo from './logo.svg';
import './App.css';
import MenuSimpleComponent from './components/menu/MenuSimpleComponent.js';
import MenuComponentWithProps from './components/menu/MenuComponentWithProps.js';
import GreetClassComponentWithState from './components/greet/GreetClassComponentWithState.js';
import GreetClassComponentWithProps from './components/greet/GreetClassComponentWithProps.js';
import GreetClassComponentWithPropTypes from './components/greet/GreetClassComponentWithPropTypes.js';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MenuSimpleComponent/>
        <MenuComponentWithProps connected={true}/>
        <MenuComponentWithProps connected={false}/>
        <GreetClassComponentWithState/>
        <GreetClassComponentWithProps helloTo="Joseph"/>
        <GreetClassComponentWithProps helloTo="Stephane"/>
        <GreetClassComponentWithProps/>
        <GreetClassComponentWithPropTypes/>
        <GreetClassComponentWithPropTypes helloTo="Dorine" isSad={true}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
