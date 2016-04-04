"use strict";

var React = require("react");
var classes = require("classnames");

var PlacementController = require("./PlacementController.js");
var RotationController = require("./RotationController.js");
var ScaleController = require("./ScaleController.js");
var ZIndexController = require("./ZIndexController.js");

var onClickOutside = require("react-onclickoutside");

var Positionable = React.createClass({

  mixins: [ onClickOutside ],

  handleClickOutside: function() {
    this.stopHandling();
    this.setState({
      activated: false
    });
  },

  getInitialState: function() {
    return {
      x: this.props.x || 0,
      y: this.props.y || 0,
      angle: this.props.angle || 0,
      scale: this.props.scale || 1,
      zIndex: this.props.zIndex || 1,
      activated: !!this.props.activated || false
    };
  },

  render: function() {
    var x = this.state.x,
        y = this.state.y,
        angle = (180 * this.state.angle / Math.PI),
        scale = this.state.scale,
        zIndex = this.state.zIndex;

    var style = {
      transform: [
        "translate("+x+"px, "+y+"px)",
        "rotate("+angle+"deg)",
        "scale("+scale+")"
      ].join(" "),
      transformOrigin: "center",
      zIndex: zIndex
    };

    var className = classes({
      positionable: true,
      activated: this.state.activated
    });
    var controls = [
                <PlacementController key="placementcontroller"
                            x={this.state.x}
                           y={this.state.y}
                           ref="placementController"
                           onChange={this.handleTranslation}
                           activated="true"
                           origin={this} ></PlacementController>
      ,
      <RotationController  angle={this.state.angle}
                            key="rotationController"
                           ref="rotationController"
                           onChange={this.handleRotation}
                           activated="true"
                           origin={this} />
      ,
      <ScaleController     scale={this.state.scale}
                           ref="scaleController"
                           key="scaleController"
                           onChange={this.handleScaling}
                           activated="true"
                           origin={this} />
      ,
      <ZIndexController    zIndex={this.state.zIndex}
                           ref="zIndexController"
                           key="zIndexController"
                           onChange={this.handleZIndexChange} />
    ];

    return (
      <div style={style} className={className}
           onMouseDown={this.startHandling}
           onTap={this.startHandlingTouch}
           onMouseUp={this.stopHandling}>
        { this.state.activated ? controls : false }
        { this.props.children }
      </div>
    );
  },

  toggle: function(evt) {
    this.setState({
      activated: !this.state.activated
    });
  },

  startHandlingTouch: function() {
    this.setState({
      activated: true
    });
  },

  startHandling: function() {
    this.handling = true;
    this.setState({
        activated: true,
        handling : this.handling
    });
  },

  stopHandling: function() {
    if(this.handling && this.props.clickHandler && !this.manipulating) {
      this.props.clickHandler(this);
    }
    this.manipulating = false;
    this.handling = false;
    this.setState({
        handling : this.handling
    });
  },

  handleTranslation: function(x, y) {
    this.manipulating = true;
    this.setState({
      x: x,
      y: y
    });
  },

  handleRotation: function(angle) {
    this.manipulating = true;
    this.setState({
      angle: angle
    });
  },

  handleScaling: function(scale) {
    this.manipulating = true;
    this.setState({
      scale: scale
    }, function() {
      // make sure all the controls are counter-scale if scale < 1
      var counterScale = 1/scale;
      ["rotation","scale","placement","zIndex"].forEach(function(c) {
        this.refs[c+"Controller"].setScale(counterScale);
      }.bind(this));
    });
  },

  handleZIndexChange: function(zIndex) {
    this.manipulating = true;
    this.setState({
      zIndex: zIndex
    });
  },

  getTransform: function() {
    return {
      x: this.state.x,
      y: this.state.y,
      angle: this.state.angle,
      scale: this.state.scale,
      zIndex: this.state.zIndex
    };
  },

  setTransform: function(obj) {
    this.setState({
      x: obj.x || 0,
      y: obj.y || 0,
      angle: obj.angle || 0,
      scale: obj.scale || 1,
      zIndex: obj.zIndex || 0
    });
  }
});

module.exports = Positionable;
