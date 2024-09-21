import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; import Home from './pages/Home'; import Login from './pages/Login'; import Favorites from './pages/Favorites'; import History from './pages/History';

const App = () => { return ( <Router> <Switch> <Route exact path='/' component={Home} /> <Route path='/login' component={Login} /> <Route path='/favorites' component={Favorites} /> <Route path='/history' component={History} /> </Switch> </Router> ); }

export default App;
