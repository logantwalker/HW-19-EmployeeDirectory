import React from 'react';
import 'materialize-css';

const employee = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.phone}
            </td>
            <td>
                {props.start}
            </td>

        </tr>
    )
}

export default employee;