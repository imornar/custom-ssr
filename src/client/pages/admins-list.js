import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/require-auth';

class AdminsPage extends PureComponent {
  componentDidMount(){
    this.props.fetchAdmins();
  }

  render() {
    return (
      <div>
        <h3>Admins: (protected)</h3>
        {this.props.admins.map(admin => (
          <div key={admin.name}>{admin.name}</div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  admins: state.admins
});

const loadData = (store) => {
  return store.dispatch(fetchAdmins());
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsPage)),
  loadData
}
