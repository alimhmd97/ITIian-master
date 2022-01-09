import React from "react";
import "./adminHome.css";
import { BsFillPersonFill, BsLockFill, BsGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className=" admin-container  ">
      <div className=" vv ">
        <div className=" mx-auto ">
          <form className="login text-center mx-auto ">
            <BsGearFill className="login-fa mx-auto" />
            <small className="text-light">Login To Admin Panal</small>
            <hr className="login-hr" />
            <div className="input-group">
              <span className="input-group-prepend input-group-text btn-danger active">
                <BsFillPersonFill />
              </span>
              <input
                className="form-control bg-dark text-light"
                type="email"
                name="email"
                placeholder="Email"
                autocomplete="off"
              />
            </div>
            <div className="input-group">
              <span className="input-group-prepend input-group-text btn-danger active ">
                <BsLockFill />
              </span>
              <input
                className="form-control bg-dark text-light"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button className=" btn btn-danger ">
              <Link className=" text-light" to="/AdminHome">
                Login
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
