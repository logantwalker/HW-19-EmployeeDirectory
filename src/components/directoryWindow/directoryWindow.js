import React from 'react';
import Employees from '../Employees/Employees';
import './directoryWindow.css';
import 'materialize-css';
import { Button, Table } from 'react-materialize';

const directoryWindow = (props) => {

    return (
        <div className='directWin container'>
            <Table centered={true} hoverable={true} >
                <thead>
                    <tr>
                        <th data-field="name">
                            <Button flat node="button" waves='light' onClick={props.clicked()}>
                                Name
                            </Button>
                        </th>
                        <th data-field="email">
                            <Button flat node="button" waves='light'>
                                Email
                            </Button>
                        </th>
                        <th data-field="phone">
                            <Button flat node="button" waves='light'>
                                Phone
                            </Button>
                        </th>
                        <th data-field="start">
                            <Button flat node="button" waves='light'>
                                Start Date
                            </Button>
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