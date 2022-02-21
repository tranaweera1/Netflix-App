import React, { useEffect, useState } from 'react';
import "./widgetSm.css"
import { Visibility, Person } from "@material-ui/icons"
import axios from 'axios';

export const WidgetSm = () => {

  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/users?new=true", {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDg4MGZmNTc4MjBlZDIyYTNiZTJkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDgxMDg2OCwiZXhwIjoxNjQ1MjQyODY4fQ.E-MPjvvWrNU-K86DuXzn_VNChXlxfoZa-SVv_EdDlXU"
          }
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getNewUsers();
  }, []);

  return <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
              {newUsers.map(user=>(
                <li className='widgetSmListItem'>
                  <Person className='widgetSmImg' />
                  <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>{user.username}</span>
                    <span className='widgetSmUserTitle'>Software Engineer</span>
                  </div>
                  <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon' />
                    Display 
                  </button>
                </li>
              ))}
                
            </ul>
           
         </div>;
};
