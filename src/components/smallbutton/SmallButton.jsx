/* eslint-disable react/prop-types */
import * as B from './SmallButton.style';

export default function SmallButton({ onClick, children }) {
  return <B.SmallButton onClick={onClick}>{children}</B.SmallButton>;
}
