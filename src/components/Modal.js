import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../sass/modal.scss';

class AppModal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }  
  close() {
    this.props.close();
  }
  render() {
    return (
      <div className="modal-container">
        <Modal
          show={this.props.show}
          onHide={this.close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AppModal;