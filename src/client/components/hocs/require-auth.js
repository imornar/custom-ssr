import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ComposedComponent) => {
  class RequireAuth extends PureComponent {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/"/>;
        case null:
          return <div>Loading...</div>;
        default:
          return <ComposedComponent {...this.props}/>;
      }
    }
  }

  return connect(({ auth }) => ({ auth }))(RequireAuth)
};

