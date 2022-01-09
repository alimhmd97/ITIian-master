import "./post.css";
// import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";
// import { Input } from "@mui/material";
export const Post = ({ post }) => {
  // const user = Users.filter((u) => u.id === post.userId);
  // console.log(user);
  const [like, setlike] = useState(post.like);
  const [islike, setislike] = useState(false);
  const likeHandler = () => {
    setlike(islike ? like - 1 : like + 1);
    setislike(!islike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="shareProfileImg postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <sapn className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </sapn>
            <sapn className="postDate">{post.date}</sapn>
          </div>
          <div className="postTopRight">{/* <MoreVert /> */}</div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
          <div className="postBottomRight">
            <img
              className="likeIcon"
              src="assets/like.png"
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} like it </span>
          </div>
        </div>
        <div className="postComment">
          <input placeholder="inputComment" className="inputComment" />
          {/* <Input placeholder="comment here" className="inputComment" /> */}
          <button className="shareButton">Comment</button>
        </div>
      </div>
    </div>
  );
};
export default Post;
