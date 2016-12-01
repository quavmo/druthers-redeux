import React from 'react';
import { callToAction as className } from './style.css';

export default class CallToAction extends React.Component {
	render() {
    return React.DOM.a(
      {
        href: this.props.alpha ? '/dockets/new' : '#signUp',
        className
      },
      this.props.alpha ? 'Create a ballot!' : "Get notified when it's released."
    );
	}
  // createAndShowNewDocket () {
  //   let docket = this.props.docketsBase.push(this.defaultDocket);
  //   let docketId = docket.toString().match(/([^\/]*)\/*$/)[1]
  //   window.location.href = `/#/dockets/${docketId}`
  // }
}
