/* eslint-disable react/prop-types */
import { useState } from 'react';

import * as B from './ButtonSelector.style';

export default function ButtonSelector({
  children,
  active = false,
  paddingVertical,
  border,
  onClick,
}) {
  const contentString = typeof children === 'string' ? children : '';
  const [isActive, setActive] = useState(active);

  const handleButtonClick = () => {
    const newActiveStatus = !isActive;
    setActive(newActiveStatus);

    onClick?.({
      active: newActiveStatus,
      content: contentString,
    });
  };

  if (border) {
    if (isActive) {
      return (
        <B.ButtonSelectorBorderActive
          $paddingVertical={paddingVertical}
          onClick={handleButtonClick}
        >
          {children}
        </B.ButtonSelectorBorderActive>
      );
    }
    return (
      <B.ButtonSelectorBorderInactive
        $paddingVertical={paddingVertical}
        onClick={handleButtonClick}
      >
        {children}
      </B.ButtonSelectorBorderInactive>
    );
  }

  // no Border
  if (isActive) {
    return (
      <B.ButtonSelectorActive
        $paddingVertical={paddingVertical}
        onClick={handleButtonClick}
      >
        {children}
      </B.ButtonSelectorActive>
    );
  }
  return (
    <B.ButtonSelectorInactive
      $paddingVertical={paddingVertical}
      onClick={handleButtonClick}
    >
      {children}
    </B.ButtonSelectorInactive>
  );
}
