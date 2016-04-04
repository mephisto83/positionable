import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as Util from '../util';
import Positionable  from '../positionable/Positionable';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    render() {

        var {state, dispatch} = this.props;
        return (
            <div>
                            
                <div className="brand">Business Casual</div>
                <div className="address-bar">3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>

                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">Business Casual</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">

                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12 text-center">
                                <div id="carousel-example-generic" className="carousel slide">
                                    <ol className="carousel-indicators hidden-xs">
                                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                    </ol>

                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img className="img-responsive img-full" src="img/slide-1.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="img/slide-2.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="img/slide-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                        <span className="icon-prev"></span>
                                    </a>
                                    <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                        <span className="icon-next"></span>
                                    </a>
                                </div>
                                <h2 className="brand-before">
                                    <small>Welcome to</small>
                                </h2>
                                <Positionable activated="true" stayactive="true">
                                    <p>You can <em>do</em> this with a bit of React and CSS3 transforms? What...</p>
                                </Positionable>
                                <h1 className="brand-name">Business Casual</h1>
                                <hr className="tagline-divider" />
                                <h2>
                                    <small>By
                                        <strong>Start Bootstrap</strong>
                                    </small>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12">
                                <hr />
                                <h2 className="intro-text text-center">Build a website
                                    <strong>worth visiting</strong>
                                </h2>
                                <hr />
                                <img className="img-responsive img-border img-left" src="img/intro-pic.jpg" alt="" />
                                <hr className="visible-xs" />
                                <p>The boxes used in this template are nested inbetween a normal Bootstrap row and the start of your column layout. The boxes will be full-width boxes, so if you want to make them smaller then you will need to customize.</p>
                                <p>A huge thanks to <a href="http://join.deathtothestockphoto.com/" target="_blank">Death to the Stock Photo</a> for allowing us to use the beautiful photos that make this template really come to life. When using this template, make sure your photos are decent. Also make sure that the file size on your photos is kept to a minumum to keep load times to a minimum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12">
                                <hr />
                                <h2 className="intro-text text-center">Beautiful boxes
                                    <strong>to showcase your content</strong>
                                </h2>
                                <hr />
                                <p>Use as many boxes as you like, and put anything you want in them! They are great for just about anything, the sky's the limit!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat diam quis nisl vestibulum dignissim. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p>Copyright &copy; Your Website 2014</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
App = connect(Util.mapStateToProps, Util.mapDispatchToProps)(App)

export default App