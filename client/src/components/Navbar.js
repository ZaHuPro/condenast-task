import React from "react";

export default function NavBar({ setQueryInput, handleSearch, loading }) {
  const keyPressKeyPush = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand">News</span>
      <div className="search-group">
        <input
          className="form-control"
          onChange={(e) => setQueryInput(e.target.value)}
          placeholder="keywords or phrases separated by comma to be searched"
          onKeyDown={(e) => keyPressKeyPush(e)}
        />
        <button
          disabled={loading}
          onClick={() => handleSearch()}
          className="btn"
        >
          Search
        </button>
      </div>
    </nav>
  );
}
