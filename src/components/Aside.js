import React, { Component } from 'react';
import Grace_Hopper from './images/Grace_Hopper.jpg';
import eeuu from './images/eeuu.png'
import './css/aside.css';
import './css/main.css';
class Aside extends Component {
  render() {
    return (
      <aside className="summary pr-3">
      <table className="info">
      <thead>
       <tr>
          <th colSpan={2} className="head-table">Grace Murray Hopper</th>
       </tr>

    </thead>
    <tbody >
      <tr>
        <td colSpan={3} ><img src={Grace_Hopper} alt="Grace"></img></td>
      </tr>
      <tr>
        <th colSpan={2} className="title">Información Personal</th>
      </tr>
      <tr>
        <th>Nacimiento</th>
        <td>9 de diciembre de 1906</td>
      </tr>
      <tr>
        <th>Fallecimiento</th>
         <td>	1 de enero de 1992</td>
      </tr>
      <tr>
        <th>Lugar de Sepultura</th>
        <td>Cementerio Nacional de  Arlington</td>
      </tr>
      <tr>
        <th>Residencia</th>
        <td>Nueva York</td>
      </tr>
      <tr>
        <th>Nacionalidad </th>
        <td>EEUU <img src={eeuu} alt="eeuu"></img></td>
      </tr>
      <tr>
        <th colSpan={2} className="title">Educación</th>
      </tr>
      <tr>
        <th>Alma máter</th>
        <td>Vassar College (título de grado)</td>
      </tr>
    </tbody>
  </table>
</aside>
    );
  }
}

export default Aside;
