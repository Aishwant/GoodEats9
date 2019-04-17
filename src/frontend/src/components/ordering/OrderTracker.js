import React, { Component } from 'react'
import Modal from 'react-modal'
import * as firebase from 'firebase'

export class OrderTracker extends Component {
    constructor() {
        super();
    
        this.state = { 
           modalIsOpen: false,
           progress: "50%",
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
    componentDidMount(){
        const uId = localStorage.getItem("uID")+"";
        const rootRef = firebase.database().ref().child('Users').child(uId).child("Customer").child("Orders").child(this.props.orderID).child("status")
        rootRef.on('value', snap => {
            if(snap.val()) {
                switch(snap.val()){
                    case "PENDING":
                        this.state.progress = "10%";
                        break;
                    case "ACCEPTED_BY_OWNER":
                        this.state.progress = "20%";
                        break;
                    case "ACCEPTED_BY_DRIVER":
                        this.state.progress = "30%";
                        break;
                    case "ON_DELIVERY":
                        this.state.progress = "90%";
                        break;
                    case "DELIVERED":
                        this.state.progress = "100%";
                        break;
                    default:
                        this.state.progress = "0%";
                        break;
                }
            }
        })
    }

    openModal() {
    this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }

  render() {
    return (
      <div>
        <button className="btn btn-success btn-sm" onClick={this.openModal}>Track</button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="add Item Modal"
            className="modal-dialog modal-dialog-1"
        >
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Order Tracker</h5>
                <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div className="row mt-3">
                <h4 className="text-left">Pending</h4>
                <h4 className="mx-3">Accepted</h4>
                <h4 className="mx-3">John is your driver</h4>
                <h4 className="mx-3">John is on his way</h4>
                <h4 className="text-right">Delivered</h4>
            </div>

            <div className="progress mb-3 mx-3" style={pStyle}>
                <div className="bar-step label-line" style={{left: "20%"}}></div>
                <div className="bar-step label-line" style={{left: "40%"}}></div>
                <div className="bar-step label-line" style={{left: "60%"}}></div>
                <div className="bar-step label-line" style={{left: "80%"}}></div>
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: this.state.progress}}></div>
            </div>
            </div>
        </Modal>
      </div>
    )
  }
}

const pStyle = {
    height: "50px",
    borderWidth: "5px"
};

export default OrderTracker;
