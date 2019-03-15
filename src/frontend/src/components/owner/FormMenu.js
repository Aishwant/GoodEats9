import React,{Component} from 'react'
import {connect} from "react-redux"
import propTypes from "prop-types"
import { addMenu } from "../../actions/addMenu"



export class FormMenu extends Component {
    state={
        Name:"",
        Description: "",
        Price:"",
        Menu_Type:"",
        rID:""
    }

    static propTypes={
        addMenu: propTypes.func.isRequired

    }

    onChange=e=> this.setState({[e.target.name]:e.target.value});
    onSubmit=e=>{
        e.preventDefault();
        
        const { Name, Description, Price, Menu_Type, rID } = this.state;
        const menu = { Name, Description, Price, Menu_Type, rID };
        console.log(this.state)
        this.props.addMenu(menu);
        this.setState({
            Name:"",
            Description: "",
            Price:"",
            Menu_Type:"",
        });

    }
    componentDidMount(){
        this.setState({rID:this.props.name})
      }


    render(){
        const {Name, Description, Price, Menu_Type}=this.state;
        return(

            <div>

    <form >
            <div className="modal fade" id="MenuList" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Your Menu List</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>

                    <div>
                        <div className="modal-body">
                        <div className="ml-4 mr-4 mt-4 mb-4">
                        
                        
                                
                        </div>

                        <div className="modal-footer">
                            <button type="button" id="cancel" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#MenuModal">
                            Add New
                            </button>
                            
                        </div>


                        </div>

                     </div>
                     </div>
                </div>
            </div>
            </div>
          
            </form>
          


            <form onSubmit={this.onSubmit}>
            <div className="modal fade" id="MenuModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Items</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>

                    <div>
                        <div className="modal-body">
                        <div className="ml-4 mr-4 mt-4 mb-4">
                        
                        
                                <div className="form-group">
                                <label>Menu_Type</label>
                                <select name="Item Type" id="Item-Type" value={Menu_Type} onChange={this.onChange} name="Menu_Type">
                                <option value="None">None</option>
                                <option value="Appetizers">Appetizers</option>
                                <option value="Entrees">Entrees</option>
                                
                                </select>
                                </div>

                                <div className="form-group">
                                <label>Name</label>
                                <input
                                className="form-control"
                                type="text"
                                name="Name"
                                onChange={this.onChange}
                                value={Name}
                                required
                                />
                                </div>
                                
                                <div className="form-group">
                                <label>Description</label>
                                <input
                                className="form-control"
                                type="text"
                                name="Description"
                                onChange={this.onChange}
                                value={Description}
                                required
                                />
                                </div>

                                <div className="form-group">
                                <label>Price</label>
                                <input
                                className="form-control"
                                type="text"
                                name="Price"
                                onChange={this.onChange}
                                value={Price}
                                required
                                />
                                </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" id="cancel" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" >Add Item</button>
                        </div>


                        </div>

                     </div>
                     </div>
                </div>
            </div>
            </div>
          
            </form>
            </div>
        )
    }






}
export default connect(null,{addMenu})(FormMenu)