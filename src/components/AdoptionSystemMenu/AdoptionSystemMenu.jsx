/* eslint-disable react/prop-types */
import * as P from '../VerticalMenuSelector/VerticalMenuSelector.style';

export default function AdoptionSystemMenu({
  title,
  items,
  activeItemName,
  setActiveItemName,
}) {
  const handleClick = (e, name) => {
    e.preventDefault();
    setActiveItemName(name);

    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav>
      <P.MenuTitle>{title}</P.MenuTitle>

      <P.MenuSubtitleContainer>
        {items.map((item) => {
          const key = `vertical_menu_selector_${title}_${item.name}`;
          const isActive = item.name === activeItemName;

          return isActive ? (
            <P.MenuSubtitleActive
              key={key}
              href={`#${item.name}`}
              onClick={(e) => handleClick(e, item.name)}
            >
              {item.name}
            </P.MenuSubtitleActive>
          ) : (
            <P.MenuSubtitleInActive
              key={key}
              href={`#${item.name}`}
              onClick={(e) => handleClick(e, item.name)}
            >
              {item.name}
            </P.MenuSubtitleInActive>
          );
        })}
      </P.MenuSubtitleContainer>
    </nav>
  );
}
