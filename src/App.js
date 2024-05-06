import { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0Provider";
import { useAuth0 } from "@auth0/auth0-react";
import CarRentalWebsite from "./carRentalOuter";
import InnerScreen from "./innerScreen";



function Home() {
  
  const { user, isLoading, logout, loginWithRedirect } = useAuth0();


  return (
    <>
      {isLoading && <div>Loading...</div>}

      {!isLoading && !user && (
        <><div className="bg-dark" style={{justifyContent:"flex-end", display:"flex",}}>
          <button
            className="btn btn-primary btn-block mx-3 my-2"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
          </div>
          <CarRentalWebsite />
        </>
      )}
      {!isLoading && user && (
      <InnerScreen logout={logout}/>
      )}
    </>
  );
}
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    // Redirect user to Auth0 login page on component mount
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <div>
      <h1>Logging in...</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
}
export default App;
