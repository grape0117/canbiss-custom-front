import React from "react";
import "./ManageIntro.css";
import { useNavigate } from "react-router-dom";
// import calculateImg from "../../assets/images/manageintro/total1.png";
// import busImg from "../../assets/images/manageintro/total2.png";
// import reportImg from "../../assets/images/manageintro/total3.png";
import extractionImg from "../../../assets/images/qualitycannabis/ghost-extraction.png";
import qualitycontrolImg from "../../../assets/images/qualitycannabis/ghost-quality-control.png";
import partytestingImg from "../../../assets/images/qualitycannabis/ghost-third-party-testing.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Example = () => {
  const navigate = useNavigate();
  const handleMore = () => {
    window.scrollTo(0, 0);
  };

  const handleOrder = () => {
    navigate("/shop");
  };
  return (
    <div className="manageintro-container container">
      <div className="manageintro_header container">
        <h1 className="manageintro__header__big">
          <span className="text-success-main managefood">
            {" "}
            QUALITY CANNABIS PRODUCTS
          </span>{" "}
        </h1>
        <div className="manageintro__sub__header">
          we keep the process that we use for our ghost extracts cannabis products simple.
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src={extractionImg}></img>
            <h5>PREMIUM CANNABIS</h5>
          </div>
          <div className="col-lg-4">
            <img src={partytestingImg}></img>
            <h5>3rd party tested</h5>
          </div>
          <div className="col-lg-4">
            <img src={qualitycontrolImg}></img>
            <h5>QUALITY CONTROL CHECKED</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
