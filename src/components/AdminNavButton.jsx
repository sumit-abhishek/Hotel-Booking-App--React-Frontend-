import React from "react";

const AdminNavButton = ({ id, icon, name }) => {
  return (
    <button type="button" className="btn btn-outline-light" id={id}>
      {icon} {name}
    </button>
  );
};

export default AdminNavButton;
