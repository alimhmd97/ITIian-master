import "./topbar.css";
// import { Link } from "react-router-dom";
export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ITIAN</span>
      </div>
      <div className="topbarCenter"></div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Tracks</span>
          <span className="topbarLink"> My Track</span>
        </div>
        <div>
          <span>Asmaa Ahmed</span>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
};
export default Topbar;
