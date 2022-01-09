import {
  FaCommentAlt,
  FaLaptopCode,
  FaClipboardList,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export const AdminHome = () => {
  return (
    <>
      {/* <div className="container">
        <h2 className="text-center">Add University</h2>
        <form
          className="members-form"
          action="?do=Insert"
          method="POST"
          enctype="multipart/form-data"
        >
          <div className="input-group">
            <span className="input-group-prepend input-group-text btn-danger active">
              <i className="fa fa-university fa-fw"></i>
            </span>
            <input
              className="form-control"
              type="text"
              name="universityname"
              placeholder="University Name"
              autocomplete="off"
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend input-group-text btn-danger active ">
              <i className="fa fa-align-left fa-fw"></i>
            </span>
            <textarea
              className="form-control"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="input-group">
            <span className="input-group-prepend input-group-text btn-danger active ">
              <i className="fa  fa-link fa-fw"></i>
            </span>
            <input
              className="form-control"
              type="url"
              name="url"
              placeholder="URL"
              required
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend input-group-text btn-danger active ">
              <i className="fa  fa-globe fa-fw"></i>
            </span>
            <select name="country" className="form-control" required>
              <option disabled>Select Country</option>
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-prepend input-group-text btn-danger active ">
              <i className="fa  fa-picture-o fa-fw"></i>
            </span>
            <div className="custom-file text-left">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                name="logo"
              />
              <label className="custom-file-label" for="inputGroupFile01">
                Logo
              </label>
            </div>
          </div>

          <button className="btn btn-danger btn-block" type="submit">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div> */}
      <div classNameName=" admin-container ">
        <div className="container text-center dashboard text-light">
          <h2>Dashboard</h2>
          <div className="content text-light">
            <div className="row justify-content-md-center">
              <div className="col-md-3">
                <div className="box p-5 mb-1 bg-secondary rounded">
                  <FaGraduationCap className="fs-3" />

                  <div className="mt-2">
                    <Link class="text-light fs-1" to="/AdminUsers">
                      Users{" "}
                    </Link>
                  </div>
                  <h3>500 user </h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box p-5 mb-1 bg-danger rounded">
                  <FaLaptopCode className="fs-3" />
                  <div className="mt-2">
                    <Link class="text-light fs-1" to="/AdminTracks">
                      Tracks{" "}
                    </Link>
                  </div>
                  <h3> 43 Track </h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box p-5 mb-1 bg-dark rounded">
                  <FaCommentAlt className="fs-4" />
                  <div className="mt-2">
                    <Link class="text-light fs-1" to="/AdminUsers">
                      Posts{" "}
                    </Link>
                  </div>
                  <h3>700 Post</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box p-5 mb-1 bg-info rounded">
                  <FaClipboardList className="fs-4" />
                  <div className="mt-2">
                    <Link class="text-light fs-1" to="/AdminUsers">
                      programs{" "}
                    </Link>
                  </div>
                  <h3>50 programs </h3>
                </div>
              </div>
            </div>
            <div>
              <img src="assets/chart.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminHome;
