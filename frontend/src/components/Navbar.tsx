import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="button-wrap">
      <Link to="/">
        <button>View All Task</button>
      </Link>

      <Link to="/add-new-task">
        <button>Add New Task</button>
      </Link>
    </div>
  );
}

export default Navbar;
