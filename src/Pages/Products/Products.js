import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Link } from 'react-router-dom';
import { productItem } from '../../Datas';
import "./Products.css";


function Products() {
  const [productsData, setProductsData] = useState(productItem);
  const productDelete = (userID) => { 

    setProductsData(productsData.filter(user => user.id !== userID) )
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="/" className='link'>
              <div className="productsList__item">
                <img src={params.row.productImg} className="productsList__Img" alt='User Avatar' />
                {params.row.productName}
              </div>
            </Link>
          </>
        )
      }
    },
    {
      field: "productId",
      headerName: "Product Id",
      width: 200
    },
    {
      field: "price",
      headerName: "price",
      width: 120
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`} className="link">
              <button className='productsList__Edit'>Edit</button>
            </Link>
            <DeleteForeverOutlinedIcon
            className='productsList__Delete'
            onClick={() => productDelete(params.row.id)}
            />
          </>
        )
      }
    },
  ]


  return (
    <div className='productsList'>
      <span className="productsList__title">Products List</span>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={productsData}
          columns={columns}
          pageSize={4}
          disableSelectionOnClick
        />
      </Box>
    </div >
  )
}

export default Products

