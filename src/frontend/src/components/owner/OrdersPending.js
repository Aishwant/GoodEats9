import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Modal from 'react-modal';
import { getRestaurantByID } from "../../actions/getRestaurants";

export class OrdersPending extends Component {
    constructor() {
        super();
    
        this.state = {
            owner_ID:'',
            res_IDs:null,
            modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

    componentDidMount(){
        this.state.owner_ID = localStorage.getItem('uID');
        this.props.getRestaurantByID();
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    
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

      onSubmit = e => {
        e.preventDefault();
    }
    
    orders = {
        orders1 : {
            rid: "1af1f842-5320-4868-866f-686ff5973180",
            rName: "Boure",
            owner_ID:"7tXRHUVp2uNScdBm1gwHrmDdoB92",
            total: '20.00',
            user_info:{
                address: "123",
                phone: "123",
                email: "test@test.com"
            },
            items:{
                itemId1:{
                    Description: "spicy or mild",
                    Instructions: "",
                    Name:"5pc Tenders",
                    Price:"6.99",
                    Quantity: 1
                },
                itemId2:{
                    Description: "spicy or mild",
                    Instructions: "",
                    Name:"5pc Tenders",
                    Price:"6.99",
                    Quantity: 1
                }
            }
        }
    }
      render() {
        this.state.res_IDs = Object.keys(this.props.restaurants);
        return (
          <div>
            <a className="nav-link" onClick={this.openModal}>Orders Pending</a>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              className="pre-scrollable"
            >
              <div className="modal-dialog modal-dialog-1">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Orders Pending</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div id="accordion">
                {
                    Object.keys(this.props.pendingOrders).map(t=>
                        [this.props.pendingOrders[t]].map(orders=>{
                            
                            return(
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target={"#" + t} aria-expanded="true" aria-controls="collapseOne">
                                        {t}
                                        </button>
                                        <button className="btn btn-success">Accept</button> | <button className="btn btn-danger">Reject</button>
                                    </h5>
                                    </div>

                                    <div id={t} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                    {
                                        
                                          <p>Placeholder data</p>
                                    
                                    }
                                    </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    
                        )
                    
                }
                    
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Collapsible Group Item #2
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Collapsible Group Item #3
                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                </div>
              </div>
              </div>
            </Modal>
          </div>
        );
      }
}

const mapStateToProps = state => ({
    restaurants: state.restaurantReducer.restaurants,
    pendingOrders: state.orderReducer.pendingOrders
  });

export default connect(mapStateToProps, { getRestaurantByID })(OrdersPending);
