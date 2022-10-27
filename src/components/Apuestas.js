import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {

    state = {
        apuestas: [],
        status: false
    }

    loadApuestas = () => {
        var request = 'api/Apuestas';
        var url = Global.urlChampions + request;

        axios.get(url).then(response => {
            this.setState({
                apuestas: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadApuestas();
    }


    render() {
        return (
            <div>
                <NavLink style={{margin:"25px auto"}} to={"/crearapuesta"} className="btn btn-primary">Crear apuesta</NavLink>
                {
                    this.state.status == true && (
                        <table border={1} style={{width:"1150px", margin: "50px auto"}} className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Resultado</th>
                                    <th scope="col">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.apuestas.map((apuesta, index) => {
                                        return (
                                            <tr key={apuesta.idApuesta}>
                                                <td>{apuesta.usuario}</td>
                                                <td>{apuesta.resultado}</td>
                                                <td>{apuesta.fecha}</td>
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
