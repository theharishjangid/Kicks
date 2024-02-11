import React from "react";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <h2>About</h2>
    </React.Fragment>
  );
};

export default About;
