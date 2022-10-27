/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import logo from '../assets/images/UEFA-Champions-League-Logo.png'

export default class MenuChampions extends Component {
    state = {
        equipos: [],
        status: false
    }

    loadEquipos = () => {
        var request = "api/Equipos";
        var url = Global.urlChampions + request;

        axios.get(url).then(response => {
            this.setState({
                equipos: response.data,
                status: true
            });
        })
    }

    componentDidMount = () => {
        this.loadEquipos();
    }

    render() {
        return (
            <nav className="navbar navbar-expand" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <img style={{width:"70px"}} src={logo}/><a className="navbar-brand" href="#">Champions</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.equipos.map((equipo, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="dropdown-item" to={"/equipo/" + equipo.idEquipo}>{equipo.nombre}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
