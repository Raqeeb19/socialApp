import "./post.css";
import { FiMoreVertical } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="../../../assets/Person/pro.jpeg"
              alt=""
              className="postTopImg"
            />
            <span className="postTopUserName">{post.userId}</span>
            <span className="postTopTime"> {post.date}</span>
          </div>
          <div className="postTopRight">
            <FiMoreVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.description} </span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <BiLike className="likeIcon" />
            <FcLike className="likeIcon" />
            <span className="likeCounter">{post.like}</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCounter"> {post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
