import React, { useState } from 'react';
import DirectoryWindow from './components/directoryWindow/directoryWindow';
import './App.css';

function App() {

  const [stateObj, setState] = useState({
    employees: [
      {
        name: 'Logan Walker',
        phone: 4788675309,
        email: 'placeholder@email.com',
        startDate: '05/20/2019',
        birtdDate: '11/27/1995'
      },
      {
        name: 'Alice Lew',
        phone: 4704445555,
        email: 'alice@email.com',
        startDate: '10/22/2019',
        birtdDate: '02/27/1997'
      },
      {
        name: 'Kyle Olson',
        phone: 1234567890,
        email: 'kyleOlson@email.com',
        startDate: '02/05/2020',
        birtdDate: '05/15/1996'
      },
      {
        name: 'Jose Morgan',
        phone: 9876543210,
        email: 'jose@email.com',
        startDate: '12/01/2019',
        birtdDate: '11/06/1993'
      },
      {
        name: 'Pranav Dorbala',
        phone: 5673854623,
        email: 'pranav@email.com',
        startDate: '11/17/2019',
        birtdDate: '04/18/1996'
      }
    ],
    filteredEmployees: [],
    sortByName: {
      shouldSort: false,
      direction: true
    },
    filterWith: []
  });

  return (
    <div>
      <h1>Employee Directory</h1>
      <DirectoryWindow />
    </div>
  );
}

export default App;
