/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as D from './Dropbox2.style';

export default function Dropbox({
  width = 100,
  menuList,
  defaultPlaceholder,
  setCurrentMenu,
}) {
  const [menu, setMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const menuClickHandler = (value) => {
    setMenu(value);
    setCurrentMenu(value);
    setOpen(!open);
  };

  const toggleMenuOpen = () => {
    setOpen(!open);
  };

  return (
    <D.Container>
      <D.Base $width={width} onClick={toggleMenuOpen}>
        {menu === null ? defaultPlaceholder : menu}
        <D.IconContainer $isOpend={open}>
          <D.Icon src="/icons/dropdown.svg" />
        </D.IconContainer>
      </D.Base>
      <D.MenuWrapper $isOpend={open}>
        <D.MenuContainer $width={width}>
          {menuList.map((value, index) => (
            <D.Menu
              onClick={() => menuClickHandler(value)}
              // eslint-disable-next-line react/no-array-index-key
              key={`dropbox_menu_${defaultPlaceholder}_${index}`}
            >
              {value}
            </D.Menu>
          ))}
        </D.MenuContainer>
      </D.MenuWrapper>
    </D.Container>
  );
}
