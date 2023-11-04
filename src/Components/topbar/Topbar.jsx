import "./topbar.css";
// import { Search , Person , Chat , Notifications } from "@material-ui/icons"
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill, BsFillChatFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

export default function Topbar() {
  return (
    <div className="topborderContainer">
      <div className="leftContainer">
        <span className="logo">Assel Social App </span>
      </div>
      <div className="centerContainer">
        <div className="searchbar">
          <AiOutlineSearch className=" searchIcon" />
          <input
            placeholder="Search for frinds , post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="riteContainer">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarItems">
            <BsFillPersonFill className="personIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarItems">
            <BsFillChatFill className="chatIcon" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarItems">
            <IoMdNotifications className="notifacationsIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/Person/pro.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
