import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./listitem.scss"

export const Listitem = ({index, item}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
  
    const getMovie = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDg4MGZmNTc4MjBlZDIyYTNiZTJkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTMxOTE1MCwiZXhwIjoxNjQ1NzUxMTUwfQ.vK1oRONwh92MEGMCcINUty5eFPVg479MjPfpQq_NCeo"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [item]);

  return (
    <Link to={'/watch'} state = {{ state: movie}} >
    <div 
        className='listitem'
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
     >
          <img src={movie.img}
           alt=""
          />

          {isHovered && (
            <div>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownAltOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">
                  {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
              </div>         
            </div>
              )}
        </div>
     </Link>
  )
}

