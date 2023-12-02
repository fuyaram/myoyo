import React, { useState } from 'react';
import './Header.css'; // Import your CSS file
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuState, setMenuState] = useState({
    menu1: false,
    menu2: false,
    // Add more menu items if needed
  });

  const toggleMenu = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };
  const showAllMenus = () => {
    setMenuState({
      menu1: true,
      menu2: true,
      // Add more menu items if needed
    });
  };

  return (
    <div className="header">
      <div className={`menu-item ${menuState.menu1 ? 'active' : ''}`} onClick={() => toggleMenu('menu1')}>
      <h3>𝗕𝗮𝗻𝗴𝗮𝗹𝗼𝗿𝗲</h3>
        {menuState.menu1 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝗰𝗵𝗮𝗻𝗻𝗮𝗶</h3>
        {menuState.menu2 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝐝𝐞𝐥𝐡𝗶</h3>
        {menuState.menu2 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝗚𝘂𝗿𝗴𝗮𝗼𝗻</h3>
        {menuState.menu2 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝐡𝐲𝐝𝐞𝐫𝐚𝐛𝐚𝐝</h3>
        {menuState.menu2 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝗸𝗼𝗹𝗸𝗮𝘁𝗮</h3>
        {menuState.menu2 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝗠𝘂𝗺𝗯𝗮𝗶</h3>
        {menuState.menu2 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝗻𝗼𝗶𝗱𝗮</h3>
        {menuState.menu2 && (
          <div className="submenu">
            <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${menuState.menu2 ? 'active' : ''}`} onClick={() => toggleMenu('menu2')}>
      <h3>𝐩𝐮𝐧𝐞</h3>
        {menuState.menu2 && (
          <div className="submenu">
             <div className="submenu-item">banglore</div>
            <div className="submenu-item">karnatak</div>
            <div className="submenu-item">delhi</div>
            <div className="submenu-item">gurgaun</div>
            <div className="submenu-item">mumbai</div>
            <div className="submenu-item">hyderabad</div>
            <div className="submenu-item">pune</div>
            <div className="submenu-item">noida</div>
            <div className="submenu-item">chenni</div>
            <div className="submenu-item">gaziabad</div>
            <div className="submenu-item">Ahmedabad </div>
            <div className="submenu-item">Lucknow </div>
            <div className="submenu-item">jaipure </div>
          </div>
        )}
      </div>
      
      <div className="show-all-button" onClick={showAllMenus}>
      <Link to="/city">ALL CꞮTꞮES <span className="arrow">&#9654;</span></Link>
    </div>
    </div>
  );
};

export default Header;
