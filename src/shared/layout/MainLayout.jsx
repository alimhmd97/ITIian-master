import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div> {children} </div> <Footer />
    </>
    // className="container-fluid"
  );
};

export default MainLayout;
