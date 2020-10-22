import React, { useState } from 'react';
import DirectoryWindow from './components/directoryWindow/directoryWindow';
import './App.css';
import 'materialize-css';
import { Navbar, Icon, TextInput } from 'react-materialize';


function App() {
  const originalList = [
    {
      id: 0,
      name: 'Logan Walker',
      phone: 4788675309,
      email: 'placeholder@email.com',
      startDate: '05/20/2019',
      birtdDate: '11/27/1995'
    },
    {
      id: 1,
      name: 'Alice Lew',
      phone: 4704445555,
      email: 'alice@email.com',
      startDate: '10/22/2019',
      birtdDate: '02/27/1997'
    },
    {
      id: 2,
      name: 'Kyle Olson',
      phone: 1234567890,
      email: 'kyleOlson@email.com',
      startDate: '02/05/2020',
      birtdDate: '05/15/1996'
    },
    {
      id: 3,
      name: 'Jose Morgan',
      phone: 9876543210,
      email: 'jose@email.com',
      startDate: '12/01/2019',
      birtdDate: '11/06/1993'
    },
    {
      id: 4,
      name: 'Pranav Dorbala',
      phone: 5673854623,
      email: 'pranav@email.com',
      startDate: '11/17/2019',
      birtdDate: '04/18/1996'
    },
    {
      id: 5,
      name: 'Random Person',
      phone: 5673854623,
      email: 'random@email.com',
      startDate: '11/17/2019',
      birtdDate: '04/18/1996'
    },
    {
      id: 6,
      name: 'John Doe',
      phone: 5673854623,
      email: 'john@email.com',
      startDate: '11/17/2019',
      birtdDate: '04/18/1996'
    },
    {
      id: 7,
      name: 'Jane Smith',
      phone: 1111111111,
      email: 'jane@email.com',
      startDate: '11/17/2019',
      birtdDate: '04/18/1996'
    }
  ];
  const [stateObj, setState] = useState({
    employees: originalList,
    sortByName: {
      shouldSort: false,
      direction: true
    }
  });

  const employeeFilterHandler = (event) => {
    if (event.target.value) {

      let filteredList = stateObj.employees.filter(employee => employee.name.includes(event.target.value));
      setState({
        employees:filteredList,
        sortByName: stateObj.sortByName
      })
    }
    else{
      setState({
        employees: originalList,
        sortByName: stateObj.sortByName
      })
    }
  }

  return (
    <div>
      <Navbar
        className='blue darken-4'
        alignLinks="right"
        brand={<a className="brand-logo" href="!#">Employee Directory</a>}
        id=""
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}>
      </Navbar>

      <div className='container'>
        <TextInput className='searchBar' id="TextInput-4" placeholder='Filter By Name' onChange={(event) => employeeFilterHandler(event)} />
      </div>

      <DirectoryWindow
        employees={stateObj.employees}
      />
    </div>
  );
}

export default App;
