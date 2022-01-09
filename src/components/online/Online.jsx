import { useEffect, useState } from "react";
import Img from "../../image1.jpg";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import styles from "./online.module.css";
const Online = ({ user1, user, selectUser, chat }) => {
  const [data, setData] = useState("");
  const user2 = user?.uid;
  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);
  console.log(user.isOnline);
  return (
    <>
      <div className={styles.user_wrapper} onClick={() => selectUser(user)}>
        <div className="">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={user.avatar || Img}
                alt="tarek"
                className={styles.avatar}
              />
              <h6 className="mb-0">{user?.name}</h6>
              {data?.from !== user1 && data?.unread && (
                <small className={styles.unread}>New</small>
              )}
            </div>
            <div
              className={`${styles.user_status} ${
                user.isOnline ? "bg-success" : "bg-success opacity-25"
              }`}
            ></div>
          </div>
          {data && (
            <p className={`${styles.truncate} text-danger`}>
              <strong>{data.from === user1 ? "Me:" : null}</strong>
              {data.text}
            </p>
          )}
          <div
            onClick={() => selectUser(user)}
            className={`sm_container ${
              chat?.name === user?.name && "selected_user"
            }`}
          >
            <img
              src={user.avatar || Img}
              alt="avatar"
              className="avatar sm_screen"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Online;
