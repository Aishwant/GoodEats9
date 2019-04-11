import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






export class DriverPlacedOrder extends Component{

  state = {
    show: false,
  }

      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      
    render(){

        return(

            <div>
              
                {
                  
                    Object.keys(this.props.pendingDevOrders).map(t =>{
                    return(    
                    [this.props.pendingDevOrders[t]].map(order =>{
                      return(
                        
                        Object.keys(order).map(i => {
                            console.log(order[i].rName)
                                return(
                                    
                                    <div class="container" style={{marginTop: "10px"}}>
                                        
                                        <div class="card" style={{width:'100%',borderRadius:'2%', border: '4px solid darkgreen'}}>
                                            <div class="card-body" style={{textAlign:'center'}}>
                                                <h4 class="card-title">From: {order[i].rName}</h4>
                                                <p class="card-text"><h5>To: {order[i].user_info.address}</h5></p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button variant="outline-success" onClick={console.log('clicked')} style={{padding:'auto 8%'}}><i class="fas fa-check-circle fa-lg"></i><br/>Accept</Button>
                                                <Button variant="outline-primary" onClick={this.handleShow.bind(this)} style={{padding:'auto 8%'}}><i class="fas fa-book-open fa-lg" fa-lg></i><br/>View</Button>
            
                                                <Modal size="lg" show={this.state.show} onHide={this.handleClose.bind(this)}  dialogClassName="modal-90w">
                                                    <Modal.Header closeButton>
                                                    <Modal.Title ><h3 style={{margin:0}}>OrderID</h3></Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div class="row">
                                                        <div class="col">
                                                        <h4>Pick From</h4>
                                                        <h3>{order[i].rName}</h3>
                                                        <h5>Address</h5>
                                                        <h6>City, Zip Code</h6>
                                                        </div>
            
                                                        <div class="col">
                                                        <h4>Deliver To</h4>
                                                        <h3>{order[i].user_info.address}</h3>
                                                        <h5>City, Zip Code</h5>
                                                        {/* <h6>{order.phone}</h6> */}
                                                        </div>
                                                        
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="outline-danger" onClick={this.handleClose} style={{justifyContent:'center'}}>
                                                        Close
                                                        </Button>
                                                        
                                                    </Modal.Footer>
                                                    </Modal>
                                                {/* <Button variant="outline-danger"onClick={() => {this.props.removeOrder(OrderID)}} style={{padding:'auto 8%'}}><i class="far fa-times-circle fa-lg" fa-lg></i><br/>Decline</Button> */}
                                            
                                            </div>
                                        </div>
                                    </div>
                                )

                    
                        
                        })
                        
                      )  
                    })
                    )
                })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
  pendingDevOrders: state.orderReducer.pendingDevOrders
});

export default connect(mapStateToProps,null)(DriverPlacedOrder);