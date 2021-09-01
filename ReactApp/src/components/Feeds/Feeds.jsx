import Post from "../Posts/Posts";
import Share from "../Share/Share";
import "./Feeds.css";

export default function Feeds() {
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Share className="" />
        <Post />
      </div>
    </div>
  );
}
