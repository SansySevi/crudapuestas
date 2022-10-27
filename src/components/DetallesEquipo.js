import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class DetallesEquipo extends Component {

    state = {
        equipo: {},
        status: false
    }

    loadEquipo = () => {
        var request = 'api/Equipos/' + this.props.idequipo;
        var url = Global.urlChampions + request;

        axios.get(url).then(response => {
            this.setState({
                equipo: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.idequipo != oldProps.idequipo) {
            this.loadEquipo();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.status == true && (
                        <div className="card" style={{ width: "80rem", margin: "30px auto" }}>
                            <div className="card-header">
                                {this.state.equipo.nombre}
                            </div>
                            <img src={this.state.equipo.imagen} style={{ width: "150px", margin: "auto" }} className="card-img-top" alt="..." />

                            <div className="card-body">
                                <h5 className="card-title">Champions: {this.state.equipo.champions}</h5>
                                <p className="card-text">{this.state.equipo.descripcion}</p>
                                <NavLink to={"/jugadoresequipo/" + this.props.idequipo} style={{ marginRight: "15px" }} className="btn btn-success">Jugadores</NavLink>
                                <NavLink to="/" className="btn btn-primary">Volver</NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
