import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutTracks.css";
import Carousel from "react-bootstrap/Carousel";
import Cards from "../../shared/card/Cards";

export const AboutTracks = () => {
  return (
    <>
      <div className="slider   ">
        <Carousel className="Carousel  w-100 g-0 ">
          <Carousel.Item className="CarouselItem">
            <img
              className="d-block w-100 img-fluid "
              src="assets/news/new (4).jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1> First slide label </h1>{" "}
              <h2>
                Nulla vitae elit libero, a pharetra augue mollis interdum.{" "}
              </h2>{" "}
            </Carousel.Caption>{" "}
          </Carousel.Item>{" "}
          <Carousel.Item className="CarouselItem">
            <img
              className="d-block w-100 img-fluid "
              src="assets/news/p5.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1> Second slide label </h1>{" "}
              <h2>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </h2>{" "}
            </Carousel.Caption>{" "}
          </Carousel.Item>{" "}
          <Carousel.Item className="CarouselItem">
            <img
              className="d-block w-100 img-fluid"
              src="assets/news/new (1).jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1> Third slide label </h1>{" "}
              <h2>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.{" "}
              </h2>{" "}
            </Carousel.Caption>{" "}
          </Carousel.Item>{" "}
        </Carousel>{" "}
      </div>{" "}
      {/* cards */}{" "}
      <div class="containerr w-75 text-center mx-auto">
        <div class="flex mx-auto">
          <Cards
            text={
              "Praesent commodo cursus magna, vel scelerisque nisl consecteturPraesent commodo cursus magna, vel scelerisque nisl consectetur"
            }
            photo={"assets/news/about (2).jpg"}
            title={"front end"}
          />{" "}
          <Cards
            text={
              "Praesent commodo cursus magna, vel scelerisque nisl consecteturPraesent commodo cursus magna, vel scelerisque nisl consectetur"
            }
            photo={"assets/news/about (3).png"}
            title={"Back End"}
          />{" "}
          <Cards
            text={
              "Praesent commodo cursus magna, vel scelerisque nisl consecteturPraesent commodo cursus magna, vel scelerisque nisl consectetur"
            }
            photo={"assets/news/about (2).jpg"}
            title={"Front End"}
          />{" "}
          <Cards
            text={
              "Praesent commodo cursus magna, vel scelerisque nisl consecteturPraesent commodo cursus magna, vel scelerisque nisl consectetur"
            }
            photo={"assets/news/about (1).png"}
            title={"front end"}
          />{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default AboutTracks;
