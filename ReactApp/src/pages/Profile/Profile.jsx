import "./Profile.css";
import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feeds from "../../components/Feeds/Feeds";
import RightBar from "../../components/RightBar/RightBar";

export default function Profile() {
  return (
    <div>
      <>
        <TopBar />
        <div className="profile">
          <LeftBar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="/assets/post/9.jpg"
                  alt="profile cover of this user"
                />
                <img
                  className="profileUserImg"
                  src="/assets/person/4.jpg"
                  alt="profile dp of this user"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Tyson Tyson</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feeds />
              <RightBar profile />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
