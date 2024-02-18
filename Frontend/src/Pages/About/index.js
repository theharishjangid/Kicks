import React from "react";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <h2>About</h2>
    </div>
  );
};

export default About;
