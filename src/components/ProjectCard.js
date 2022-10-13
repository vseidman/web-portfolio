import { Col } from "react-bootstrap";
import linkIcon from "../assets/img/link-icon.png";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="link-icon">
          <a href="https://serv-u-jetpi.vercel.app">
            <img src={linkIcon} alt="" />
          </a>
        </div>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
