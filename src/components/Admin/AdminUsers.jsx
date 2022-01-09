import { Users } from "../../dummyData";
import React, { useRef, useEffect } from "react";
import {
  BsFillFunnelFill,
  BsLockFill,
  BsGearFill,
  BsFillPersonFill,
  BsFillCameraFill,
  BsFillBadgeArFill,
  BsFillUnlockFill,
  BsTrashFill,
  BsTools,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import Img from "../../image1.jpg";

const AdminUsers = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light ">
        <h2 className="py-3 ">Users</h2>

        <div className="row text-light ">
          <div className="col-8  text-light ">
            <div className="input-group mx-auto w-75 text-light ">
              <input
                className="form-control bg-dark text-light"
                type="text"
                name="Search"
                placeholder="Search"
                autocomplete="off"
              />{" "}
              <span className="input-group-prepend input-group-text btn-danger active btn ">
                search <BsFillFunnelFill />
              </span>
            </div>
            <div className="row flex-nowrap g-0 text-light">
              <div className=" admincard  text-light ">
                <table className="table table-bordered text-light">
                  <thead>
                    <tr>
                      <th className="align-top text-light">
                        <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 text-light">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="all-items"
                          />
                          <label
                            className="custom-control-label"
                            for="all-items"
                          ></label>
                        </div>
                      </th>
                      <th>Photo</th>
                      <th className="max-width">Name</th>
                      <th className="sortable">Date</th>
                      <th> ID</th>
                      <th>option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Users.map((user) => (
                      <tr>
                        <td className="align-middle">
                          <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="item-1"
                            />
                            <label
                              className="custom-control-label"
                              for="item-1"
                            ></label>
                          </div>
                        </td>
                        <td className="align-middle text-center">
                          <div
                            className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                            style={{
                              width: " 35px",
                              height: "35px",
                              "border-radius": " 3px",
                            }}
                          >
                            <img
                              style={{
                                width: " 35px",
                                height: "35px",
                                "border-radius": " 3px",
                              }}
                              src={user.profilePicture}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="text-nowrap align-middle">
                          {user.username}
                        </td>
                        <td className="text-nowrap align-middle">
                          <span>09 Dec 2017</span>
                        </td>

                        <td className="text-center align-middle">
                          <sapn>{user.id}</sapn>
                        </td>

                        <td className="text-center align-middle">
                          <div className="btn-group align-top">
                            <button
                              className="btn btn-sm btn-outline-danger "
                              type="button"
                              data-toggle="modal"
                              data-target="#user-form-modal"
                            >
                              <BsTools />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger "
                              type="button"
                            >
                              <BsTrashFill />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className=" add-user  col-3 ">
            {" "}
            <div className=" mx-auto ">
              <form className="login text-center mx-auto ">
                {/*  */}
                <div className="img_container mx-auto">
                  <img
                    className="profile-img mx-auto  "
                    src={Img}
                    alt="avatar"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="photo"
                    id="actual-btn"
                  />
                  <button className="btn btn-danger mx-2 " for="actual-btn">
                    <BsFillCameraFill />
                    Add Photo
                  </button>
                </div>

                {/*  */}
                <hr className="login-hr" />
                <div className="input-group">
                  <span className="input-group-prepend input-group-text btn-danger active ">
                    <BsFillBadgeArFill />
                  </span>
                  <input
                    className="form-control bg-dark text-light"
                    type="text"
                    name="name"
                    placeholder="username"
                  />
                </div>
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
                    <BsFillUnlockFill />
                  </span>
                  <input
                    className="form-control bg-dark text-light"
                    type="text"
                    name="password"
                    placeholder="Password"
                  />
                </div>

                <button className=" btn btn-danger ">Add</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row ">
          <ul class="pagination pagination-sm mx-auto justify-content-center bg-dark">
            <li class="page-item disabled bg-danger">
              <Link
                class="page-link bg-danger text-light"
                to="/AdminUsers"
                tabindex="-1"
              >
                Users{" "}
              </Link>
            </li>
            <li class="page-item">
              <Link class="page-link bg-danger text-light" to="/AdminTracks">
                Track{" "}
              </Link>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Posts
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                programs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default AdminUsers;
