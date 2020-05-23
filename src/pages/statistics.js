import React from "react";
import { Link } from 'gatsby';
import 'video-react/dist/video-react.css'; // import css
import '../assets/css/FetchDataVirus.css';

import Countries from '../components/countries';
import LayoutData from '../components/LayoutDataHosting';
import FetchDataVirus from '../components/FetchDataVirus';

class Homepage extends React.Component {
  render() {
    const siteTitle = "Covid 19 ";

    return (
      <LayoutData>
        <section id="one" className="main style1">
          <Link to="/">PAGINA INICIAL</Link>
          <div className="grid-wrapper">
            <FetchDataVirus defaultCountry="Todos los Paises"></FetchDataVirus>
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
      </LayoutData>
    );
  }
}

export default Homepage;