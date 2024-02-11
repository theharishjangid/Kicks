import React from "react";

const Blogs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <h2>Blogs</h2>
    </React.Fragment>
  );
};

export default Blogs;
