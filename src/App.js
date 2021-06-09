import React from'react';
import './App.css';
import Homepage from'./pages/homepage/homepage.component.jsx';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import ShopPage from'./pages/shop/shop.components.jsx';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-register-up/sign-in-and-register-up.component';
import {auth, Auth} from './firebase/firebase.util';

class App extends React.Component {
constructor(){
super();

this.state =  {
  currentuser:null
}
}

unsuscribeFromAuth = null;

componentDidMount() {
this.unsuscribeFromAuth= auth.onAuthStateChanged(user=> { this.setState({currentuser:user})});
}

componentWillUnmount(){
this.unsuscribeFromAuth();

}

  render(){
  return (
    <div>
            <BrowserRouter>
      <Header currentUser={this.state.currentuser}></Header>

    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route path='/shop' component={ShopPage}></Route> 
    <Route path='/signin' component={SignInAndSignUpPage}></Route>
    </Switch>
    </BrowserRouter>
    </div>
    );
  }}

export default App;
