import { Users } from "../../dummyData";
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
  BsCardHeading,
  BsClipboardCheck,
} from "react-icons/bs";
import Img from "../../image1.jpg";
import "./adminHome.css";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light ">
        <h2 className="py-3 ">Tracks</h2>

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
                      <th>Track Cover</th>
                      <th className="max-width">Track Name</th>
                      <th className="sortable">Track description</th>
                      <th> Track ID</th>
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
                    className=" w-100 TrackAdminImg mx-auto  "
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
                    placeholder="Track Name"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-prepend input-group-text btn-danger active ">
                    <BsClipboardCheck />
                  </span>
                  <input
                    className="form-control bg-dark text-light"
                    type="text"
                    name="id"
                    placeholder="track id"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-prepend input-group-text btn-danger active">
                    <BsCardHeading />
                  </span>
                  <textarea
                    className="form-control bg-dark text-light py-5"
                    type="text "
                    name="des"
                    placeholder="track description"
                    autocomplete="off"
                  ></textarea>
                </div>

                <button className=" btn btn-danger ">Add</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row ">
          <ul class="pagination pagination-sm mx-auto justify-content-center bg-dark">
            <li class="page-item  ">
              <Link class="page-link bg-danger text-light" to="/AdminUsers">
                Users{" "}
              </Link>
            </li>
            <li class="page-item disabled">
              <Link
                class="page-link bg-danger text-light"
                to="/AdminTracks"
                tabindex="-1"
              >
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
