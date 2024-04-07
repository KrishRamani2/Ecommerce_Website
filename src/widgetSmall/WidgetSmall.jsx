import { useEffect, useState } from 'react';
import axios from 'axios';
import { Visibility } from '@mui/icons-material';
import "./WidgetSmall.css";
const WidgetSmall = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  // Sort users by join date and get the top 5
  const topFiveUsers = users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {topFiveUsers.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton" >
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
