import React from 'react'

function Disp2(props) {
    return (
        <tr>
          <td>{props.data.name}</td>
          <td>{props.data.gen}</td>
          <td>{props.lang.toString()}</td>
        </tr>
      )
}

export default Disp2
