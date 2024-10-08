import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { NofoundStyle } from "./NofountCss";
import { Button } from "antd";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backButton = (event) => {
    event.preventDefault();

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      console.log("No previous page in the history");
    }
  };

  return (
    <NofoundStyle>
      <div className="not-found">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-text">
          The requested page '
          <span className="not-found-path">{location.pathname}</span>' does not
          exist.
        </p>
        <Button className="goBack"  onClick={backButton}>Go Back</Button>
      </div>
    </NofoundStyle>
  );
};

export default NotFound;
