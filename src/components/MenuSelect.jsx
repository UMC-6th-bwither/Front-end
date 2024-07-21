import PropTypes from 'prop-types';
import * as M from '../styles/MenuSelect.style';

function MenuSelect({ menus, activeMenu, setActiveMenu }) {
  return (
    <M.MenuContainer>
      {menus.map((menu) => (
        <M.MenuItem
          key={menu}
          isActive={menu === activeMenu}
          onClick={() => setActiveMenu(menu)}
        >
          {menu}
        </M.MenuItem>
      ))}
    </M.MenuContainer>
  );
}

MenuSelect.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeMenu: PropTypes.string.isRequired,
  setActiveMenu: PropTypes.func.isRequired,
};

export default MenuSelect;