import React from "react";
import "../assets/scss/main.scss";
import { Link } from 'gatsby';
import Header from "./Header";
import Footer from "./Footer";

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className={`body ${this.state.loading}`}>
        <div className="topleft">
          <Link to="/statistics">VER ESTADISTICAS</Link>
        </div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Template;
