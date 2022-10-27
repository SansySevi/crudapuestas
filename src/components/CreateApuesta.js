import React, { Component } from 'react';
import axios, { Axios } from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateApuesta extends Component {
    cajaUsuarioRef = React.createRef();
    cajaResultadoRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    insertDepartamento = (e) => {
        e.preventDefault();
        var request = 'api/Apuestas';
        var url = Global.urlChampions + request;

        //REACT PERMITE DECLARAR OBJETOS CON FORMATO JSON
        //DECLARAMOS UN OBJETO CON LAS PROPIEDADES DEL API DE JSON
        var apuesta = {
            idApuesta : 0,
            usuario: this.cajaUsuarioRef.current.value,
            resultado: this.cajaResultadoRef.current.value,
            fecha: this.cajaFechaRef.current.value
        };

        //EN AXIOS EL METODO POST RECIBE DOS PARAMETROS
        //1) URL
        //2) OBJETO JSON PARA EL API
        axios.post(url, apuesta).then(response => {
            this.setState({
                status: true,
                mensaje: "Apuesta creada!!"
            })
        });

    }

    render() {
        return (
            <div>
                <h1>Nueva apuesta</h1>
                <form style={{ width: "500px", margin: "0 auto" }}>
                    <label>Usuario: </label>
                    <input style={{ textAlign: "center" }} type="text" className='form-control' ref={this.cajaUsuarioRef} required /> <br />
                    <label>Resultado: </label>
                    <input style={{ textAlign: "center" }} type="text" className='form-control' ref={this.cajaResultadoRef} required /> <br />
                    <label>Fecha: </label>
                    <input style={{ textAlign: "center" }} type="text" className='form-control' ref={this.cajaFechaRef} required /> <br />
                    <button className='btn btn-info' onClick={this.insertDepartamento}>Nueva apuesta</button>
                </form>

                <h2 style={{color:"blue"}}>{this.state.mensaje}</h2>
            </div>
        )
    }
}
