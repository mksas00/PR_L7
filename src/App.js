import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect} from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Posts from "./components/posts";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import LoginForm from "./components/common/loginForm";


function App() {
  return (
      <div className="container-fluid">
          <NavBar />
          <div className="container">
              <div className="content">
                  <Switch>
                      <Route path="/login" component={LoginForm} />
                      <Route path="/posts" component={Posts} />
                      <Route path="/not-found" component={NotFound} />
                      <Route path="/" exact component={Home} />
                      <Redirect to="/not-found" />
                  </Switch>
              </div>
          </div>
      </div>
  );
}


export default App;
