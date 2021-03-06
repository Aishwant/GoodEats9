import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deliveredOrder } from '../../actions/orders';

export class DriverCurrentOrders extends Component {
  state = {
    show: false
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onclick(rid, oid, data) {
    this.props.deliveredOrder(rid, oid, data);
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.onDevOrders).map(t => {
          return [this.props.onDevOrders[t]].map(order => {
            return Object.keys(order).map(i => {
              return (
                <div class="container" style={{ marginTop: "10px" }}>
                  <div className="menuItems textM d-flex">
                    <div class="card-body" style={{ textAlign: "center" }}>
                      <h4 class="card-title">From: {order[i].rName}</h4>
                      <p class="card-text">
                        <h5>To: {order[i].user_info.customerAddress1} {order[i].user_info.customerAddress2}</h5>
                      </p>
                      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                      <Button
                        variant="outline-primary"
                        onClick={this.handleShow.bind(this)}
                        style={{ padding: "auto 8%" }}
                      >
                        <i class="fas fa-book-open fa-lg" fa-lg />
                        <br />
                        View
                      </Button>
                      <Button
                        variant="outline-info"
                        onClick={this.onclick.bind(this, t, i, order[i])}
                        style={{ padding: "auto 8%" }}
                      >
                        <i class="fas fa-check fa-lg" fa-lg />
                        <br />
                        Order Delivered
                      </Button>

                      <Modal
                        size="lg"
                        show={this.state.show}
                        onHide={this.handleClose.bind(this)}
                        dialogClassName="modal-90w"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>
                            <h3 style={{ margin: 0 }}>OrderID: {i}</h3>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div class="row">
                            <div class="col">
                              <h4>Pick Up From:</h4>
                              <h3>{order[i].rName}</h3>
                              <h5>{order[i].rAddress}</h5>
                              <h6>{order[i].rCity} {order[i].rZipcode}</h6>
                            </div>

                            <div class="col">
                              <h4>Deliver To:</h4>
                              <h3>{order[i].user_info.customerFName} {order[i].user_info.customerLName}</h3>
                              <h3>{order[i].user_info.customerAddress1} {order[i].user_info.customerAddress2}</h3>
                              <h5>{order[i].user_info.customerCity} {order[i].user_info.customerZipcode}</h5>
                              {/* <h6>{order.phone}</h6> */}
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="outline-danger"
                            onClick={this.handleClose.bind(this)}
                            style={{ justifyContent: "center" }}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      {/* <Button variant="outline-danger"onClick={() => {this.props.removeOrder(OrderID)}} style={{padding:'auto 8%'}}><i class="far fa-times-circle fa-lg" fa-lg></i><br/>Decline</Button> */}
                    </div>
                  </div>
                </div>
              );
            });
          });
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onDevOrders :state.orderReducer.onDevOrders
})

export default connect(mapStateToProps, { deliveredOrder } )(DriverCurrentOrders);