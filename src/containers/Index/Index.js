import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Index.scss';
/* Images */
import Logo from '../../assets/images/Logo.png';
import Work1 from '../../assets/images/work1.jpg';
import Work2 from '../../assets/images/work2.jpg';
import MediumStory from '../../assets/images/medium_story.jpg';
import Github from '../../assets/images/coding.jpg';

const box = {
  padding: 'calc(6rem + 60px) 2rem 2rem',
};

const ancestor = {
  maxWidth: '1024px',
  margin: '0 auto',
  zIndex: '90',
};

const content = {
  margin: '0 auto',
  maxWidth: '800px',
};

const shameless = {
  paddingTop: '12rem',
  marginTop: '-12rem',
};

const shamelessContainer = {
  paddingBottom: '0',
};

const others = {
  maxWidth: '1024px',
  margin: '0 auto',
  padding: '0 2rem',
};

@inject('store')
@observer
export default class Index extends Component {
  scrollToView() {
    const { hash } = this.props.history.location;
    if (hash === '#Logo') {
      if (this.profileInfoScrollPoint) {
        this.profileInfoScrollPoint.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  render() {
    return (
      <section className="index-content">
        <section className="hero is-fullheight is-cloudy">
          <div className="hero-body">
            <div className="container is-fluid has-text-centered">
              <NavLink to="/#Logo"><img id="Logo" src={Logo} alt="DEVPOP LOGO" /></NavLink>
              <p className="subtitle is-3">Hello there! I&rsquo;m a web and mobile developer from ibusiness corporation, co. ltd</p>
            </div>
          </div>
        </section>
        <div ref={(el) => { this.profileInfoScrollPoint = el; }} />
        <section className="section is-cloudy">
          <div className="container is-fluid has-text-centered">
            <div className="">
              <div className="avatar">{/* Images */}</div>
            </div>
            <div style={ancestor} className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child box" style={box}>
                  <h3 className="title is-3">Converting games <i className="em-svg em-video_game" /> to code <i className="em-svg em-computer" /> since 2014</h3>
                  <p style={content}>
                    I started to learn programming when entering college. Since then, I&rsquo;ve done various freelance projects and collaborate with other skillful people to create and develop websites and information systems.
                  </p>
                  <hr />
                  <div className="languages">
                    <div className="columns">
                      <div className="column">
                        <i className="em-svg em-lower_left_paintbrush icon" />
                        <i className="em-svg em-writing_hand icon" />
                        <i className="em-svg em-art icon" />
                        <h3>Front-End Developer</h3>
                        <p>I design responsive and friendly user interfaces</p>
                      </div>
                      <div className="column">
                        <i className="em-svg em-keyboard icon" />
                        <i className="em-svg em-construction_worker icon" />
                        <i className="em-svg em-three_button_mouse icon" />
                        <h3>Back-end Developer</h3>
                        <p>I develop website logics and information systems</p>
                      </div>
                    </div>
                    <hr className="spacer is-2" />
                    <div className="columns">
                      <div className="column">
                        <h3>Known languages</h3>
                        <hr className="spacer is-2" />
                        <ul>
                          <li>HTML</li>
                          <li>CSS3</li>
                          <li>JAVA</li>
                          <li>Javascript</li>
                          <li>Node</li>
                          <li>PHP</li>
                          <li>Swift4</li>
                        </ul>
                      </div>
                      <div className="column">
                        <h3>Primary weapons</h3>
                        <hr className="spacer is-2" />
                        <ul>
                          <li>Github / GitLab</li>
                          <li>Bitbucket</li>
                          <li>Postman</li>
                          <li>Visual Studio Code</li>
                        </ul>
                      </div>
                      <div className="column">
                        <h3>Things I&rsquo;m good at</h3>
                        <hr className="spacer is-2" />
                        <ul>
                          <li>React</li>
                          <li>Swift4 MVVM</li>
                          <li>REST API</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="works">
                    <h3 className="title is-3">Recent Works <i className="em-svg em-construction" /></h3>
                    <p>Here and the current and past projects, you can <a href="mailto:tanut.leel@gmail.com">request via email for the full list.</a></p>
                    <hr className="spacer is-2" />
                    <div className="columns">
                      <div className="column">
                        <div className="card">
                          <div className="card-image">
                            <div><img src={Work1} className="card-image-img" alt="Work1 Images" /></div>
                          </div>
                          <div className="card-content">
                            <div className="content">
                              <h3 className="title is-3">Coffee Shop Application</h3>
                              <p className="subtitle is-4">List of coffee <i className="em-svg em-coffee icon" /></p>
                              <p>Construction Swift 4 MVVM Pattern<br />Cocoapods IGLISTKIT, RxSwift, Rxcocoa<br />Use REST API Service Route.</p>
                              <a target="_black" rel="noopener noreferrer" href="https://github.com/tanut2539/CoffeeShop">View source code on Github</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="card">
                          <div className="card-image">
                            <div><img src={Work2} className="card-image-img" alt="Work1 Images" /></div>
                          </div>
                          <div className="card-content">
                            <div className="content">
                              <h3 className="title is-3">Coming Soon..</h3>
                              <p className="subtitle is-4">This year we are starting a new project. This is a game show application. <i className="em-svg em-video_game icon" /></p>
                              <p>We use native language to develop for the best performance.</p>
                              <span className="is-yellow">Coming this year</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={shameless} className="hero is-darknight">
          <div className="hero-body">
            <div style={shamelessContainer} className="container is-fluid has-text-centered">
              <h1 className="title is-1 has-text-white">Others <i className="em-svg em-meat_on_bone icon" /></h1>
              <p>Here are the things I&rsquo;ve made on my spare time.</p>
            </div>
          </div>
        </section>
        <section className="section is-paddingless is-darknight others">
          <div className="container is-fluid has-text-centered">
            <div style={others} className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <div><img src={MediumStory} className="card-image-img" alt="Medium Images" /></div>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3 className="title is-3">Medium Story</h3>
                      <p className="subtitle is-4"><i className="em-svg em-notebook_with_decorative_cover icon" /> Tech stuff or sometimes foods</p>
                      <p>Talk about new articles or technologies.</p>
                      <a target="_black" rel="noopener noreferrer" href="https://medium.com/@tanut2539">Medium profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <div><img src={Github} className="card-image-img" alt="Medium Images" /></div>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3 className="title is-3">Github</h3>
                      <p className="subtitle is-4">My source code <i className="em-svg em-electric_plug icon" /></p>
                      <p>Past and present work.</p>
                      <a target="_black" rel="noopener noreferrer" href="https://github.com/tanut2539?tab=repositories">View on Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

Index.propTypes = {
  history: PropTypes.object,

};
