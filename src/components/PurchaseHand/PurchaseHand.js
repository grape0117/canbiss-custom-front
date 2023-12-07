import React from "react";
import "./PurchaseHand.css";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PurchaseHandImg from "../../assets/images/puchasehand/purchasehand.png";
const PurchaseHand = () => {
  const navigate = useNavigate();
  const handleMore = () => {
    window.scrollTo(0, 0);
  };

  const handleOrder = () => {
    navigate("/shop");
  };
  return (
    <div className="purchasehand-container container">
      <div>
        <h3>Purchase differently with Lenos</h3>
      </div>
      <div className="justify-content-center d-flex">
        <p className="purchasehand-letter">
          At Lenos, empower millions of Canadian with economic advantages as we
          unlock the potentials and gains of the cannabis products value chain in Canada.
        </p>
      </div>
      <img src={PurchaseHandImg} className="handimgclass" alt="handimg" />
    </div>
  );
};

export default PurchaseHand;
