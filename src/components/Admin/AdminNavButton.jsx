import React from "react";

const AdminNavButton = ({ id, icon, name, onClick, selected }) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-light ${selected ? "btn-light" : ""}`}
      id={id}
      onClick={onClick}
      style={selected ? { color: "black" } : {}}
    >
      {icon} {name}
    </button>
  );
};

export default AdminNavButton;
