import { ArrowBackOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

import "./watch.scss"

export const Watch = ({}) => {

  const location = useLocation();
  const movie = location.state.state;

  return (
    <div className='watch'>
     <Link to="/" className='link'>
        <div className='back'>
            <ArrowBackOutlined />
            Home
        </div>
     </Link>
       <video className='video' autoPlay progress controls src={movie.video}/>
    </div>
  )
}
