import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const LoginModal = React.createClass({
  close: function() {
    this.props.close();
  },
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
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Login with your email.</p>
            <form>
              E-mail address:<br/>
              <input type="text" name="email" />
              <br/>
              Password:<br/>
              <input type="text" name="password" />
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default LoginModal;