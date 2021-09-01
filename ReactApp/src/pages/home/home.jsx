import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feeds from "../../components/Feeds/Feeds";
import RightBar from "../../components/RightBar/RightBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <LeftBar />
        <Feeds />
        <RightBar />
      </div>
    </>
  );
}
