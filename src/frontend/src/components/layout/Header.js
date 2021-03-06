import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authentication";
import { getItemCount } from "../../actions/orders";
import { getOrderCount } from "../../actions/orders";
import { withRouter } from "react-router-dom";
import OrdersPending from "../owner/OrdersPending";

export class Header extends Component {
  static propTypes = {
    authReducer: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const contentKeys = Object.keys(this.props.user)
    const { isAuthenticated } = this.props.authReducer;
    let path = location.href+"";

    if (path.substr(path.length - 4 ) == "home") path = false
    const authLinks = (
      <li className="nav-item">
        <Link to="/home" className="nav-link" onClick={this.props.logout}>
          Log Out <i className="fas fa-sign-out-alt"></i>
        </Link>
      </li>
    );

    const guestLinks1 = (
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    );
    const guestLinks = (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    );

    const nonemptyCart = (
      <li className="nav-item">
        <Link to="/cart" className="nav-link">
          <i className="fas fa-shopping-cart">
            <span className="badge badge-pill badge-danger">{this.props.itemCount}</span>
          </i>
        </Link>
      </li>
    );
    
    const emptyCart = (
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <i className="fas fa-shopping-cart">
            </i>
          </Link>
        </li>
    );

    let myOrdersOption = (contentKeys[0] === "Customer") || (contentKeys[0] === "Owner") ? <Link to="/myOrders" className="dropdown-item">My Orders</Link> : "";
    switch(contentKeys[0]){
      case "Customer":
                      myOrdersOption = <Link to="/myOrders" className="dropdown-item">My Orders</Link>;
                      break;
      case "Owner":
                      myOrdersOption = <Link to="/myRestaurantsOrders" className="dropdown-item">My Orders</Link>;
                      break;
      case "Driver":
                      myOrdersOption = "";
                      break;
    }

    const settings = (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-cog"></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {myOrdersOption}
          {contentKeys[0] === "Customer" ? <Link to="/myProfile" className="dropdown-item">My Profile</Link> : <Link to="/Profile" className="dropdown-item">My Profile</Link> }
          <div className="dropdown-divider"></div>
          <li className="dropdown-item">
            <Link to="/home" className="dropdown-item" onClick={this.props.logout}>
              Log Out <i className="fas fa-sign-out-alt"></i>
            </Link>
          </li>
        </div>
      </li>
    )


    
  
  
    const driverMode = (
      <a><i class="fas fa-car-alt fa-sm"style={{color:'white'}}></i></a>)

    const customerMode = (
      <a><i class="fas fa-user-tag fa-sm" style={{color:'white'}}></i></a>)


      const ownerMode = (
        <a><i class="fas fa-utensils fa-sm" style={{color:'white'}}></i></a>)

    const ordersPending = (
      <li className="nav-item">
        <OrdersPending />
      </li>
    )

    const cart = this.props.itemCount > 0 ? nonemptyCart : emptyCart

    return (
      <nav className={path?"navbar navbar-expand-lg navbar-dark bg-dark navSize":"navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light"} id="ftco-navbar">
        <div className="container">

          <a className="navbar-brand" style={borderStyle} href="/">GoodEats</a>
          
         
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">

          {isAuthenticated && contentKeys[0] === "Owner" ? ownerMode : ""}
          {isAuthenticated && contentKeys[0] === "Customer" ? customerMode : ""}
          {isAuthenticated && contentKeys[0] === "Driver" ? driverMode : ""}
         
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
              {isAuthenticated ? "" : guestLinks}
              {isAuthenticated ? "" : guestLinks1}
              {isAuthenticated && contentKeys[0] === "Customer" ? cart : ""}
              {isAuthenticated && contentKeys[0] === "Owner" ? ordersPending : ""}
              {isAuthenticated ? settings : ""}
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

const navStyle = {
  backgroundColor: "#00B9F3",
  marginBottom: "25px",
};

const borderStyle = {
  border: "solid 2px #fff",
  padding: '4px'
}

const colorWhite ={
    color: '#fff'
}

const mapStateToProps = state => ({
  authReducer: state.authReducer,
  itemCount:  state.cartReducer.itemCount,
  user: state.authReducer.user,
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout, getItemCount, getOrderCount }
  )(Header)
);