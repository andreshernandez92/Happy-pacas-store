import React from'react';
import './App.css';
import Homepage from'./pages/homepage/homepage.component.jsx';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

const Hatspage = () =>(
<div>
<h1>Hats Page</h1>
</div>
);


function App() {
  
  return (
    <div>
      <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route path='/hats' component={Hatspage}></Route> 
    </Switch>
    </BrowserRouter>
    </div>
    );
}

export default App;
