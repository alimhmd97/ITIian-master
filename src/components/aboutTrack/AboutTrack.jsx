import React from "react";
import "./aboutTrack.css";
import { BsSun, BsKeyboard, BsTools } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import CoursCard from "../../shared/card/CoursCard";
import ShowMoreText from "react-show-more-text";

const AboutTrack = () => {
  return (
    <>
      <div className="trackheader row m-0">
        <div className="col-6 ms-5 my-auto ">
          <h1> Front End Developmant </h1>{" "}
          <p className=""> Totam excepturi eos animi. </p>{" "}
        </div>{" "}
      </div>{" "}
      {/* <!-- About track  --> */}{" "}
      <section class="AboutTrack mb-5 ">
        <div className="container">
          <div className="AboutTrack_items row">
            <div className="AboutTrack_left col-6">
              <img src="assets/frontend-development.png" alt="" />
            </div>{" "}
            <div className="AboutTrack_right col-6 my-auto  ">
              <article>
                <h2> What is Front End ? </h2>{" "}
                <p>
                  The front - end of a website is the part that users interact
                  with.Everything that you see when you’ re navigating around
                  the Internet, from fonts and colors to dropdown menus and
                  sliders, is a combo of HTML, CSS, and JavaScript being
                  controlled by your computer’ s browser.{" "}
                </p>{" "}
                <div className="">
                  <h3>job profiles</h3>
                  <ul>
                    <li>
                      <BsSun className="fs-2 me-2" /> UI Developer
                    </li>
                    <li>
                      {" "}
                      <BsKeyboard className="fs-2 me-2" />
                      Frontend Developer
                    </li>
                    <li>
                      {" "}
                      <BsTools className="fs-2 me-2" />
                      JavaScript Developer
                    </li>
                  </ul>
                </div>
              </article>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="apply text-center py-5 ">
        <div className="container">
          <h2> who can apply </h2>{" "}
          <p>
            All University Graduates with prerequisites of the following: he
            must have a first degree from a recognized university or institution
            of higher education, or provide documentation indicating that they
            will earn such a first degree before enrolment in the 3-month
            program. Admission Requirements for Students vary depending on the
            student's area of study.{" "}
          </p>
          <div className="apply-container row">
            <article className="apply-item col ">
              <h5 className="item_head"> Gender </h5>
              <ul>
                <li> male </li> <li> female </li>
              </ul>
            </article>{" "}
            <article className="apply-item col ">
              <h5 className="item_head"> Nationality </h5>{" "}
              <ul>
                <li> Egyptians </li>{" "}
              </ul>{" "}
            </article>{" "}
            <article className="apply-item col ">
              <h5 className="item_head"> Educational Degree </h5>{" "}
              <ul>
                <li> Bachelor Degree </li>
              </ul>{" "}
            </article>{" "}
            <article className="apply-item col ">
              <h5 className="item_head"> Military Service </h5>{" "}
              <ul>
                <li> Defered or Exempted or Unkown or Completed </li>
              </ul>{" "}
            </article>{" "}
            <article className="apply-item col ">
              <h5 className="item_head"> Graduation Year </h5>{" "}
              <ul>
                <li>Last 10 Years </li>
              </ul>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* BEFORE YOU APPLY
       */}
      <section>
        <div className="container">
          <div className="AboutTrack_items row g-0 my-5 py-3 align-items-center">
            <div className="AboutTrack_right col-6">
              <Accordion defaultActiveKey="0" className="Accordion  my-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>IQ Exam</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The IQ, English exam has a specific duration and a time
                      counter that moves downward during your solution to the
                      exam, so what is the number of minutes set for each exam
                      of them and how to act smart and collect the largest
                      number of points in the exam, all of this you will find
                      clarified in this
                      video:https://www.youtube.com/watch?v=L2ckEbIC9pY
                    </p>
                    <ul>
                      <li> Challenge 501 book</li>
                      <li> Ultimate Book</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>ٌEnglish Exam</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>{" "}
            <div className=" AboutTrack_left col-6 ">
              <h2> English&IQ Exam </h2>{" "}
              <p>
                All University Graduates with prerequisites of the following: he
                must have a first degree from a recognized university or
                institution of higher education, or provide documentation
                indicating that they will earn such a first degree before
                enrolment in the 3-month program. Admission Requirements for
                Students vary depending on the student's area of study.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEFORE YOU APPLY
       */}
      {/*  */}
      <section class="before-apply py-5  my-5 ">
        <div className="container">
          <div className="AboutTrack_items row">
            <div className="AboutTrack_left col-6">
              <img src="assets/pp.png" alt="" />
            </div>{" "}
            <div className="AboutTrack_right col-6 ">
              <article>
                <h2> BEFORE YOU APPLY </h2>{" "}
                <p>
                  These topics will be discussed with you in the interviews”
                </p>{" "}
                <Dropdown>
                  <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    BEFORE YOU APPLY
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="https://alligator.io/css/ https://css-tricks.com/">
                      css-tricks
                    </Dropdown.Item>
                    <Dropdown.Item href="http://www.maharatech.gov.eg">
                      Web Fundamentals
                    </Dropdown.Item>
                    <Dropdown.Item href="https://tutorialzine.com/tag/css">
                      tutorialzine css
                    </Dropdown.Item>
                    <Dropdown.Item href="http://www.maharatech.gov.eg">
                      Javascript
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript">
                      Javascript freecodecamp
                    </Dropdown.Item>
                    <Dropdown.Item href="https://skillcrush.com/blog/skills-tobecome-a-front-end-developer/">
                      Frontend handbook
                    </Dropdown.Item>
                    <Dropdown.Item href="https://helpx.adobe.com/photoshop/tutorials.html">
                      Adobe Photoshop
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </article>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* map */}
      <section className="study-map text-center my-5">
        <div className="container">
          <h2>Study Map</h2>
          <div className="row my-5 ">
            <div className="col-3 ">
              <CoursCard
                coursedesc={
                  "HTML, or Hyper Text Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are struc"
                }
                photo={"assets/courses/html.png"}
                title={"HTML&CSS"}
                link1={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname1={"LEARN HTML &CSS"}
                link2={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname2={"LEARN HTML &CSS"}
                link3={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname3={"LEARN HTML &CSS"}
              />
            </div>
            <div className="col-3 ">
              <CoursCard
                coursedesc={
                  "HTML, or Hyper Text Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are struc"
                }
                photo={"assets/courses/Bootstrap.png"}
                title={"Bootstrap"}
                link1={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname1={"LEARN HTML &CSS"}
                link2={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname2={"LEARN HTML &CSS"}
                link3={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname3={"LEARN HTML &CSS"}
              />
            </div>
            <div className="col-3 ">
              <CoursCard
                coursedesc={
                  "HTML, or Hyper Text Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are struc"
                }
                photo={"assets/courses/js.png"}
                title={"JS&ES6"}
                link1={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname1={"LEARN HTML &CSS"}
                link2={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname2={"LEARN HTML &CSS"}
                link3={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname3={"LEARN HTML &CSS"}
              />
            </div>
            <div className="col-3 ">
              <CoursCard
                coursedesc={
                  "HTML, or Hyper Text Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are struc"
                }
                photo={"assets/courses/react.png"}
                title={"React"}
                link1={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname1={"LEARN HTML &CSS"}
                link2={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname2={"LEARN HTML &CSS"}
                link3={"https://maharatech.gov.eg/enrol/index.php?id=36"}
                coursname3={"LEARN HTML &CSS"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTrack;
