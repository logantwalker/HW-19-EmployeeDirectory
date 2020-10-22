import React from 'react';
import Employees from '../Employees/Employees';
import './directoryWindow.css';
import 'materialize-css';
import { Table } from 'react-materialize';

const directoryWindow = (props) => {

    return (
        <div className='directWin container'>
            <Table centered={true} hoverable={true} >
                <thead>
                    <tr>
                        <th data-field="name">
                            Name
                        </th>
                        <th data-field="email">
                            Email
                        </th>
                        <th data-field="phone">
                            Phone
                        </th>
                        <th data-field="start">
                            Start Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <Employees
                        employees={props.employees}
                    />
                </tbody>
            </Table>

        </div>
    );
}

export default directoryWindow;