import React from 'react';

import "./productList.css"

import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Person, DeleteOutline } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { productRows } from "../../dummyData"

export const ProductList = () => {

  const [data,setData] = useState(productRows);

  const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
      return (
          <div className='productListItem'>
              <Person className='productListImg' />
              {params.row.name}
          </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
           <div>
              <Link to={"/product/" + params.row.id}>
                <button className='productListEdit'>Edit</button>
              </Link>
                <DeleteOutline  className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
           </div>
        )
      }
    }
  ];


  return <div className='productList'>
            <DataGrid 
            rows={data} 
            disableSelectionOnClick 
            columns={columns} 
            pageSize={8} 
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
         </div>;
};
