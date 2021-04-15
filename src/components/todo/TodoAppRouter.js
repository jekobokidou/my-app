import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './TodoApp.css'

class TodoAppRouter extends Component {



    render (){
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponentShowMsg} />
                        <Route path="/login" component={LoginComponentShowMsg} />
                        <Route path="/loginnew" component={LoginComponentShowMsgPush} />
                        <Route path="/loginparam" component={LoginComponentShowMsgPushParam} />
                        <Route path="/welcome" component={WelcomeComponent}/>
                        <Route path="/welcomeparam/:loginname" component={WelcomeParamComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </Router>     
            </div>
        )
    }

}

class WelcomeParamComponent extends Component {
    render (){
        return (
            <div>Welcome to Kapsiki dear {this.props.match.params.loginname}</div>
        )
    }  
}

class WelcomeComponent extends Component {
    render (){
        return (
            <div>Welcome to Kapsiki</div>
        )
    }  
}

class ErrorComponent extends Component {
    render (){
        return (
            <div>Oups please call the support it looks like 404 error 😱 </div>
        )
    }  
}

class LoginComponentShowMsgPushParam extends Component {

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
            this.props.history.push(`/welcomeparam/${this.state.username}`);

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

class LoginComponentShowMsgPush extends Component {

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
            this.props.history.push("/welcome");
            /*this.setState({
                hasLoginFailed : false,
                showSuccessMessage : true
            });*/
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

export default TodoAppRouter