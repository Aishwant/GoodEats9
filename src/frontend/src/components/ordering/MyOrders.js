import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMyOrders } from '../../actions/orders'
import * as firebase from 'firebase'
import OrderTracker from './OrderTracker';

export class MyOrders extends Component {

  componentDidMount(){
    const uId = localStorage.getItem("uID")+"";
    const rootRef = firebase.database().ref().child('Users').child(uId).child("Customer").child("Orders")
    rootRef.on('value', snap => {
      if(snap.val()) this.props.setMyOrders(snap.val())
    })
  }

  render() {
    const contentKeys = Object.keys(this.props.myOrders);
    {if(contentKeys.length === 0){
      return(
          <div className="container mt-3">
              <h2>You Have No Previous Orders</h2>
          </div>
      )
    }}
    return (
      <div className="container mt-3">
        <h2>My Orders</h2>
        <table className="table table-striped">
            <thead>
              <tr>
                <th>OrderID</th>
                <th>Restaurant</th>
                <th>Date</th>
                <th>Price</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Placeholder</td>
                <td>Placeholder</td>
                <td>Placeholder</td>
                <td>Placeholder</td>
                <td><OrderTracker /></td>
              </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  myOrders: state.orderReducer.myOrders
});

export default connect(mapStateToProps, { setMyOrders } )(MyOrders);