import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.scss';
/* Icons */
import FacebookIcon from '../../assets/images/facebook.svg';
import MessengerIcon from '../../assets/images/messenger.svg';
import InstagramIcon from '../../assets/images/instagram.svg';
import TwitterIcon from '../../assets/images/twitter.svg';
import MediumIcon from '../../assets/images/medium.svg';

@inject('store')
@observer
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookDesktopHref: 'https://wwww.facebook.com/100003955939547/',
      facebookMobileHref: '',
      messengerDesktopHref: 'https://www.facebook.com/messages/t/100003955939547',
      messengerMobileHref: 'fb-messenger://user-thread/100003955939547',
    };
    this.store = this.props.store;
  }

  componentDidMount() {
    this.assignFacebookHref();
  }

  assignFacebookHref() {
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
      this.setState({
        facebookMobileHref: 'fb://profile/?id=100003955939547',
      });
    } else if (navigator.userAgent.match(/Android/i)) {
      this.setState({
        facebookMobileHref: 'fb://profile/100003955939547',
      });
    }
  }

  render() {
    const { facebookDesktopHref, facebookMobileHref } = this.state;
    const { messengerDesktopHref, messengerMobileHref } = this.state;
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-7 is-8-widescreen">
              <div className="footer-info">
                <p className="text-desktop">&copy;&nbsp;2018, DEVPOP. All rights reserved.</p>
                <p className="text-mobile has-text-centered">&copy;&nbsp;2018, DEVPOP. All rights reserved.</p>
              </div>
            </div>
            <div className="column is-5 is-4-widescreen">
              <div className="footer-social">
                <div className="social-sm">
                  <div><a target="_blank" rel="noopener noreferrer" href={facebookMobileHref}><img role="presentation" src={FacebookIcon} alt="Facebook icon" /></a></div>
                  <div><a target="_blank" rel="noopener noreferrer" href={messengerMobileHref}><img role="presentation" src={MessengerIcon} alt="messenger icon" /></a></div>
                </div>
                <div className="social-lg">
                  <div><a target="_blank" rel="noopener noreferrer" href={facebookDesktopHref}><img role="presentation" src={FacebookIcon} alt="Facebook icon" /></a></div>
                  <div><a target="_blank" rel="noopener noreferrer" href={messengerDesktopHref}><img role="presentation" src={MessengerIcon} alt="messenger icon" /></a></div>
                </div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tanut2539"><img role="presentation" src={InstagramIcon} alt="Instagram icon" /></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/@devpopth"><img role="presentation" src={TwitterIcon} alt="Twitter icon" /></a></div>
                <div><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@tanut2539"><img role="presentation" src={MediumIcon} alt="Medium icon" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);

Footer.propTypes = {
  store: PropTypes.object,
};
