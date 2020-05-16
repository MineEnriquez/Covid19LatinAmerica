import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fad fa-heart"></span>
                    <h1>El <strong>Planeta</strong> somos todos nosotros<br />
                    y necesita de nuestra ayuda!</h1>
                    <p>Tenemos la tecnologia, tenemos los medios, hagamoslo...<br />
                    veamos en la actual situacion una oportunidad para encontrarnos unos a otros <br />
                    unidos por el bien de la humanidad</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Descubre como hacerlo</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
