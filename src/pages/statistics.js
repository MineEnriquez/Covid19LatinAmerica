import React from "react";
import Helmet from "react-helmet";
import { Link } from 'gatsby';
import 'video-react/dist/video-react.css'; // import css
import '../assets/css/FetchDataVirus.css';
import { Player } from 'video-react';

import Layout from '../components/layout';
import FetchDataVirus from '../components/FetchDataVirus';
import covidpic01 from '../assets/images/covid/pic01.jpg'
import covidpic02 from '../assets/images/covid/poster01.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import video01 from '../assets/videos/sintomas-covid-19-sign-language.mp4'

class Homepage extends React.Component {
  render() {
    const siteTitle = "Covid 19 ";

    return (
      <Layout>
        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <FetchDataVirus></FetchDataVirus>
          </div>
        </section>
        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li><a href="#" className="button special">Sign Up</a></li>
              <li><a href="#" className="button">Learn More</a></li>
            </ul>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Homepage;