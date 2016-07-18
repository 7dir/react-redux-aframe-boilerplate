import React, { Component } from 'react';
import { Scene } from 'aframe-react';
import DocumentMeta from 'react-document-meta';

import { Cursor, Camera, Sky, Browser } from 'components';

const metaData = {
  title: 'Virtual Reality',
  description: 'react-redux-aframe-boilerplate',
  canonical: 'https://github.com/HeartRunner/react-redux-aframe-boilerplate',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};
export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Scene>
          <Sky/>
          <Camera position="0 2 5"><Cursor/></Camera>
          <Browser />
          {this.props.children}
        </Scene>
      </section>
    );
  }
}
