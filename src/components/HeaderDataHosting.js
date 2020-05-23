import React from 'react'

class HeaderDataHosting extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <h1><strong>Reporte de occurencia</strong><br />
                    </h1>
                    <p>Los valores en esta tabla reflejan los ultimos datos reportados hasta la fecha bajo la columna 'Ultima actualizacion', ordenados por casos confirmados.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">ESTADISTICAS</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default HeaderDataHosting
