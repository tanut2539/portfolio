import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import './Navbar.scss';

@inject('store')
@observer
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            {/* <NavLink className="navbar-item" to="/">
              <h3 className="title is-3">DEVPOP</h3>
            </NavLink> */}
          </div>

          <div className="navbar-menu">
            {/* <div className="navbar-end">
              <NavLink className="navbar-item" to="https://bulma.io/">Home</NavLink>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
