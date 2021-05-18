import './App.css';
import ContainerBoad from './containers/containerBoard';
import ContainerList from './containers/containerList';
import ContainerComments from './containers/containerComments';
import Login from './components/login'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component ={Login}/>
    <Route exact path="/trello" component={ContainerBoad}/>
    <Route exact path="/board" component={ContainerList}/>
    <Route exact path="/comment" component={ContainerComments}/>
    </Switch>
  </Router>
  );
}

export default App;
