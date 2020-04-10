import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/users.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import './App.css';


class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>
      {
        if(userAuth)
          {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapShot => {setCurrentUser ({id: snapShot.id, ...snapShot.data()})});
          }

          else
            setCurrentUser(userAuth);
      })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render()
     {
     return <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : <SignInAndSignUp/>}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
      }
  

}

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser})

const mapDispatchToProps = dispatch => {
  return {setCurrentUser: user => dispatch(setCurrentUser(user))}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
