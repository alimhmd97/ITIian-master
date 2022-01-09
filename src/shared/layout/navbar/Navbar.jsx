import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { CurUserContext } from "../../../context/curUserContext";
import { auth, db } from "../../../firebase-config";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import Img from "../../../image1.jpg";
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
  BsBoxArrowRight,
  BsServer,
} from "react-icons/bs";
const Navbar = () => {
  const history = useHistory();
  const { curUser } = useContext(CurUserContext);
  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history.replace("/login");
  };
  return (
    <>
      <nav class="navBar navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container-fluid">
          <img
            className={styles.topbarImg}
            src="/assets/log2.png"
            alt="ITI Logo"
          />
          <div
            class="collapse navbar-collapse  justify-content-center  "
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link " to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link " to="/MyTrackPage">
                  Front End
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/MessagesPage">
                  MessagesPage
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/about">
                  Tracks
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/Jobs">
                  Jobs
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Options
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="nav-link text-danger  " to="/Profile">
                      <BsFillPersonFill class=" fs-4 " /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link class="nav-link text-danger " to="/AdminLogin">
                      <BsServer class=" fs-4 my-auto" /> AdminHome
                    </Link>
                  </li>
                  <li>
                    <Link class="nav-link text-danger " onClick={handleSignout}>
                      <BsBoxArrowRight class=" fs-4 my-auto" />
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            {curUser ? (
              <>
                <div className={styles.profile}>
                  <Link className="text-light fs-5" to="/Profile">
                    {curUser.name}
                  </Link>
                  <img
                    src={curUser.avatar || Img}
                    alt=""
                    className={styles.topbarImg}
                  />
                </div>
              </>
            ) : (
              <>
                <div class="spinner-border fs-2 text-light" role="status">
                  <span class="sr-only"></span>
                </div>
                {/* <p>...Loading</p> */}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
