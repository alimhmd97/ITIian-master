import "./news.css";

export const News = ({ news }) => {
  return (
    <li className="rightbarNewsItem">
      <img src={news.photo} className="rightbarImg" alt="" />
      <p className="NewsName">{news.desc}</p>
    </li>
  );
};
export default News;
