import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRestaurantByID, deleteRestaurant } from '../../actions/getRestaurants';
import FormMenu from './FormMenu';
import {Link} from 'react-router-dom';
import EditRestaurant from './EditRestaurant';
import EditModal from './EditModal';




export class Restaurant extends Component {

  componentDidMount(){
    this.props.getRestaurantByID();
  }

  state = {
    query: '',
    showForm:false,
    search: false,
    nameS: true,
    zipcodeS: false,
    cityS:false,
    closeS:false,
    filter:'nameS'
  }
  
  handleClick= event =>{
    event.preventDefault()
    this.setState({showForm:true})
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    })
    if(this.state.query!==''){
      this.setState({
        search: true
      })
    }
    if(this.state.filter=="nameS"){
      this.setState({nameS:true,zipcodeS:false,cityS:false,closeS:false});
    }else if(this.state.filter=="zipcodeS"){
      this.setState({nameS:false,zipcodeS:true,cityS:false,closeS:false});
    }else if(this.state.filter=="cityS"){
      this.setState({nameS:false,zipcodeS:false,cityS:true,closeS:false})
    }else if(this.state.filter=="closeS"){
      this.setState({nameS:false,zipcodeS:false,cityS:false,closeS:true})
    }
  }

  onChange=e=> {
    this.setState({filter:e.target.value});
  }

  modalID = 0;

  render() {
    const contentKeys = Object.keys(this.props.restaurants)
    const { filter } = this.state;
    //console.log((this.props.restaurants))
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-6 mt-2" style={{marginBottom:"20px"}}>
          <div className="input-group">
          <input
          type="text"
          placeholder="Search with"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          className="form-control"
          aria-label="Text input with dropdown button"
        />
            <select class="input-group-append" id="inlineFormCustomSelect" value={filter} onChange={this.onChange}>
              <option value="nameS" selected>Name</option>
              <option value="zipcodeS">Zipcode</option>
              <option value="cityS">City</option>
              <option value="closeS">CloseTime</option>
            </select>
          </div>
          </div>

          
        </div>

        {contentKeys.map(t=>
        
          [this.props.restaurants[t]].map(res =>
           { if 
              (this.state.query !== '' &&
                (
                  (this.state.nameS && res.Name.toUpperCase().includes(this.state.query.toUpperCase()))||
                  (this.state.zipcodeS && res.zipcode.toUpperCase().includes(this.state.query.toUpperCase())) ||
                  (this.state.cityS && res.City.includes(this.state.query))||
                  (this.state.closeS && res.Close.includes(this.state.query))
                )
              )
              {
             
              return (
              <div className="col-md-3">
                <div className="card" style={cardWidth}>
                  <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{res.Name}</h5>
                    <p className="card-text">
                      <h6>{res.Address}</h6>
                      <h6>{res.City} {res.zipcode}</h6> 
                      <h6>Open:{res.Open}</h6>
                      <h6>Close:{res.Close}</h6>
                    </p>
                    <div className="row">
                      <Link to={`/editmenu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>

                      <EditModal mID={this.modalID} name={res.Name} address={res.Address} city={res.City} zipcode={res.zipcode} open={res.Open} close={res.Close} rID={t}/>
                      <button
                        onClick={this.props.deleteRestaurant.bind(this, t)}
                        className="btn btn-danger ml-2"
                      >
                        {" "}
                        Delete
                      </button>
                    </div>
                  </div>
              </div>
              </div>
            )
            }else{
              if(this.state.query){
                return('')
              }else{
                return (
                  <div className="col-md-3">
                    <div className="card" style={cardWidth}>
                    <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fevanwise.jpg?alt=media&token=6986eebb-7928-42d6-9d4e-7589990f29b3" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{res.Name}</h5>
                      <p className="card-text">
                        <h6>{res.Address}</h6>
                        <h6>{res.City} {res.zipcode}</h6> 
                        <h6>Open:{res.Open}</h6>
                        <h6>Close:{res.Close}</h6>
                      </p>
                      <div className="row">
                        <Link to={`/editmenu/${res.Name}?id=${t}`} name={res.Name} className="btn btn-primary">Menu</Link>
                        <EditModal name={res.Name} address={res.Address} city={res.City} zipcode={res.zipcode} open={res.Open} close={res.Close} rID={t}/>
                        <button
                          onClick={this.props.deleteRestaurant.bind(this, t)}
                          className="btn btn-danger ml-2"
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      }
      )
      )}
      </div>
    )
  }
}
        

const cardWidth = {
  width: '250px'
}


const mapStateToProps = state => ({
  restaurants: state.restaurantReducer.restaurants
});

export default connect(mapStateToProps, { getRestaurantByID, deleteRestaurant })(Restaurant);