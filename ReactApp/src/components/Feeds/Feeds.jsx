import Post from "../Posts/Posts";
import Share from "../Share/Share";
import "./Feeds.css";
import { Posts } from "../../dummyData";

export default function Feeds() {
  return (
    <div className="feeds">
      <div className="feedWrapper">
        <Share className="" />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
        {/* <Post /> */}
      </div>
    </div>
  );
}
