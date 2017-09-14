// @flow
import React from 'react';
import { connect } from 'react-redux';


const ListaTelefonow = (props: any) => (
  <div className="form-group">
    <table>
      <thead>
        <tr><th>Nazwa</th><th>Numer</th><th /></tr>
      </thead>


      <tbody>
        <tr className="telefon-form">
          <td><input id="nazwa" name="nazwa" /></td>
          <td><input type="text" name="numer" id="numer" /></td>
          <td><button type="button" onClick={() => console.log('clicked')}>Dodaj</button></td>
        </tr>
        <Telefony />


      </tbody>
    </table>


  </div>
);

const Telefony = props => (
  <div>Lista telefonow</div>
);

export default connect()(ListaTelefonow);

