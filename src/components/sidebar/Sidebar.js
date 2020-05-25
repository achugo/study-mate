import React, { useState } from "react";
import "./Sidebar.scss";
import students from "../../assets/images/students.png";
import { useRouteMatch, Link } from "react-router-dom";

import userIcon from "../../assets/images/user.svg";
import editIcon from "../../assets/images/edit.svg";

import Learn from "../../assets/images/Learn.svg";
import Progress from "../../assets/images/Progress.svg";
import Profile from "../../assets/images/Profile.svg";

export default function Sidebar() {
  let match = useRouteMatch();
  const [links, setlinks] = useState([
    { text: "Learn", to: "", icon: Learn },
    { text: "Progress", to: "progress", icon: Progress },
    { text: "My Profile", to: "profile", icon: Profile },
  ]);

  const [linkIndex, setlinkIndex] = useState(0);

  return (
    <div className="sidebar">
      <div className="upper">
        <div className="user">
          <img
            src={userIcon}
            style={{ height: "100%", margin: " 12px auto" }}
            alt=""
          />
          <div className="edit">
            <img
              src={editIcon}
              style={{ height: "20px", margin: "10px auto" }}
              alt=""
            />
          </div>
        </div>
        <p className="user-details">
          Chisom Blessing
          <span>Junior secondary</span>
        </p>
        <ul>
          {links.map((link, i) => {
            return (
              <li
                onClick={() => setlinkIndex(i)}
                className={linkIndex === i ? "active" : ""}
                key={link.text}
              >
                <Link to={`${match.path}${link.to}`}>
                  <img src={link.icon} className="mr20" alt="" />
                  {link.text}

                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="12px"
                    height="12px"
                    className="f-right mt5 mr0"
                    viewBox="0 0 512.005 512.005"
                  >
                    <g>
                      <g>
                        <path
                          d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005
                          L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251
                          l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"
                        />
                      </g>
                    </g>
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <img src={students} alt="" className="students" />
    </div>
  );
}
