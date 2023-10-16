import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const NoMatchPage: React.FC = () => {
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        ir para <Button title="Home" onClick={() => navigate("/")} />
      </h3>
    </div>
  );
};

export default NoMatchPage;
