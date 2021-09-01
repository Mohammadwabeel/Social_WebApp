import "./Posts.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/4.jpg" alt="" />
            <span className="postUserName">Tyson</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter"></div>
        <div className="postRight"></div>
      </div>
    </div>
  );
}
