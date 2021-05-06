class AuthenticationService {
    logUserIn(){
        sessionStorage.setItem("isUserLogged", true);
        //console.log("logUserIn");
    }
    logUserOut(){
        sessionStorage.removeItem("isUserLogged");
        //console.log("logUserOut");
    }

    isUserLogged(){
        let isLogged = sessionStorage.getItem("isUserLogged");
        if(isLogged === null) {
            console.log("notLogged");
            return false;
        }else{
            console.log("isLogged");
            return true;
        }
    }
}

export default new AuthenticationService();