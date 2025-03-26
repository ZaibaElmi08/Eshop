import React from "react";
import "./Header.css"; // Add custom styling

const Header = () => {
  return (
    <div className="jumbotron text-center pt-5" >
      <h1 className="display-1">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a jumbotron-style component for calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  );
};

export default Header;
