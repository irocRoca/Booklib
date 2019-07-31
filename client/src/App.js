import React from "react";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import AddBook from "./components/AddBook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/addbook" exact component={AddBook} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
