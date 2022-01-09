import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import "../App.css";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading)
    return (
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
            <span class="visually-hidden"> Loading... </span>{" "}
          </div>{" "}
        </h2>{" "}
      </div>
    );

  return (
    <AuthContext.Provider value={{ user }}> {children} </AuthContext.Provider>
  );
};
