/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import * as B from './Button.style';

export default function Button({ white, text, path }) {
  const navigate = useNavigate();

  if (white) {
    return (
      <B.WhiteContainer
        onClick={() => {
          navigate(`/${path}`);
        }}
      >
        {text}
      </B.WhiteContainer>
    );
  }
  return (
    <B.Container
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      {text}
    </B.Container>
  );
}
