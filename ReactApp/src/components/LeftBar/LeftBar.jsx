import "./LeftBar.css";
import {
  School,
  Event,
  WorkOutline,
  HelpOutline,
  Bookmark,
  Group,
  PlayCircleFilledOutlined,
  Chat,
  RssFeed,
} from "@material-ui/icons";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <span className="sideBarListItemText">Chat</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledOutlined className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon" />
            <span className="sideBarListItemText">Group</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmark</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Question</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>{" "}
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImg"
              src="/assets/person/1.jpg"
              alt=""
            />
            <span className="sideBarFriendName">John Smith</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
