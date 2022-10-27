/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class JugadoresEquipo extends Component {

    state = {
        jugadores: [],
        status: false
    }

    loadJugadores = () => {
        var request = 'api/Jugadores/JugadoresEquipo/' + this.props.idequipo;
        var url = Global.urlChampions + request;

        axios.get(url).then(response => {
            this.setState({
                jugadores: response.data,
                status: true
            })
        });
    }

    componentDidMount = () => {
        this.loadJugadores();
    }


    render() {
        return (
            <div>
                <NavLink to={"/equipo/" + this.props.idequipo} className="btn btn-primary">Volver</NavLink>
                {
                    this.state.status == true && (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Detalles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jugadores.map((jugador, index) => {
                                        return (
                                            <tr key={jugador.idJugador}>
                                                <td>{jugador.nombre}</td>
                                                <td><img src={jugador.imagen} style={{ width: "50px" }} /></td>
                                                <td><NavLink to={"/jugador/" + jugador.idJugador} className="btn btn-primary">Detalles</NavLink></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
}
