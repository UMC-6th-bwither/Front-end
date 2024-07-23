/* eslint-disable react/prop-types */
import * as B from './Button.style';

function Icon({ icon }) {
  return (
    <B.IconContainer>
      <B.Icon src={icon} />
    </B.IconContainer>
  );
}

export default function Button({
  width,
  paddingHorizontal,
  icon,
  white,
  whiteBorder,
  orange,
  orangeBorder,
  onClick,
  children,
}) {
  if (white) {
    return (
      <B.ButtonWhite
        $width={width}
        $paddingHorizontal={paddingHorizontal}
        onClick={onClick}
      >
        {icon && <Icon icon={icon} />}
        {children}
      </B.ButtonWhite>
    );
  }
  if (whiteBorder) {
    return (
      <B.ButtonWhiteBorder
        $width={width}
        $paddingHorizontal={paddingHorizontal}
        onClick={onClick}
      >
        {icon && <Icon icon={icon} />}
        {children}
      </B.ButtonWhiteBorder>
    );
  }
  if (orange) {
    return (
      <B.ButtonOrange
        $width={width}
        $paddingHorizontal={paddingHorizontal}
        onClick={onClick}
      >
        {icon && <Icon icon={icon} />}
        {children}
      </B.ButtonOrange>
    );
  }
  if (orangeBorder) {
    return (
      <B.ButtonOrangeBorder
        $width={width}
        $paddingHorizontal={paddingHorizontal}
        onClick={onClick}
      >
        {icon && <Icon icon={icon} />}
        {children}
      </B.ButtonOrangeBorder>
    );
  }

  return (
    <B.ButtonBase
      $width={width}
      $paddingHorizontal={paddingHorizontal}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </B.ButtonBase>
  );
}
