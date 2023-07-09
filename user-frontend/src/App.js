import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import UserLayout from './Layout/UserLayout'
import Dashboard from './Screens/Dashboard'

import CategoryProductScreen from './Screens/CategoryProduct'
import CartScreen from './Screens/Cart'

import PaymentScreen from './Screens/Payment'
import SingleProductScreen from './Screens/SingleProdcut'
import RegisterScreen from './Screens/Register'
import LoginScreen from './Screens/Login'
import CustomerProfileScreen from './Screens/UserProfile'

class App extends React.Component {



  render() {


    return (

      <div>

        <Router>









          <Route >

            <Switch>


              <Route exact path="/" component={Dashboard} />
              <Route exact path="/category/:id" component={CategoryProductScreen} />
              <Route exact path="/cart" component={CartScreen} />

              <Route exact path="/payment" component={PaymentScreen} />
              <Route exact path="/product/:slug" component={SingleProductScreen} />
              <Route exact path="/register" component={RegisterScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/profile" component={CustomerProfileScreen} />





            </Switch>

          </Route>












        </Router>



      </div>


    )


  }



}




export default App;












