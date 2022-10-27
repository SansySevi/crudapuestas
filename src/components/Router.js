import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Apuestas from './Apuestas';
import CreateApuesta from './CreateApuesta';
import DetallesEquipo from './DetallesEquipo';
import DetallesJugador from './DetallesJugador';
import Home from './Home';
import JugadoresEquipo from './JugadoresEquipo';
import MenuChampions from './MenuChampions';


export default class Router extends Component {

    render() {

        function DetallesEquipoElement() {
            var { idequipo } = useParams();
            return (
                <DetallesEquipo idequipo={idequipo} />
            );
        }

        function JugadoresEquipoElement() {
            var { idequipo } = useParams();
            return (
                <JugadoresEquipo idequipo={idequipo} />
            );
        }

        function DetallesJugadorElement() {
            var { idjugador } = useParams();
            return (
                <DetallesJugador idjugador={idjugador} />
            );
        }

        return (
            <BrowserRouter>
                <MenuChampions />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/equipo/:idequipo' element={<DetallesEquipoElement />} />
                    <Route path='/jugadoresequipo/:idequipo' element={<JugadoresEquipoElement />} />
                    <Route path='/jugador/:idjugador' element={<DetallesJugadorElement />} />
                    <Route path='/apuestas' element={<Apuestas />} />
                    <Route path='/crearapuesta' element={<CreateApuesta />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
