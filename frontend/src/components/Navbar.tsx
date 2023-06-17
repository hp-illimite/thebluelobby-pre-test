import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="button-wrap">
      <Link to="/">
        <button>Add New Task</button>
      </Link>

      <Link to="/view-all-task">
        <button>View All Task</button>
      </Link>
    </div>
  );
}

export default Navbar;
