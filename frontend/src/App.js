import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'



import ProductAddScreen from './Screens/ProductAddScreen'
import AllProductDataScreen from './Screens/AllProductData'

import PurchaseAddScreen from './Screens/PurchaseAddScreen'
import ManageOrder from './Screens/ManageOrder'

import AdminLayout from './Layout/AdminLayout'
import LoginScreen from './Layout/LoginScreen'
import Dashboard from './Screens/Dashboard'
import NotFound from './Screens/NotFound'
import Invoice from './Screens/InvoiceScreen'




class App extends React.Component {



  render() {


    return (

      <div>
        <Router>





          <Switch>
            <Route exact path='/' component={LoginScreen} />
            <Route exact path="/invoice/:id" component={Invoice} />


            <Route >
              <AdminLayout>
                <Switch>

                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/product/add/" component={ProductAddScreen} />
                  <Route exact path="/product/all/" component={AllProductDataScreen} />
                  <Route exact path="/purchase/add/" component={PurchaseAddScreen} />
                  <Route exact path="/orders/" component={ManageOrder} />
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












