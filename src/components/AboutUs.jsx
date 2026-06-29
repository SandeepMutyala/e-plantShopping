import React from 'react';

import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery. We provide beautiful indoor plants,
        medicinal plants and aromatic plants to make your home fresh and
        peaceful.
      </p>

      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default AboutUs;
