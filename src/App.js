import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <React.Fragment>
      <div>Sabka Katega List</div><br></br>
      <React.Fragment>{App1()}</React.Fragment>
      <div>Sabka Katega Table</div><br></br>
      <table>{Table()}</table>
    </React.Fragment>
  );
}

function App1() {
  return (
    <ul>
      <li>Sabka Katega</li>
      <li>List me note kar lo</li>
      <li>Good</li>
    </ul>
  )
}

function Table() {
  function TableBody() {
    return (
      <tbody>
        <tr>
          <td>1</td>
          <td>India</td>
          <td>Indian</td>
        </tr>
        <tr>
          <td>2</td>
          <td>America</td>
          <td>American</td>
        </tr>
      </tbody>
    )
  }
  return (
    <React.Fragment>
      <thead>
        <tr>
          <td>S.No.</td>
          <td>Country</td>
          <td>Citizens</td>
        </tr>
      </thead>
      <React.Fragment>{TableBody()}</React.Fragment>
    </React.Fragment>
  )
}

export default App;
