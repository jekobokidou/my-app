import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './TodoApp.css'
import AuthenticationService from './AuthenticationService.js'
import { Redirect, withRouter } from 'react-router'
import axios from 'axios'

class TodoAppAuth extends Component {


    render (){
        const HeaderComponentWithRouter = withRouter(HeaderComponent);
        return (
            <div className="TodoApp">

                <Router>
                    <HeaderComponentWithRouter/>
                        <Switch>
                            <Route path="/" exact component={LoginComponentShowMsgPushParam} />
                            <Route path="/login" component={LoginComponentShowMsgPushParam} />
                            <AuthenticatedRoute path="/welcome/:loginname" component={WelcomeParamComponent}/>
                            <AuthenticatedRoute path="/tasks" component={ListTasksComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    <FooterComponent/> 
                </Router>
                
            </div>
        )
    }

}

class AuthenticatedRoute extends Component{
    //spread operator
    render(){
        if(AuthenticationService.isUserLogged()){
           return <Route {...this.props}/>
        }else{
           return <Redirect to="/login"/>

        }
    }
}

class ListTasksComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {identifiant: 1, titre: "Etude de cas", encours:true, dateDeCreation: new Date()},
                {identifiant: 2, titre: "Analyse", encours:true, dateDeCreation: new Date()},
                {identifiant: 3, titre: "Développement", encours:false, dateDeCreation: new Date()},
                {identifiant: 4, titre: "Tests", encours:true, dateDeCreation: new Date()},
                {identifiant: 5, titre: "Packaging", encours:true, dateDeCreation: new Date()}
            ] 
        };
    }


    render (){
        return (
            <div className="container">
                <h1>List of tasks</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>identifiant</th>
                            <th>titre</th>
                            <th>En cours ?</th>
                            <th>Date de création</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map (task =>
                        <tr key={task.identifiant}>
                            <td>{task.identifiant}</td>
                            <td>{task.titre}</td>
                            <td>{task.encours.toString()}</td>
                            <td>{task.dateDeCreation.toString()}</td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }  
}


class HeaderComponent extends Component {
    render (){
        const isUserLogged = AuthenticationService.isUserLogged();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <div><a className="navbar-brand" href="/">My-App</a></div>
                    <ul className="navbar-nav">
                        {isUserLogged && <li><Link className="nav-item nav-link" to="/welcome/jekoboki">Accueil</Link></li>}
                        {isUserLogged && <li><Link className="nav-item nav-link" to="/tasks">Tâches</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogged && <li><Link className="nav-item nav-link" to="/login">Connexion</Link></li>}
                        {isUserLogged && <li><Link className="nav-item nav-link" to="/logout" onClick={AuthenticationService.logUserOut}>Déconnexion</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }  
}

class LogoutComponent extends Component {
    render (){
        return (
            <div>
                <h1>Vous êtes déconnecté</h1>
            </div>
        )
    }  
}

class FooterComponent extends Component {
    render (){
        return (
            <footer className="footer">
                <span className="text-muted">Propulsé par Kapsiki - Développé en REACT JS</span>
            </footer>
        )
    }  
}

class WelcomeParamComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            helloMessage : ''
        };

        this.handleGetHello = this.handleGetHello.bind(this);
        this.handleGetHelloBean = this.handleGetHelloBean.bind(this);
        this.handleSuccessHello = this.handleSuccessHello.bind(this);
        this.handleSuccessHelloBean = this.handleSuccessHelloBean.bind(this);
        this.handleErrorHello = this.handleErrorHello.bind(this);
    }

    handleSuccessHello(response){
        this.setState({
            helloMessage : response.data
        });
    }

    handleSuccessHelloBean(response){
        this.setState({
            helloMessage : response.data.message
        });
    }

    handleErrorHello(error){
        console.log(error);
    }

    handleGetHello(){
        axios.get('http://localhost:8080/hello-world')
            .then(response => this.handleSuccessHello(response))
            .catch(error => this.handleErrorHello(error));
    }

    handleGetHelloBean(){
        axios.get('http://localhost:8080/hello-world-bean')
            .then(response => this.handleSuccessHelloBean(response))
            .catch(error => this.handleErrorHello(error));
    }
    render (){
        return (
            <div className="container">
                <h1>Welcome to Kapsiki dear {this.props.match.params.loginname}. </h1>
                <div>Your tasks <a href="/tasks">here_ahref</a></div>
                <div>Your tasks <Link to="/tasks">here_Link</Link></div>
                <div className="container">
                    <button onClick={this.handleGetHello} className="btn btn-success">Get Hello From Spring Boot</button>
                </div>
                <div className="container">
                    <button onClick={this.handleGetHelloBean} className="btn btn-success">Get Hello From Spring Boot Bean</button>
                </div>
                <div>{this.state.helloMessage}</div>
            </div>
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
            this.props.history.push(`/welcome/${this.state.username}`);
            AuthenticationService.logUserIn();
            console.log("Sucess");
        }else{
            AuthenticationService.logUserOut();
            this.setState({
                hasLoginFailed : true,
                showSuccessMessage : false
            });
            console.log("Failed");
        }
        
    }

    render (){
        return (
            <div>
                <h1>Connexion</h1>
                <div className="container">
                    <ShowInvalidMessage hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
                    <div>Login : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
                    <div>Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
                    <div><button className="btn btn-success" onClick={this.loginClicked}>Login</button></div>
                </div>
            </div>
        )
    }
    
}

function ShowInvalidMessage(props){
    if(props.hasLoginFailed){
        return <div className="alert alert-warning">Invalid Credentials</div>
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

export default TodoAppAuth