import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

export default function RightBar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="Gift box" className="giftIcon" />
          <span className="giftText">
            <b>Samir Ali</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="advertisement" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City: </span>
          <span className="rightBarInfoValue">New York</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From: </span>
          <span className="rightBarInfoValue">Madrid</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">relationship: </span>
          <span className="rightBarInfoValue">Single</span>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="assets/person/1.jpg"
              alt="following dp"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Cena</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/2.jpg"
              alt="following dp"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Cena</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/3.jpg"
              alt="following dp"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Cena</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/4.jpg"
              alt="following dp"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Cena</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/5.jpg"
              alt="following dp"
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Cena</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}
