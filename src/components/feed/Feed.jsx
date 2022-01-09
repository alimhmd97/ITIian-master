import "./feed.css";
import {
  BsFillXCircleFill,
  BsChatSquareTextFill,
  BsChevronDoubleDown,
  BsFillCursorFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import ShowMoreText from "react-show-more-text";
import { db, storage } from "../../firebase-config";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { BsCardImage, BsTrashFill } from "react-icons/bs";
import { CurUserContext } from "../../context/curUserContext";
import Img from "../../image1.jpg";
import { useContext } from "react";
import { Timestamp, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
/* ------------------------------------imports-------------------------------------- */
export const Feed = () => {
  const [posts, setposts] = useState([]);
  const [PostText, setPostText] = useState("");
  const [allPosts, setallPosts] = useState([]);
  const [comments, setcomments] = useState(null);
  const [newcomments, setnewcomments] = useState([]);
  const [commentsText, setcommentsText] = useState("");
  const [img, setImg] = useState("");
  const [refresh, setrefresh] = useState(false);
  const [I, setI] = useState();
  /* ------------------------------------- END Stats------------------------------------- */
  const { curUser } = useContext(CurUserContext);
  const postsCollectionRefrance = collection(db, "posts");
  const getposts = async () => {
    const postsData = await getDocs(postsCollectionRefrance);
    setposts(postsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  /* -------------------------------------useEffect------------------------------------- */
  useEffect(() => {
    getposts();
    getnewcomments();
  }, [refresh]);

  useEffect(() => {
    fetch(
      "https://firestore.googleapis.com/v1/projects/new-test-7e4d3/databases/(default)/documents/posts"
    )
      .then((response) => response.json())
      .then((data) => setallPosts(data.documents));
  }, [refresh]);
  /* -----------------------------------getnewcomments--------------------------------------- */
  const newcommentsCollectionRefrance = collection(db, "comments");
  const getnewcomments = async () => {
    const newcommentsData = await getDocs(newcommentsCollectionRefrance);
    setnewcomments(
      newcommentsData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setrefresh(!refresh);
  };
  /* ------------------------------------handleSubmit-------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = `${curUser.uid}${new Date().getTime()}`;
    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `postsimages/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }
    await addDoc(collection(db, "posts"), {
      PostText,
      from: id,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      like: 0,
      islike: false,
      ownerImg: curUser.avatar,
      postOwnername: curUser.name,
    });
    const docSnap = await getDoc(doc(db, "posts", id));
    setPostText("");
    console.log(docSnap);
    setrefresh(!refresh);
  };
  /* -------------------------------------likeHandler------------------------------------- */
  const likeHandler = async (i) => {
    await updateDoc(doc(db, "posts", posts[i].id), {
      islike: !posts[i].islike,
      like: posts[i].islike ? posts[i].like - 1 : posts[i].like + 1,
    });
    setrefresh(!refresh);
  };
  /* ---------------------------------delatePost---------------------------------------- */

  const delatePost = async (i) => {
    if (posts[i].from.includes(curUser.uid)) {
      console.log(posts[i].id);
      console.log(posts);
      const postDoc = doc(db, "posts", posts[i].id);
      await deleteDoc(postDoc);
      setrefresh(!refresh);
    } else {
    }
    setrefresh(!refresh);
  };

  /* --------------------------------------commentsHandler------------------------------------ */
  const commentsHandler = async (i) => {
    await addDoc(collection(db, "comments"), {
      commentsText,
      from: curUser.uid,
      createdAt: Timestamp.fromDate(new Date()),
      postID: posts[i].id,
      commentOwnerImg: curUser.avatar,
      commentOwnername: curUser.name,
    });
    setcommentsText("");
    setrefresh(!refresh);
    showComments(i);
  };
  /* --------------------------------------commentsHandler------------------------------------ */
  const showComments = (i) => {
    setI(i);
    Promise.all([
      fetch(
        "https://firestore.googleapis.com/v1/projects/new-test-7e4d3/databases/(default)/documents/comments"
      )
        .then((value) => value.json())
        .then((value) => setcomments(value.documents)),
    ]).catch((err) => {
      alert(err);
    });
  };
  /* ---------------------------------delete comment------------------------------------ */
  const delatecomment = async (i, index) => {
    showComments(i);

    if (newcomments[index].from.includes(curUser.uid)) {
      const commentDoc = doc(db, "comments", newcomments[index].id);
      await deleteDoc(commentDoc);
    } else {
      alert("you cant delete");
    }
    setrefresh(!refresh);
  };

  return (
    <>
      {curUser ? (
        <div className="feed">
          <div className="feedWrapper">
            <div className="share">
              <div className="shareWrapper">
                <div className="shareTop">
                  <img
                    className="shareProfileImg"
                    src={curUser.avatar || Img}
                    alt=""
                  />
                  {/*  */}
                  <input
                    placeholder="What's in your mind ?"
                    className="shareInput"
                    value={PostText}
                    onChange={(e) => setPostText(e.target.value)}
                  />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                  <div className="shareOption mx-1">
                    <span className="shareOptionText"> Photo </span>
                    <label htmlFor="img">
                      <BsCardImage className="shareIcon text-danger" />
                    </label>
                    <input
                      onChange={(e) => setImg(e.target.files[0])}
                      type="file"
                      id="img"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="shareOption mx-1">
                    <span className="shareOptionText"> Post </span>
                    <label htmlFor="post">
                      <FaPaperPlane
                        id="post"
                        onClick={handleSubmit}
                        className="shareIcon text-danger "
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {allPosts.map((postd, i) => {
              return (
                <div className="post">
                  <div className="postWrapper">
                    <div className="postTop">
                      <div className="postTopLeft">
                        <img
                          className="shareProfileImg postProfileImg"
                          src={postd.fields.ownerImg?.stringValue || Img}
                          alt=""
                        />
                        <figure>
                          <sapn className="postUsername">
                            {/* {Users.filter((u) => u.id === post.userId)[0].username} */}
                            {postd.fields.postOwnername?.stringValue}
                          </sapn>
                          <br />
                          <figcaption>
                            <cite>
                              <sapn className="postDate">
                                {postd.fields.createdAt.timestampValue}
                              </sapn>
                            </cite>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="postTopRight">
                        <>
                          <p class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              fs-3
                              text-danger
                            ></a>
                            <ul
                              class="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <button
                                  class="nav-link  btn btn-danger "
                                  onClick={async () => {
                                    await delatePost(i);
                                  }}
                                >
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </p>
                        </>
                      </div>
                    </div>
                    <div className="postCenter">
                      <p className="postText px-2">
                        <ShowMoreText
                          /* Default options */

                          lines={4}
                          more="Show more"
                          less="...Show less"
                          anchorClass="oooeeer"
                          // onClick={this.executeOnClick}
                          expanded={false}
                          width={0}
                        >
                          {postd.fields.PostText.stringValue}
                        </ShowMoreText>
                      </p>
                      <img
                        className="postImg"
                        src={postd.fields.media.stringValue}
                        alt=""
                      />
                    </div>
                    <div className="postBottom">
                      <div className="postBottomLeft">
                        <span className="postCommentText">
                          <BsChatSquareTextFill
                            className="deleteIcon me-1  fs-4 text-danger"
                            onClick={() => {
                              showComments(i);
                            }}
                          />
                          Comments
                        </span>
                      </div>
                      <div className="postBottomRight">
                        <BsFillHeartFill
                          className="likeIcon text-danger"
                          // src="assets/like.png"
                          // alt=""
                          onClick={() => {
                            likeHandler(i);
                          }}
                        />
                        <span className="postLikeCounter">
                          {postd.fields.like.integerValue
                            ? postd.fields.like.integerValue
                            : 1}
                          Like It
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="show-comments ">
                      {comments ? (
                        <div>
                          {comments.map((comment, index) => {
                            if (
                              comment.fields.postID.stringValue === posts[i]?.id
                            ) {
                              return (
                                <div
                                  className={` D-non ${
                                    I === i ? "d-flex" : "d-none "
                                  } m-2 p-2  row g-0  justify-content-around   `}
                                >
                                  <div className="col-1 me-3">
                                    <img
                                      className="shareProfileImg postProfileImg mb-2"
                                      src={
                                        comment.fields.commentOwnerImg
                                          .stringValue || Img
                                      }
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-9 ">
                                    <div className="row g-0">
                                      <h6 className="postUsername">
                                        {
                                          comment.fields.commentOwnername
                                            .stringValue
                                        }
                                      </h6>
                                    </div>
                                    <div className="row g-0">
                                      <p style={{ "font-size": "0.7rem" }}>
                                        {
                                          comment.fields.createdAt
                                            .timestampValue
                                        }
                                      </p>
                                    </div>
                                    <div className="commentfiled row p-1 m-0 ">
                                      <p className="m-0 ">
                                        {
                                          comment.fields.commentsText
                                            .stringValue
                                        }
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-1">
                                    <BsFillXCircleFill
                                      className="fs-4 text-danger deleteIcon "
                                      onClick={() => {
                                        delatecomment(i, index);
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      ) : (
                        " "
                      )}
                    </div>
                    <div className="postComment">
                      <input
                        placeholder="inputComment"
                        className="inputComment"
                        // onBlur={blur}
                        // value={commentsText}
                        onChange={(e) => setcommentsText(e.target.value)}
                      />
                      <button
                        className="shareButton"
                        onClick={() => {
                          commentsHandler(i);
                        }}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div style={{ position: "relative" }}>
            <h2
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div class="spinner-border my-5 mx-5" role="status">
                <span class="visually-hidden"> Loading... </span>
              </div>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};
export default Feed;
