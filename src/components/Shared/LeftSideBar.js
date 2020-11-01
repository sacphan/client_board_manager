import React from 'react';

function LeftSideBar() {
    return (
        <aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="nav-small-cap">PERSONAL</li>
              <li>
                <a className="has-arrow" href="#" aria-expanded="false"><i className="mdi mdi-gauge" /><span className="hide-menu">Dashboard </span></a>
                <ul aria-expanded="false" className="collapse">
                  
                </ul>
              </li>
            
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    );
}
export default LeftSideBar;