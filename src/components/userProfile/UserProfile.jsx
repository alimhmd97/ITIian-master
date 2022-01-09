import "./userprofile.css";
import Img from "../../image1.jpg";
import { useState, useEffect } from "react";
import { storage, db, auth } from "../../firebase-config";
import { BsTrashFill } from "react-icons/bs";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

const UserProfile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();

  let [refresh, setrefresh] = useState(false);
  const [users, setUsers] = useState();
  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
        console.log(user);
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

  useEffect(() => {
    Promise.all([
      fetch(
        "https://firestore.googleapis.com/v1/projects/auth-development-64923/databases/(default)/documents/myprofile"
      )
        .then((value) => value.json())
        .then((value) => setmyNEWprofile(value.documents)),
    ]).catch((err) => {
      console.log(err);
    });
  }, [refresh]);
  useEffect(() => {
    Promise.all([
      fetch(
        "https://firestore.googleapis.com/v1/projects/auth-development-64923/databases/(default)/documents/users"
      )
        .then((value) => value.json())
        .then((value) => setUsers(value.documents)),
    ]).catch((err) => {
      console.log(err);
    });
    console.log(users);
  }, []);
  // myprofile.map((prof) => {
  //   setnewSkills(prof.SKILLS.split(","));
  //   setnewEXPERIANCES(prof.EXPERIANCES.split(","));
  //   setnewCONTACTS(prof.CONTACTS.split(","));
  // });
  // setnewSkills(myprofile[0].SKILLS.split(","));
  // console.log(newSkills);
  // console.log(newEXPERIANCES);
  // console.log(newCONTACTS);
  if (myNEWprofile) {
    myNEWprofile[0].fields.CONTACTS.stringValue.split(",").map((s) => {
      console.log(s);
    });
  } else {
    console.log("myNEWprofile[0].fields");
  }

  // myprofile.map((pro) => {
  //   console.log(pro.SKILLS.split(","));
  //   // var nSkills = pro.SKILLS.split(",");
  // });
  return user ? (
    <section className="profile">
      <div className="container ">
        <div className="profile-container mx-auto my-5">
          <div className="profile-head mt-5 px-2 py-5 align-items-center g-0 row">
            <div className="col-6 mx-auto">
              <div className="img_container">
                <img
                  className="profile-img "
                  src={user.avatar || Img}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="col-6  mx-auto">
              <div className=" text-center  mx-auto">
                <h2>{user.name}</h2>

                <h4>Front End Dev</h4>
                <small>
                  Joined on: {user.createdAt.toDate().toDateString()}
                </small>

                <button className="btn btn-danger rounded-pill px-3  d-block my-1 mx-auto">
                  Follow
                </button>
              </div>
            </div>
          </div>
          {/* ADD SKILLS */}
          <div className="SKILLS-head  py-5 px-4 text-center   row">
            <div className="col-6">
              <div className="skill-card">
                <h3> Skills</h3>

                <>
                  <ul className="text-center">
                    {myNEWprofile[0].fields.SKILLS.stringValue
                      .split(",")
                      .map((s) => {
                        return <li>{s}</li>;
                      })}
                  </ul>
                </>
              </div>
            </div>
            <div className="col-6 align-bottom">
              <div className="skill-card">
                <h3> EXPERIANCES</h3>

                <ul className="text-center">
                  {myNEWprofile[0].fields.EXPERIANCES.stringValue
                    .split(",")
                    .map((E) => {
                      return <li>{E}</li>;
                    })}
                </ul>
              </div>
            </div>
          </div>
          {/* edite password */}

          <div className="SKILLS-head  py-5 px-4 text-center   row">
            <div className="col-6">
              <label for="CONTACTS"></label>

              <div className="skill-card">
                <h3> CONTACTS</h3>

                <ul className="text-center">
                  {myNEWprofile[0].fields.CONTACTS.stringValue
                    .split(",")
                    .map((C) => {
                      return <li>{C}</li>;
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default UserProfile;
