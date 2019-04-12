import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCart, deleteCartItem, placeOrder } from '../../actions/orders';
import EditInstructionsModal from './EditInstructionsModal';
import Total from './Total';
import PlaceOrder from './PlaceOrder';

export class Cart extends Component {
    state = {
        total: 0
    }

    addToTotal(price){
        this.setState({
            total: total+price
        })
    }

    static propTypes = {
        getCart: PropTypes.func.isRequired,
        deleteCartItem: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getCart();
    }

  render() {
    const contentKeys = Object.keys(this.props.items);
    return (
        
        <div className="container">
            {contentKeys.map(i =>

                <div>
                <h2>{this.props.restaurants[i].Name} Cart</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                
                    {Object.keys(this.props.items[i]).map(j => 
                        [this.props.items[i][j]].map(item =>
                        {if(j !== "total"){ return(
                        <tr >
                            <td>{item.Name}</td>
                            <td>{item.Description}</td>
                            <td>{item.Quantity}</td>
                            <td>{item.Price}</td>
                            <td className="text-right">
                            <div className="row"><EditInstructionsModal rID={i} itemID={j} Instructions={item.Instructions}/>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={this.props.deleteCartItem.bind(this, i, j, item.Quantity, item.Price)}
                            >
                                {" "}
                                Delete
                            </button>
                            </div>
                            </td>
                        </tr>
                        )}
                        else{return(
                            <tr className="table-info">
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td><Total total={this.props.items[i][j]}/></td>
                                <td><PlaceOrder items={this.props.items[i]}/></td>
                            </tr>
                        )}
                    }
                    ))}
                </tbody>
                </table>
                </div>
            )} 
        </div>
        
    )
  }
}

const mapStateToProps = state =>({
    restaurants: state.restaurantReducer.restaurants,
    items: state.cartReducer.items
});

export default connect(mapStateToProps, { getCart, deleteCartItem, placeOrder } )(Cart);
