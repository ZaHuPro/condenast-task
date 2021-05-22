import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">News</span>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </nav>
  );
}
