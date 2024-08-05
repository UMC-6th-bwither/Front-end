/* eslint-disable react/prop-types */
import * as P from './VerticalMenuSelector.style';

// const items = [
//   {
//     name: '질문/고민',
//     href: '/community/question',
//   },
//   {}, ...
// ];

export default function VerticalMenuSelector({ title, items, activeItemName }) {
  return (
    <nav>
      <P.MenuTitle>{title}</P.MenuTitle>

      <P.MenuSubtitleContainer>
        {items.map((item) => {
          const key = `vertical_menu_selector_${title}_${item.name}`;
          if (item.name === activeItemName) {
            return (
              <P.MenuSubtitleActive key={key} to={item.href}>
                {item.name}
              </P.MenuSubtitleActive>
            );
          }
          return (
            <P.MenuSubtitleInActive key={key} to={item.href}>
              {item.name}
            </P.MenuSubtitleInActive>
          );
        })}
      </P.MenuSubtitleContainer>
    </nav>
  );
}
