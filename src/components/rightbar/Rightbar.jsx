import "./rightbar.css";
import { Newz } from "../../dummyData";
import News from "../news/News";
export const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarContainer">
          <h2 className="rightbarImg">ITI News</h2>
          <img className="rightbarImg" src="assets/iti.jpg" alt="" />
        </div>
        <hr />
        <ul className="rightbarNewsList">
          {Newz.map((n) => (
            <News kew={n.id} news={n} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RightBar;
