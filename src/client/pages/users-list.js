import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { Helmet } from 'react-helmet';

class UsersList extends PureComponent {
  componentDidMount(){
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>users</title>
          <meta property="og:type" content="users"/>
        </Helmet>
        <h3>Users:</h3>
        {this.props.users.map(user => (
          <div key={user.name}>{user.name}</div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
}
