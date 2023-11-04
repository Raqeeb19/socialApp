import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import { postData } from "../../Data";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {postData.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
