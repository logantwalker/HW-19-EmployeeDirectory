import React from 'react';
import Employees from '../Employees/Employees';
import './directoryWindow.css';

const directoryWindow = (props) =>{
    return(
        <div className='directWin'>
            <Employees/>
        </div>
    );
}

export default directoryWindow;