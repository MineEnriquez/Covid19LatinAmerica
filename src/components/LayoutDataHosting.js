import React from "react";
import "../assets/scss/main.scss";
import { Link } from 'gatsby';
import HeaderDataHosting from "./HeaderDataHosting";
import Footer from "./Footer";

class TemplateData extends React.Component {
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
          <Link to="/">PAGINA INICIAL</Link>
        </div>
        <HeaderDataHosting />
        {children}
        <Footer />
      </div>
    );
  }
}

export default TemplateData;
