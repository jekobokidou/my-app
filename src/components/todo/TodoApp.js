import React, {Component} from 'react'
import './TodoApp.css'

class TodoApp extends Component {



    render (){
        return (
            <div className="TodoApp">
                My Todo Application
                <LoginComponent/>
                <LoginComponentSingleChange/>
                <LoginComponentClicked/>   
                <LoginComponentLogMsg/>     
                <LoginComponentShowMsg/>     
            </div>
        )
    }

} 

class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : "jekoboki",
            password : ""
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event){
        console.log(event.target.value);
        this.setState({
            username : event.target.value
        });
    }

    handlePasswordChange(event){
        console.log(event.target.value);
        this.setState({
            password : event.target.value
        });
    }

    render (){
        return (
            <div className="App-Login">
                <div>Login : <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/></div>
                <div>Password : <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/></div>
                <div><button>Login</button></div>
            </div>
        )
    }

} 

class LoginComponentSingleChange extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : "jekoboki",
            password : ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render (){
        return (
            <div className="App-Login">
                <div>Login : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
                <div>Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
                <div><button>Login</button></div>
            </div>
        )
    }

}

class LoginComponentClicked extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : "jekoboki",
            password : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    loginClicked(){
        //jekoboki - 12345
        if(this.state.username === "jekoboki" && this.state.password === "12345"){
            console.log("Sucess");
        }else{
            console.log("Failed");
        }
        
    }

    render (){
        return (
            <div className="App-Login">
                <div>Login : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
                <div>Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
                <div><button onClick={this.loginClicked}>Login</button></div>
            </div>
        )
    }

    
} 


class LoginComponentLogMsg extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : "jekoboki",
            password : "",
            hasLoginFailed : false,
            showSuccessMessage : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    loginClicked(){
        //jekoboki - 12345
        if(this.state.username === "jekoboki" && this.state.password === "12345"){
            this.setState({
                hasLoginFailed : false,
                showSuccessMessage : true
            });
            console.log("Sucess");
        }else{
            this.setState({
                hasLoginFailed : true,
                showSuccessMessage : false
            });
            console.log("Failed");
        }
        
    }

    render (){
        return (
            <div className="App-Login">
                <div>Login : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
                <div>Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
                <div><button onClick={this.loginClicked}>Login</button></div>
            </div>
        )
    }

    
}

class LoginComponentShowMsg extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : "jekoboki",
            password : "",
            hasLoginFailed : false,
            showSuccessMessage : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    loginClicked(){
        //jekoboki - 12345
        if(this.state.username === "jekoboki" && this.state.password === "12345"){
            this.setState({
                hasLoginFailed : false,
                showSuccessMessage : true
            });
            console.log("Sucess");
        }else{
            this.setState({
                hasLoginFailed : true,
                showSuccessMessage : false
            });
            console.log("Failed");
        }
        
    }

    render (){
        return (
            <div className="App-Login">
                <ShowInvalidMessage hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
                <div>Login : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
                <div>Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
                <div><button onClick={this.loginClicked}>Login</button></div>
            </div>
        )
    }

    
} 

function ShowInvalidMessage(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }else {
        return null
    }
}

function ShowSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }else {
        return null
    }
}

export default TodoApp