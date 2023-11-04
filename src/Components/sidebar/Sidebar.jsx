import "./sidebar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import {
  BsChatLeftDotsFill,
  BsBookmarkFill,
  BsFillQuestionSquareFill,
  BsFillCalendar3EventFill,
} from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaGraduationCap, FaDiscourse } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrape">
        <ul className="sidebarList">
          <li className="sidebarItem">
            {/* icon for the feed with class name of sidebarIcon*/}
            <MdOutlineRssFeed className="sidebarIcon" />
            <span className="sidebarItemTex"> Feed </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the Chats with class name of sidebarIcon*/}
            <BsChatLeftDotsFill className="sidebarIcon" />
            <span className="sidebarItemTex"> Chats </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the Video with class name of sidebarIcon*/}
            <PiVideoFill className="sidebarIcon" />
            <span className="sidebarItemTex"> Video </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the Groups with class name of sidebarIcon*/}
            <MdGroups className="sidebarIcon" />
            <span className="sidebarItemTex"> Groups </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the Bookmarks with class name of sidebarIcon*/}
            <BsBookmarkFill className="sidebarIcon" />
            <span className="sidebarItemTex"> Bookmarks </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the Questions with class name of sidebarIcon*/}
            <BsFillQuestionSquareFill className="sidebarIcon" />
            <span className="sidebarItemTex"> Questions </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the jobs with class name of sidebarIcon*/}
            <FaGraduationCap className="sidebarIcon" />
            <span className="sidebarItemTex"> Jobs </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the Events with class name of sidebarIcon*/}
            <BsFillCalendar3EventFill className="sidebarIcon" />
            <span className="sidebarItemTex"> Events </span>
          </li>
          <li className="sidebarItem">
            {/* icon for the Courses with class name of sidebarIcon*/}
            <FaDiscourse className="sidebarIcon" />
            <span className="sidebarItemTex"> Courses </span>
          </li>
        </ul>
        <button className="sidebarButton"> Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
          <li className="sidebarFriend">
            <img
              src="../../../../assets/Person/pro.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">King Khan </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
