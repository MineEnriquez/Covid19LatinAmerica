import React from "react";
import { Link } from 'gatsby';
import 'video-react/dist/video-react.css'; // import css
import '../assets/css/FetchDataVirus.css';

import LayoutData from '../components/LayoutDataHosting';
import FetchDataVirus from '../components/FetchDataVirus';

class Homepage extends React.Component {
  render() {
    const siteTitle = "Covid 19 ";

    return (
      <LayoutData>
        <section id="data" className="main style1">
          <div className="grid-wrapper">
            <FetchDataVirus defaultCountry="Todos los Paises"></FetchDataVirus>
          </div>
        </section>
        {/* <section id="four" className="main style1 special">
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
        </section> */}
      </LayoutData>
    );
  }
}

export default Homepage;