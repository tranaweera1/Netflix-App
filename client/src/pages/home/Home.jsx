import "./home.scss"
import { Navbar } from "../../componenents/Navbar/Navbar";
import { Featured } from "../../componenents/featured/Featured";
import { List } from "../../componenents/list/List";
import { useEffect, useState } from "react";
import axios from "axios";


export const Home = ({type}) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDg4MGZmNTc4MjBlZDIyYTNiZTJkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTMxOTE1MCwiZXhwIjoxNjQ1NzUxMTUwfQ.vK1oRONwh92MEGMCcINUty5eFPVg479MjPfpQq_NCeo"
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}
