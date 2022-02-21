import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import "./featured.scss"

export const Featured = ({type}) => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/movies/random?type=${type}`,  {
                    headers: {
                      token:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDg4MGZmNTc4MjBlZDIyYTNiZTJkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTMxOTE1MCwiZXhwIjoxNjQ1NzUxMTUwfQ.vK1oRONwh92MEGMCcINUty5eFPVg479MjPfpQq_NCeo"
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();
        }, [type]);

  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}

         



        <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        />

        <div className='info'>
            <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
            />
            <span className='desc'>{content.desc}</span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
