import "./CloseFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sideBarFriend">
      <img
        className="sideBarFriendImg"
        src={user.profilePicture}
        alt="A list tile of profiles"
      />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
}
