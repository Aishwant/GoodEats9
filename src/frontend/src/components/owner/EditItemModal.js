import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { editItem } from "../../actions/menu"
import Modal from 'react-modal';

export class EditItemModal extends Component {
    constructor() {
        super();
    
        this.state = {
           Name: "",
           Description: "",
           Price: "", 
           modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

    componentDidMount(){
        this.state.Name = this.props.Name;
        this.state.Description = this.props.Description;
        this.state.Price = this.props.Price;
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
        const { Name, Description, Price } = this.state;
        const item = { Name, Description, Price, "itemID":this.props.itemID, "category":this.props.category, "rID":this.props.rID };
        this.props.editItem(item);
        this.closeModal();
    }
    
      render() {
        const { Name, Description, Price } = this.state;
        return (
          <div>
            <button className="btn btn-secondary btn-sm btn-block mt-2" onClick={this.openModal}>Edit</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="add Item Modal"
              className="modal-dialog "
              style={{overlay:{backgroundColor: "rgba(0, 0, 0, 0.50)"}}}
              ariaHideApp={false}
            >
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Edit Item in {this.props.category}</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              <form>
              <div className="ml-4 mr-4 mt-4 mb-4">
                            
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
                                pattern="(\d+\.\d{2})"
                                title="Price must contain two decimal places e.g. 10.99"
                                required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                          <button onClick={this.closeModal} className="btn btn-secondary">Cancel</button>
                          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Save</button>
                        </div>
              </form>
              </div>
            </Modal>
          </div>
        );
      }
}

export default connect(null, { editItem })(EditItemModal);