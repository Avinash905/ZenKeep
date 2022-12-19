import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning shadow">
        <div className="container-fluid px-5">
          <a className="navbar-brand fs-3 border-0" href="/">
            <i className="fa-regular fa-note-sticky mx-3"></i>
            ZenKeep
          </a>
        </div>
      </nav>
    </>
  );
}
