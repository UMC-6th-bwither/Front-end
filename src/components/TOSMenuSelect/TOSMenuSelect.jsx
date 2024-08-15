import PropTypes from 'prop-types';
import * as M from './TOSMenuSelect.style';

function TOSMenuSelect({ menus, activeMenu, setActiveMenu }) {
  return (
    <M.MenuContainer>
      {menus.map((menu) => (
        <M.MenuItem
          key={menu}
          active={menu === activeMenu}
          onClick={() => setActiveMenu(menu)}
        >
          {menu}
        </M.MenuItem>
      ))}
    </M.MenuContainer>
  );
}

TOSMenuSelect.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeMenu: PropTypes.string.isRequired,
  setActiveMenu: PropTypes.func.isRequired,
};

export default TOSMenuSelect;