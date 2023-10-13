
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from './components/LoginPage';
import { useState } from "react";
import Header from "./components/Header.js";
import MainPage from './components/MainPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  return (
    
    <Router>
      <div className="App">
        <main className="main">
        <Header path ="/"  userName={userName} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Switch>
            
            <Route 
              exact path = "/login" 
              render={(props)=>(
              <LoginPage {...props} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
              )}
              />
              
              <Route exact path="/" component ={MainPage} />
              

          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
