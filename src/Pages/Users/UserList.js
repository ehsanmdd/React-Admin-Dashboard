import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Link } from 'react-router-dom';
import { userTable } from '../../Datas';
import "./UserList.css";


function UserList() {
  const [usersData, setUsersData] = useState(userTable);
  const userDelete = (userID) => { 

    setUsersData(usersData.filter(user => user.id !== userID) )
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'user',
      headerName: 'User',
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to="/" className='link'>
              <div className="usersList__User">
                <img src={params.row.avatar} className="userList__Img" alt='User Avatar' />
                {params.row.userName}
              </div>
            </Link>
          </>
        )
      }
    },
    {
      field: "email",
      headerName: "Email",
      width: 300
    },
    {
      field: "status",
      headerName: "Status",
      width: 120
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 200
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className='userList__Edit'>Edit</button>
            </Link>
            <DeleteForeverOutlinedIcon
            className='userList__Delete'
            onClick={() => userDelete(params.row.id)}
            />
          </>
        )
      }
    },
  ]


  return (
    <div className='userList'>
      <span className="userList__title">Users List</span>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={usersData}
          columns={columns}
          pageSize={4}
          disableSelectionOnClick
        />
      </Box>
    </div >
  )
}

export default UserList