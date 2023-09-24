import React, { Component } from 'react'
import loading from "./Fading circles.gif";
//import loading from "./LoadingAnni.webp";

export default class Spiner extends Component {
  render() {
    return (
      <div className='text-center my-16'>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
