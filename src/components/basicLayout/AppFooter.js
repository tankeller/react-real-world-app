import React from 'react';
import { Link } from '@reach/router';

const AppFooter = () => {
    return (
        <footer>
        <div class="container">
          <Link to="/" class="logo-font">conduit</Link>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    )
}

export default AppFooter;