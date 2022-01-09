import "../sidbar/sidebar.css";
import {
  BsFillAwardFill,
  BsFillArrowDownCircleFill,
  BsFillArchiveFill,
  BsFillBagPlusFill,
  BsFillBookmarkCheckFill,
  BsFillCalendarPlusFill,
  BsFillChatDotsFill,
} from "react-icons/bs";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { db, auth, storage } from "../../firebase-config";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { Link } from "react-router-dom";

export const MyTrackPageSidebar = () => {
  const [users, setUsers] = useState([]);
  const user1 = auth.currentUser.uid;
  const [msgs, setMsgs] = useState([]);
  const [chat, setChat] = useState("");

  useEffect(() => {
    const usersRef = collection(db, "users");
    // create query object
    const q = query(usersRef, where("uid", "not-in", [user1]));
    // execute query
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });

    return () => unsub();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="">
          <h2>Front End Friends</h2>
        </div>
        <div>
          <img src="assets/news/about (1).png" alt="" className="w-100 my-2" />
        </div>
        <button className="sidebarButton text-danger">
          <Link className="sidebarButton text-danger" to="/MessagesPage">
            Open Chat
          </Link>
        </button>
        <hr className="sidebarHr" />
        {users.map((user) => (
          <Online key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};
export default MyTrackPageSidebar;
