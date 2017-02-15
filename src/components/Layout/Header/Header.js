/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from '../Navigation';
import Link from '../../common/Link';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import s from './Header.css';

class Header extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <Navbar className={s.navbar} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">PreSales Showcase</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

}

export default Header;
