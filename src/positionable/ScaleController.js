"use strict";

var React = require("react");
import ReactDom from 'react-dom';

var ScaleController = React.createClass({
  mixins: [
    require("./Transform-mixin"),
    require("./Scale-mixin")
  ],

  getInitialState: function() {
    return { base: this.props.scale || 1, scale: 1 };
  },

  render: function() {
    return <div className="scale-control">
      <div style={this.getScaleStyle()}>⇲</div>
    </div>;
  },

  handleTransform: function() {
    var s = this.state, p = this.props;
    if (p.origin && p.onChange) {
        var node =  ReactDom.findDOMNode(p.origin);
      var dims = node.getBoundingClientRect();
      var xOffset = dims.left + (dims.right - dims.left)/2;
      var yOffset = dims.top + (dims.bottom - dims.top)/2;

      //  vector 1:
      var x1 = s.xMark - xOffset,
          y1 = s.yMark - yOffset;

      //  vector 2:
      var x2 = (s.xMark + s.xDiff) - xOffset,
          y2 = (s.yMark + s.yDiff) - yOffset;

      // normalised vector 1:
      var m1 = Math.sqrt(x1*x1 + y1*y1),
          nx1 = x1 / m1,
          ny1 = y1 / m1;

      // projection of vector 2 onto vector 1 involves
      // finding the projection scale factor, which is
      // exactly what we need:
      var scale = (x2*nx1 + y2*ny1)/m1;

      // communicate scale to owner
      this.setState(
        { scale: scale },
        function() { p.onChange(this.state.base * scale); }
      );
    }
  },

  handleTransformEnd: function() {
    this.setState({
      base: this.state.base * this.state.scale,
      scale: 1
    });
  }
});

module.exports = ScaleController;

