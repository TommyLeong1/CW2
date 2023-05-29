import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CatList from './components/CatList';
import CatDetails from './components/CatDetails';
import Login from './components/Login';
import Register from './components/Register';
import AddCat from './components/AddCat';
import EditCat from './components/EditCat';
import MessageList from './components/MessageList';
import AddMessage from './components/AddMessage';
import EditMessage from './components/EditMessage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cats" component={CatList} />
          <Route exact path="/cats/add" component={AddCat} />
          <Route exact path="/cats/:id" component={CatDetails} />
          <Route exact path="/cats/edit/:id" component={EditCat} />
          <Route exact path="/messages" component={MessageList} />
          <Route exact path="/messages/add" component={AddMessage} />
          <Route exact path="/messages/edit/:id" component={EditMessage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;