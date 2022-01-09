import "./myTrackPage.css";
import MyTrackPageSidebar from "../myTrackPageSidebar/MyTrackPageSidebar";
import Online from "../online/Online";
import Sidebar from "../sidbar/Sidebar";
import Feed from "../../components/feed/Feed";

const MyTrackPage = () => {
  return (
    <>
      <div className=" homeContain">
        <div className="row justify-content-center">
          <div className="col-6 mx-5  ">
            <Feed />
          </div>
          <div className="col-4  ">
            <MyTrackPageSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTrackPage;
