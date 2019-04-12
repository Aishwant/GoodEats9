import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from "react-alert";

import AlertTemplate from 'react-alert-template-basic'

import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";
import Alerts from "./layout/Alerts";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import ForgotPwd from "./authentication/ForgotPwd";
import Footer from "./layout/Footer";
import UserDefiner from "./pages/NewUsers/UserDefiner";
import Index from "./Index"
import Menu_Owner from "./owner/Menu_Owner";
import Menu_Customer from "./customer/Menu_Customer";
import Cart from "./ordering/Cart";

import PrivateRoute from "./private/PrivateRoute";
import PrivateHomeRoute from "./private/PrivateHomeRoute"

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/authentication";
import  newOrder  from "./owner/newOrder";
import DriverDeliveryHistory from "./driver/DriverDeliveryHistory";
import OrderHistory from "./customer/OrderHistory";
import OrderTracker from "./customer/OrderTracker";






//Alert Options
const alertOptions = {
  timeout: 5000,
  position: 'top center'
};


class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="content">

                <Switch>
                  <PrivateHomeRoute exact path="/home" component={Index}/>      

                      <PrivateRoute exact path="/" component={Dashboard} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path = "/forgotpwd" component={ForgotPwd} />
                      <PrivateRoute exact path = "/signupinfo" component={UserDefiner} />
                      <PrivateRoute exact path = "/menu/:rName" component={Menu_Customer} />
                      <PrivateRoute exact path = "/editmenu/:rName" component={Menu_Owner}/>
                      <PrivateRoute exact path = "/cart" component={Cart} />
                      <PrivateRoute exact path = "/orderhistory" component={OrderHistory} />
                      <PrivateRoute exact path = "/trackorder/:OrderID" component={OrderTracker} />

    
                </Switch>
                

              </div>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

const bgpic={
  background: 'url("https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3") no-repeat center center fixed',
  WebkitBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  OBackgroundSize: 'cover',
  BackgroundSize: 'cover',
}

ReactDom.render(<App />, document.getElementById("app"));
