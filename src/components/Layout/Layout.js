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
    return (
      <div ref={node => (this.root = node)}>
        <div className="container-fluid">
          <Header />
          <main className="container">
            <div {...this.props} className={cx(s.content, this.props.className)} />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
