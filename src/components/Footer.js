import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com/opsoms?lang=es" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://facebook.com/OPSOMSMexico?lang=es" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Covid19Latino</li>
                    <li>Contact us: webmaster@covid19latino.org</li>
                    {/* <li>Design: <a href="http://html5up.net">HTML5 UP</a></li> */}
                </ul>
            </section>
        )
    }
}

export default Footer
