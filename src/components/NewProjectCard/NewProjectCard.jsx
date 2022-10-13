import React from "react";
import { Col } from "react-bootstrap";
import linkIcon from "../../assets/img/link-icon.png";
import "./style.css";

export default function NewProjectCard({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="card-wrapper"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="card-content">
          <div className="card-texts">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          <a href="#" className="card-link">
            <img src={linkIcon} alt="" />
          </a>
        </div>
      </div>
    </Col>
  );
}
