import { Link } from "react-router-dom";
import "./cards.css";
export const Cards = (props) => {
  return (
    <>
      <div class="card">
        <img
          src={props.photo}
          className="imgo card-img-top w-100 mx-auto"
          alt="..."
        />
        <div class="card-body">
          <h2 className="card-title "> {props.title} </h2>{" "}
          <p className="card-text "> {props.text} </p>{" "}
          <Link class=" btnD" to="/track">
            Go To Details
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Cards;
