import React from 'react';

function Header() {
    return (
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-light">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                {/* Logo icon */}
                {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                {/* Dark Logo icon */}
                <h2 style={{fontFamily: '"Palatino Linotype"', color: 'wheat'}}>Dashboard</h2>
                {/*End Logo icon */}
                {/* Logo text */}
              </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div className="navbar-collapse">
              {/* ============================================================== */}
              {/* toggle and nav items */}
              {/* ============================================================== */}
              <ul className="navbar-nav mr-auto mt-md-0 ">
                {/* This is  */}
             
                {/* ============================================================== */}
              </ul>
              {/* ============================================================== */}
              {/* User profile and search */}
              {/* ============================================================== */}
              <ul className="navbar-nav my-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="~/Media/assets/images/users/user1.png" alt="user" className="profile-pic" /></a>
                  <div className="dropdown-menu dropdown-menu-right animated flipInY">
                    <ul className="dropdown-user">
                      <li>
                        <div className="dw-user-box">
                          <div className="u-img"><img src="~/Media/assets/images/users/user1.png" alt="user" /></div>
                          <div className="u-text">
                            <h4>SacPhan</h4>
                            <p className="text-muted">SacPhan</p>
                          </div>
                        </div>
                      </li>
                      <li role="separator" className="divider" />
                      <li><a href="/User/Logout"><i className="fa fa-power-off" /> Logout</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    );
}
export default Header;