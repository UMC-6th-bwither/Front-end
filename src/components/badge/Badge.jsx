/* eslint-disable react/prop-types */
import * as T from './Badge.style';

function Icon({ icon }) {
  return (
    <T.IconContainer>
      <T.Icon src={icon} />
    </T.IconContainer>
  );
}

export default function Badge({ color, backgroundColor, children, icon }) {
  return (
    <T.Container $color={color} $backgroundColor={backgroundColor}>
      {icon && <Icon icon={icon} />}
      {children}
    </T.Container>
  );
}
