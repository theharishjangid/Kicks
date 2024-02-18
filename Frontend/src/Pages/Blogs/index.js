import React from "react";

const Blogs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__page__container">
      <h2>Blogs</h2>
    </div>
  );
};

export default Blogs;
