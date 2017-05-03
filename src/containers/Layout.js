import React from 'react';

import {
  Link
} from 'react-router-dom';

const Layout = () => (
    <div>
          <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leagues">Leagues</Link></li>
        <li><Link to="/tournaments">Tournaments</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/saved">Saved</Link></li>
      </ul>
    </div>

)


export default Layout;
