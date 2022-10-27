/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import imagenChamp from '../assets/images/champs2.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img style={{width:"1250px", margin:"50px auto"}} src={imagenChamp}/>
      </div>
    )
  }
}
