import { Button, InputGroup, FormControl } from "react-bootstrap";
import styles from "./footer.module.css";
import {
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsFillHeartFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div class="container-fluid  bg-danger sticky-bottom ">
        <footer class="   d-flex flex-wrap justify-content-between align-items-center py-3   ">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <BsFillHeartFill />
              </svg>
            </a>
            <span class="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#">
                <svg class="bi" width="24" height="24">
                  <BsLinkedin />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                <svg class="bi" width="24" height="24">
                  <BsFacebook />{" "}
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                <svg class="bi" width="24" height="24">
                  <BsFacebook />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
