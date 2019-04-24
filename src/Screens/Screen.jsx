import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'mdi-material-ui';
import './Screen.css';

class Screen extends Component {
  render() {
    return (
      <div>
        <div className="Topbar">
          <div
            style={{
              marginLeft: '8px',
              width: '44px',
              height: '44px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ArrowLeftCircle
              style={{ fontSize: '44px', color: 'white', cursor: 'pointer' }}
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          </div>
          <div style={{ flex: 1 }} />
          <div />
        </div>
        <div className="Main">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(Screen);
