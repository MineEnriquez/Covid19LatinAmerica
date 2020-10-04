import React from "react";
import Helmet from "react-helmet";
import { Link } from 'gatsby';
import 'video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';

import Layout from '../components/layout';

import covidpic01 from '../assets/images/covidimg/pic01.jpg'
import covidpic02 from '../assets/images/covidimg/poster01.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import video01 from '../assets/videos/sintomas-covid-19-sign-language.mp4'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Covid 19 ";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <section id="nav" className="submain style1">
                    <Link to="/statistics">E S T A D I S T I C A S</Link>
                </section>
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Mantenerte informado <br />
                                ayuda a proteger a tu familia</h2>
                            </header>
                            <p>En un evento sin  precedente, la sociedad a nivel mundial ha tenido que
                            implementar el distanciamiento social en un esfuerzo por disminuir
                                el esparcimiento del nuevo Corona Virus "Covid19".<br />
                                Porque es tan importante evitar ser contagiado?
                                <li>No hay vacuna ni tratamiento especifico</li>
                                <li>Si tienes el virus puedes infectar a más personas</li>
                                <li>Puede causar la muerte</li>
                                <li>No hay suficiente información sobre los daños que pueda causar al organismo</li>
                                <li>Podrías tener el virus y no presentar síntomas</li>
                                <li>Si presentas síntomas, estos pueden presentarse de uno a doce dias después de haberte infectado</li>
                            </p>
                            <p><a href="https://www.who.int/es">Organizacion Mundial de la Salud</a></p>
                            {/*Sintomas de la enfermedad: https://who.canto.global/b/JKJTT */}
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={covidpic01} alt="" /></span>
                        </div>
                    </div>
                </section>
                <section id="sintomas" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <Player
                                aria-label='Play video'
                                playsInline
                                poster={covidpic02}
                                src={video01} />
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Síntomas de la enfermedad</h2>
                            </header>
                            <li>Tos</li>
                            <li>Problemas para respirar</li>
                            <li>Fiebre alta</li>
                            <li>Escalosfrios</li>
                            <li>Dolor de cuerpo</li>
                            <li>Garganta irritada</li>
                            <li>Problema para percibir olores</li>
                            <li>Neumonía</li>
                            <p><a href="https://www.who.int/es">Organizacion Mundial de la Salud</a></p>
                        </div>
                    </div>
                </section>
                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

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