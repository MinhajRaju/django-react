import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'




import AdminLayout from './Layout/AdminLayout'
import LoginScreen from './Layout/LoginScreen'
import Dashboard from './Screens/Dashboard'
import NotFound from './Screens/NotFound'
import SellerScreen from './Screens/Seller'
import CustomerScreen from './Screens/Customer'




class App extends React.Component {



  render() {


    return (

      <div>
        <Router>





          <Switch>
            <Route exact path='/' component={LoginScreen} />

            <Route >
              <AdminLayout>
                <Switch>

                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/api/seller" component={SellerScreen} />
                  <Route exact path="/api/customer" component={CustomerScreen} />
                  <Route component={NotFound} />

                </Switch>
              </AdminLayout>
            </Route>





          </Switch>






        </Router>



      </div>


    )


  }



}



export default App;












