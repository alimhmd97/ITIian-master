import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "../App.css";
export const CurUserContext = createContext();

export const CurUserContextProvider = ({ children }) => {
  const [curUser, setcurUser] = useState();
  //
  useEffect(() => {
    (async () => {
      auth?.currentUser &&
        (await getDoc(doc(db, "users", auth.currentUser?.uid)).then(
          (docSnap) => {
            if (docSnap.exists) {
              setcurUser(docSnap.data());
            }
          }
        ));
    })();
  }, [auth.currentUser]);

  return (
    <CurUserContext.Provider value={{ curUser }}>
      {" "}
      {children}{" "}
    </CurUserContext.Provider>
  );
};
