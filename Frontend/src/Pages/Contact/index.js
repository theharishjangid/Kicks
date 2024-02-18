import React from "react";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <h2>Contact</h2>
    </div>
  );
};

export default Contact;
