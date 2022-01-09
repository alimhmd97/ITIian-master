import "./profile.css";
import Img from "../../image1.jpg";
import { useState, useEffect } from "react";
import { storage, db, auth } from "../../firebase-config";
import { BsTrashFill } from "react-icons/bs";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { useHistory } from "react-router-dom";
import { async } from "@firebase/util";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();
  const history = useHistory("");
  let [refresh, setrefresh] = useState(false);

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });

    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });

          setImg("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
      setrefresh(!refresh);
    }
  }, [img]);

  const deleteImage = async () => {
    try {
      const confirm = window.confirm("Delete avatar?");
      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath));

        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          avatar:
            "https://www.duke-nus.edu.sg/images/librariesprovider5/people/1-placeholder.png?sfvrsn=61a8955c_0",
          avatarPath: "",
        });
        history.replace("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  /* -------------------------------------------------------------------------- */
  const [myprofile, setmyprofile] = useState([]);
  const [myNEWprofile, setmyNEWprofile] = useState(null);
  const [SKILLS, setSKILLS] = useState("");
  const [EXPERIANCES, setEXPERIANCES] = useState("");
  const [CONTACTS, setCONTACTS] = useState("");
  const [newSkills, setnewSkills] = useState([]);
  const [newEXPERIANCES, setnewEXPERIANCES] = useState([]);
  const [newCONTACTS, setnewCONTACTS] = useState([]);
  const myprofileCollectionRefrance = collection(db, "myprofile");
  const getmyprofile = async () => {
    const myprofileData = await getDocs(myprofileCollectionRefrance);
    await setmyprofile(
      myprofileData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getmyprofile();
  }, [refresh]);

  const saveChangs = async (e) => {
    console.log(myprofile);
    await updateDoc(doc(db, "myprofile", myprofile[0].id), {
      SKILLS: SKILLS,
      EXPERIANCES: EXPERIANCES,
      CONTACTS: CONTACTS,
    });
    setrefresh(!refresh);
  };
  const [TO1, setTO1] = useState(true);

  const toggle1 = () => {
    setTO1(!TO1);
  };
  const [TO2, setTO2] = useState(true);

  const toggle2 = () => {
    setTO2(!TO2);
  };
  const [TO3, setTO3] = useState(true);

  const toggle3 = () => {
    setTO3(!TO3);
  };
  useEffect(() => {
    Promise.all([
      fetch(
        "https://firestore.googleapis.com/v1/projects/new-test-7e4d3/databases/(default)/documents/myprofile"
      )
        .then((value) => value.json())
        .then((value) => setmyNEWprofile(value.documents)),
    ]).catch((err) => {
      console.log(err);
    });
  }, [refresh]);

  if (myNEWprofile) {
    myNEWprofile[0].fields.CONTACTS.stringValue.split(",").map((s) => {
      console.log(s);
    });
  } else {
    console.log("myNEWprofile[0].fields");
  }
  return user ? (
    <section className="profile">
      <div className="container ">
        <div className="profile-container mx-auto my-5">
          <div className="profile-head mt-5 px-2 py-5 align-items-center g-0 row">
            <div className="col-lg-6 mx-auto">
              <div className="img_container">
                <img
                  className="profile-img "
                  src={user.avatar || Img}
                  alt="avatar"
                />
                {user.avatar ? (
                  <BsTrashFill
                    className=" deleteIcon  fs-2 text-danger "
                    onClick={deleteImage}
                  />
                ) : null}

                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="actual-btn"
                  onChange={(e) => setImg(e.target.files[0])}
                  id="actual-btn"
                />

                <label className="btn btn-danger rounded-pill" for="actual-btn">
                  change photo
                </label>
              </div>
            </div>
            <div className="col-lg-6  mx-auto">
              <div className=" text-center  mx-auto">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h4>Front End Dev</h4>
                <small>
                  Joined on: {user.createdAt.toDate().toDateString()}
                </small>
              </div>
            </div>
          </div>
          {/* ADD SKILLS */}
          <div className="SKILLS-head  py-5 px-4 text-center row">
            <div className="col-lg-6 mt-2">
              <div className="skill-card">
                <h3> Skills</h3>
                {TO1 ? (
                  <>
                    {myNEWprofile ? (
                      <ul className="text-center">
                        {myNEWprofile[0].fields.SKILLS.stringValue
                          .split(",")
                          .map((s) => {
                            return <li>{s}</li>;
                          })}
                      </ul>
                    ) : (
                      <p>pleace waite</p>
                    )}
                  </>
                ) : (
                  <>
                    <label for="skills"></label>

                    <textarea
                      id="skills"
                      name="skills"
                      rows="4"
                      cols="50"
                      placeholder="split every skill by comma"
                      value={SKILLS}
                      onChange={(e) => setSKILLS(e.target.value)}
                    ></textarea>
                  </>
                )}
                <button
                  type="button"
                  className="btn btn-danger rounded-pill"
                  onClick={toggle1}
                >
                  Edite Skills
                </button>
              </div>
            </div>
            <div className="col-lg-6 align-bottom mt-2">
              <div className="skill-card">
                <h3> EXPERIANCES</h3>
                {TO2 ? (
                  <>
                    {myNEWprofile ? (
                      <ul className="text-center">
                        {myNEWprofile[0].fields.EXPERIANCES.stringValue
                          .split(",")
                          .map((E) => {
                            return <li>{E}</li>;
                          })}
                      </ul>
                    ) : (
                      <p>pleace waite</p>
                    )}
                  </>
                ) : (
                  <>
                    <label for="EXPERIANCES"></label>

                    <textarea
                      id="EXPERIANCES"
                      name="EXPERIANCES"
                      rows="4"
                      cols="50"
                      placeholder="split every EXPERIANCES by comma"
                      value={EXPERIANCES}
                      onChange={(e) => setEXPERIANCES(e.target.value)}
                    ></textarea>
                  </>
                )}
                <button
                  type="button"
                  className="btn btn-danger rounded-pill"
                  onClick={toggle2}
                >
                  Edite EXPERIANCES
                </button>
              </div>
            </div>
          </div>
          {/* edite password */}

          <div className="SKILLS-head  py-5 px-4 text-center row">
            <div className="col-lg-6">
              <label for="CONTACTS"></label>

              <div className="skill-card">
                <h3> CONTACTS</h3>
                {TO3 ? (
                  <>
                    {myNEWprofile ? (
                      <ul className="text-center">
                        {myNEWprofile[0].fields.CONTACTS.stringValue
                          .split(",")
                          .map((C) => {
                            return <li>{C}</li>;
                          })}
                      </ul>
                    ) : (
                      <p>pleace waite</p>
                    )}
                  </>
                ) : (
                  <>
                    <label for="CONTACTS"></label>

                    <textarea
                      id="CONTACTS"
                      name="CONTACTS"
                      rows="4"
                      cols="50"
                      placeholder="split every CONTACTS by comma"
                      value={CONTACTS}
                      onChange={(e) => setCONTACTS(e.target.value)}
                    ></textarea>
                  </>
                )}
                <button
                  type="button"
                  className="btn btn-danger rounded-pill"
                  onClick={toggle3}
                >
                  Edite CONTACTS
                </button>
              </div>
            </div>
            <div className="col-lg-6 align-bottom mt-4">
              <div className="skill-card">
                <h3> Change Password</h3>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Current Password</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="••••••"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="••••••"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>
                        Confirm{" "}
                        <span className="d-none d-xl-inline">Password</span>
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="••••••"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger rounded-pill m-4 "
            onClick={saveChangs}
          >
            save changes
          </button>
        </div>
      </div>
    </section>
  ) : null;
};

export default Profile;
