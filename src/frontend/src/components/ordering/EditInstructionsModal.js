import React, { Component } from 'react'
import { connect } from "react-redux";
import Modal from 'react-modal'
import { editInstructions } from '../../actions/orders'
import { getCart } from '../../actions/orders';

export class EditInstructionsModal extends Component {
    constructor() {
        super();
    
        this.state = {
          Instructions: "",
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      componentDidUpdate(){
        this.state.Instructions = this.props.Instructions;
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
        this.props.editInstructions(this.props.rID, this.props.itemID, this.state.Instructions);
        this.closeModal();
    }
    
      render() {
        const { Instructions } = this.state;
        return (
          <div>
            <button className="btn btn-light btn-sm" onClick={this.openModal}>Instructions</button>
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
                <h5 className="text-dark" ref={subtitle => this.subtitle = subtitle}>Instructions</h5>
                  <button type="button" className="close" onClick={this.closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              <form>
              <div className="ml-4 mr-4 mt-4 mb-4">
                            <div className="form-group">
                                <textarea 
                                className="form-control" 
                                name="Instructions"
                                onChange={this.onChange}
                                value={Instructions}
                                rows="3"
                                readOnly
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                          <button onClick={this.closeModal} className="btn btn-secondary">Close</button>
                        </div>
              </form>
              </div>
            </Modal>
          </div>
        );
      }
}

export default connect(null, { editInstructions, getCart })(EditInstructionsModal);