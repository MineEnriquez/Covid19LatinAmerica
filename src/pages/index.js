import React from "react";
import Helmet from "react-helmet";
import { Link } from 'gatsby';
import 'video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';

import Layout from '../components/layout';

import covidpic01 from '../assets/images/covidimg/pic01.jpg'
import covidpic02 from '../assets/images/covidimg/poster01.png'
import pic06 from '../assets/images/covidimg/pic06.jpg'
import pic03 from '../assets/images/covidimg/pic03.jpg'
import pic05 from '../assets/images/covidimg/pic05.jpg'
import video01 from '../assets/videos/sintomas-covid-19-sign-language.mp4'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Covid 19 ";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Mantenerte informado  <br />
                                ayuda a proteger a tu familia</h2>
                            </header>
                            
                            <h3> Actualizaciones: </h3>
                            <p>
                                <li>
                                    <a href="https://www.paho.org/es/covax-americas"> Las vacunas llegan a Centro y Sudamerica </a>
                                </li>
                                <li>
                                    <a href="https://www.paho.org/es"> Organizacion Panamericana de la Salud:  </a>
                                </li>
                            </p>
                            <p>Ayuda a disminuir el esparcimiento del Corona Virus "Covid19" y sus variantes. 
                                ¿Porque es tan importante evitar ser contagiado?
                            </p>
                            <li>Si tienes el virus puedes infectar a más personas</li>
                            <li>Podrías tener el virus y no presentar síntomas</li>
                            <li>No hay vacuna ni tratamiento especifíco</li>
                            <li>Puede causar la muerte</li>
                            <li>No hay suficiente información sobre los daños que pueda causar al organismo</li>
                            <li>Si presentas síntomas, estos pueden presentarse de dos a catorce dias después de haberte infectado,
                                para ese entonces, podrias ya haber afectado a tus seres queridos.</li>
                            <p><a href="https://www.who.int/es">Organización Mundial de la Salud</a></p>
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
                            <h3>VIDEO:</h3>
                            <Player
                                aria-label='Play video'
                                playsInline
                                poster={covidpic02}
                                src={video01} />
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Síntomas mas severos de la enfermedad</h2>
                            </header>
                            <p> Nota: Estos síntomas podrían representar un estado
                            muy avanzado de la infección y se recomienda que acuda
                            de inmediato a un centro de diagnostico del Covid19:
                            </p>
                            <li>Tos</li>
                            <li>Problemas para respirar</li>
                            <li>Fiebre alta</li>
                            <li>Escalosfrios</li>
                            <li>Dolor de cuerpo</li>
                            <li>Garganta irritada</li>
                            <li>Problema para percibir olores</li>
                            <li>Neumonía</li>
                            <p><a href="https://www.who.int/es">Organización Mundial de la Salud</a></p>
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
                                <h2>¿Cuáles son los síntomas de la COVID-19?</h2>
                            </header>
                            <p>
                                Los síntomas más habituales de la COVID-19 son la fiebre,
                                la tos seca y el cansancio. <br />
                                Otros síntomas menos frecuentes que afectan a algunos pacientes son los dolores y molestias,
                                la congestión nasal, el dolor de cabeza, la conjuntivitis,
                                el dolor de garganta, la diarrea,
                                la pérdida del gusto o el olfato y las erupciones cutáneas o
                                cambios de color en los dedos de las manos o los pies.
                                Estos síntomas suelen ser leves y comienzan gradualmente.
                                Algunas de las personas infectadas solo presentan síntomas muy ligeros.
                            </p>
                            <p>
                                <h3>
                                    Recursos para la ciudadania:
                                </h3>
                                <li><a href="https://youtu.be/MHJKu3gWSU8">Rastreo de contacto</a> </li>
                                <li>
                                    <a href="https://www.who.int/docs/default-source/coronaviruse/200762-coping-with-stress-during-the-2019-sp.pdf" >
                                        Como manejar el estress durante esta pandemia </a>
                                </li>
                            </p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Recomendaciones de la Organización Mundial de la salud</h2>
                            </header>
                            <p>Encuentre de forma sencilla información oficial proveida por la Organizacion Mundial de la Salud en español.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Como usar la mascarilla</h3>
                            <p>Cómo utilizar una mascarilla higiénica de tela de forma segura.</p>
                            <ul className="actions">
                                <li><a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks" className="button">Mas información</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic05} alt="" /></span>
                            <h3>Consejos sobre viajes:</h3>
                            <p>Consejos actualizados de la OMS para el transporte internacional en relación con el brote del nuevo coronavirus Covid19.</p>
                            <ul className="actions">
                                <li><a href="https://www.who.int/ith/2019-nCoV_advice_for_international_traffic/es/" className="button">Mas información</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic06} alt="" /></span>
                            <h3>Preguntas y respuestas</h3>
                            <p>Preguntas y respuestas sobre la enfermedad por coronavirus (COVID-19).</p>
                            <ul className="actions">
                                <li><a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses" className="button">Mas información</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Noticias</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section> */}
            </Layout>
        );
    }
}

export default Homepage;
