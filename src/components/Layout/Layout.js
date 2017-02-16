/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header/header';
import Footer from './Footer/footer';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    
  };

  render() {
    const {location, params, route, router, routeParams , routes, ...rest} = this.props;
    return (
      <div>
        <div>
          <Header />
          <main className="container">
            <div {...rest} className={cx(s.content, this.props.className)} />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
