import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class DetallesJugador extends Component {

    state = {
        jugador: {},
        status: false
    }

    loadJugador = () => {
        var request = 'api/Jugadores/' + this.props.idjugador;
        var url = Global.urlChampions + request;

        axios.get(url).then(response => {
            this.setState({
                jugador: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadJugador();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.idequipo != oldProps.idequipo) {
            this.loadJugador();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.status == true && (
                        <div className="card" style={{ width: "80rem", margin: "30px auto" }}>
                            <div className="card-header">
                                {this.state.jugador.nombre}
                            </div>
                            <img src={this.state.jugador.imagen} style={{ width: "150px", margin: "auto" }} className="card-img-top" alt="..." />

                            <div className="card-body">
                                <h5 className="card-title">{this.state.jugador.posicion}</h5>
                                <p className="card-text">Fecha Nacimiento : {this.state.jugador.fechaNacimiento}<br/> Nacionalidad: {this.state.jugador.pais}</p>
                                <NavLink to={"/jugadoresequipo/" + this.state.jugador.idEquipo} className="btn btn-primary">Jugadores</NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
