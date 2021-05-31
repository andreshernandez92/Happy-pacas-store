import React from'react';
import './App.css';
import Homepage from'./pages/homepage/homepage.component.jsx';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import ShopPage from'./pages/shop/shop.components.jsx';


function App() {
  
  return (
    <div>
      <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route path='/shop' component={ShopPage}></Route> 
    </Switch>
    </BrowserRouter>
    </div>
    );
}

export default App;
