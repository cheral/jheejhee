import React, {Component} from 'react';
import M from "./public/js/materialize.min.js";	
import "./public/css/materialize.min.css";

class Navbar extends Component {	
  componentDidMount() {	
      var elem = document.querySelector(".sidenav");	
      var instance = M.Sidenav.init();	
  }

  render() {
    return(
        <nav class="nav-wrapper">
          <div class="container">
            <a href="#" className="brand-logo">Food Ninja</a>
            <a href="#" className="sidenav-trigger" data-target="mobile-menu">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right">
              <li><a href="">C</a></li>
              <li><a href="">W</a></li>
              <li><a href="">P</a></li>
            </ul>
    
            <ul class="sidenav left" id="mobile-menu">
              <li><a className="subheader">FOODNINJA</a></li>
              <li><a href="/" class="waves-effect">Home</a></li>
              <li><a href="pages/about.html" class="waves-effect">About</a></li>
              <li><div className="divider"></div></li>
              <li><a href="pages/contact.html" class="waves-effect">
                <i className="material-icons">mail_outline</i>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    
    );	
  }	
}

export default Navbar;