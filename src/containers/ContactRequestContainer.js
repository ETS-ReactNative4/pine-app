import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactRequest from '../components/ContactRequest';

const mapStateToProps = (state) => {
  return {
    userProfile: state.settings.user.profile
  };
};

class ContactRequestContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  };

  constructor() {
    super(...arguments);

    this._onAccept = this._onAccept.bind(this);
    this._onIgnore = this._onIgnore.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }

  _onAccept() {

  }

  _onIgnore() {

  }

  _onDelete() {

  }

  render() {
    return (
      <ContactRequest
        {...this.props}
        onAccept={this._onAccept}
        onIgnore={this._onIgnore}
        onDelete={this._onDelete}
      />
    );
  }
}

const ContactRequestConnector = connect(
  mapStateToProps
)(ContactRequestContainer);

export default ContactRequestConnector;
