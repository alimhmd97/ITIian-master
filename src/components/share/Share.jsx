import "./share.css";
import { BsCardImage } from "react-icons/bs";
import { CurUserContext } from "../../../context/curUserContext";
import Img from "../../../image1.jpg";
import { useContext } from "react";
export const Share = () => {
  const { curUser } = useContext(CurUserContext);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={curUser.avatar || Img} alt="" />
          <input placeholder="What's in your mind ?" className="shareInput" />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOption">
            <BsCardImage htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo </span>
          </div>
          <button className="shareButton">POST</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
