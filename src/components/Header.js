import React from 'react'
import { Link } from 'gatsby';
class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fad fa-heart"></span>
                    <h1>El planeta somos todos nosotros <br />
                    y necesita de nuestra ayuda!</h1>
                    <p>Tenemos la tecnología, tenemos los medios para lograrlo, hagámoslo...<br />
                    Unidos por el bien de la humanidad</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">EXPLORA</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
