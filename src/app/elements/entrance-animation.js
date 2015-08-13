'use strict';

import React from 'react';

import TweenMax from '../../server/adaptors/tween-max';

export default class EntranceAnimation extends React.Component {
  static defaultProps = {
    duration: 1,
    delay: 0
  }
  render() {
    return <div className="entrance-animation">{this.props.children}</div>;
  }
  componentDidMount() {
    let element = React.findDOMNode(this);
    const timeline = new TimelineLite({delay: this.props.delay});
    if (this.props.findElement) {
      element = this.props.findElement(element);
    }
    timeline.add(TweenMax.from(element, this.props.duration, this.props.options));
  }
};
