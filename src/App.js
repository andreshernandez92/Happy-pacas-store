import React from'react';
import './App.css';
import Homepage from'./pages/homepage/homepage.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from'./pages/shop/shop.components.jsx';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-register-up/sign-in-and-register-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action.js'
class App extends React.Component {

unsuscribeFromAuth = null;

componentDidMount() {
const {setCurrentUser} = this.props;
this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth=> { 
if(userAuth){
  const userRef = await createUserProfileDocument(userAuth);
  userRef.onSnapshot(snapShot => {
  setCurrentUser( {
      id: snapShot.id,
      ...snapShot.data()
    });
})
}
setCurrentUser(userAuth)
})}

componentWillUnmount() {
  this.unsuscribeFromAuth();
  };
  
  render(){
  return (
    <div>
  
      <Header></Header>

    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route path='/shop' component={ShopPage}></Route> 
    <Route exact path='/signin' render={()=> this.props.currentUser ? 
    (<Redirect to='/'></Redirect>) 
    : 
    (<SignInAndSignUpPage></SignInAndSignUpPage>)}
    ></Route>
    </Switch>
    
    </div>
    );
  }}
  const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  })

const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
