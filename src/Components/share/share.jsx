import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { BiSolidTagAlt } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsEmojiSmileFill } from "react-icons/bs";
export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="../../../assets/Person/pro.jpeg"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder="What is on your mind King Khan ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia
                htmlColor="tomato"
                id="sharePhotoColor"
                className="shareIcon"
              />
              <span className="shareText">Photo / Video </span>
            </div>
            <div className="shareOption">
              <BiSolidTagAlt
                htmlColor="blue"
                id="shareTagColor"
                className="shareIcon"
              />
              <span className="shareText">Tag </span>
            </div>
            <div className="shareOption">
              <ImLocation
                htmlColor="green"
                id="shareLocationColor"
                className="shareIcon"
              />
              <span className="shareText">Location </span>
            </div>
            <div className="shareOption">
              <BsEmojiSmileFill
                htmlColor="yellow"
                id="shareFellingsColor"
                className="shareIcon"
              />
              <span className="shareText">Feellings </span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
