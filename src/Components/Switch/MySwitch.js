import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Switch from "react-switch";

const MySwitch = () => {
  let history = useHistory();
  let location = useLocation();

  const [checked, setChecked] = useState(location.pathname.includes("login"));

  const handleChange = (checked) => {
    history.push(checked ? "/login" : "/signUp");
    setChecked(checked);
  };

  return (
    <Switch
      className="react-switch"
      onChange={handleChange}
      checked={checked}
    />
  );
};

export default MySwitch;
