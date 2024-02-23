import React from "react";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <LoginForm />
    </div>
  );
};

export default Login;
