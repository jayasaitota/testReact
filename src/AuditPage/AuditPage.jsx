import React from 'react';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';

import { connect } from 'react-redux';
import { userActions } from '../_actions';

class AuditLogPage extends React.Component{
  state = {logs:[
    {
      "ip":"123.43.3432",
      "login":"11:20",
      "logout":"11:32",
      "id":1
    },
    {
      "ip":"123.43.3432",
      "login":"10:20",
      "logout":"10:32",
      "id":2
    },
    {
      "ip":"123.43.3432",
      "login":"12:20",
      "logout":"12:32",
      "id":3
    },
    {
      "ip":"123.43.3432",
      "login":"14:20",
      "logout":"15:32",
      "id":4
    },
    {
      "ip":"123.43.3432",
      "login":"09:20",
      "logout":"11:32",
      "id":5
    }
  ],

};

  renderItems = ()=>{
    return this.state.logs.map(({id,ip,login,logout})=>{
      return (
        <tr key={id}>
          <td>{ip}</td>
          <td>{login}</td>
          <td>{logout}</td>
        </tr>
      )
    })
  }

  render(){
    return(
      (this.props.user && this.props.user.role && this.props.user.role=='AUDITOR')? 
      <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody style={{borderWidth:1,backgroundColor:"white", borderRadius:2}}>
          <div className="card__title">
            <h5 className="bold-text ml-5">Audit Logs</h5>
          </div>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Ip</th>
                <th>LogIn Time</th>
                <th>Logout Time</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItems()}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
    :null
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
}
const connectedAuidtPage = connect(mapState, actionCreators)(AuditLogPage);
export { connectedAuidtPage as AuditLogPage };