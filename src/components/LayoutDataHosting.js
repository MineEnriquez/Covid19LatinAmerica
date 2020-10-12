import React from "react";
import "../assets/scss/main.scss";

import HeaderDataHosting from "./HeaderDataHosting";
import Footer from "./Footer";

class TemplateData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading}`}>
                <HeaderDataHosting/>
                {children}
                <Footer />
            </div>
        );
    }
}

export default TemplateData;
