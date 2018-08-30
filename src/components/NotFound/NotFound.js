import React, { Component } from 'react';
import './NotFound.scss';

export default class NotFound extends Component {
  render() {
    return (
      <section className="hero is-fullheight notfound-content">
        <div className="hero-body">
          <div className="container">
            <div className="main main--notfound">
              <h2 className="title is-2">Whoops. Looks like this page doesn&apos;t exist.</h2>
              <a className="button is-dark" href="/">กลับไปหน้าแรก</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
