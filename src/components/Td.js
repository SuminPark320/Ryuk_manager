import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan  } from '@fortawesome/free-regular-svg-icons';
import oc from 'open-color';


import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: oc.teal[9],
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: oc.lime[1],
      },
      '&:nth-of-type(even)': {
        backgroundColor: oc.lime[2],
      },
    },
  }))(TableRow);

const Td = ({item,handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }
    const onEdit=() => {
      handleEdit(item);
    }
    if(item.is_manager ===false){
      return ( 
        <>
        {/* <TableBody> */}
            <StyledTableRow key={item.id}>
            <StyledTableCell align="left">{item.id}</StyledTableCell>
            <StyledTableCell align="left">{item.user_name}</StyledTableCell>
            <StyledTableCell align="left">{item.user_id}</StyledTableCell>
            <StyledTableCell align="left">{item.email}</StyledTableCell>
            <StyledTableCell align="left">  </StyledTableCell>
            <StyledTableCell align="left">{item.team_id}</StyledTableCell>
            <td onClick={onEdit} className='text-center text-black-400 cursor-pointer show-modal'>
                <FontAwesomeIcon icon={faPenToSquare} />
            </td>
            <td onClick={onRemove} className='text-center text-black-400 cursor-pointer'>
                <FontAwesomeIcon icon={faTrashCan} />
            </td>    
            </StyledTableRow>

        </>
    )
    }
    else {
      return ( 
        <>
        {/* <TableBody> */}
            <StyledTableRow key={item.id}>
            <StyledTableCell align="left">{item.id}</StyledTableCell>
            <StyledTableCell align="left">{item.user_name}</StyledTableCell>
            <StyledTableCell align="left">{item.user_id}</StyledTableCell>
            <StyledTableCell align="left">{item.email}</StyledTableCell>
            <StyledTableCell align="left">  </StyledTableCell>
            <td onClick={onEdit} className='text-center text-black-400 cursor-pointer show-modal'>
                <FontAwesomeIcon icon={faPenToSquare} />
            </td>
            <td onClick={onRemove} className='text-center text-black-400 cursor-pointer'>
                <FontAwesomeIcon icon={faTrashCan} />
            </td>    
            </StyledTableRow>

        </>
    )

    }

};

export default Td;