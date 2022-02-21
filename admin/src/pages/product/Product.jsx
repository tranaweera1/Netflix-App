import React from 'react'

import "./product.css"

import {Chart} from "../../components/chart/Chart"
import { Link } from "react-router-dom"



export const Product = () => {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
          <h1 className='productTitle'>Product</h1>
          <Link to="/newproduct" className='link'>
            <button className='productAddButton'>Create</button>
          </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart />
          </div>
          <div className='productTopRight'></div>
        </div>
        <div className='productBottm'></div>
    </div>
  )
}
