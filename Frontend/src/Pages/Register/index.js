import React from "react";
import SignUp from "./SignUp/SignUp";

const Register = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <SignUp />
    </div>
  );
};

export default Register;
