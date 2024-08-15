/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import * as B from './Button.style';

export default function Button({ white, text, path, type }) {
  const navigate = useNavigate();

  if (white) {
    return (
      <B.WhiteContainer
        type={type}
        onClick={() => {
          if (type !== 'submit') {
            navigate(`/${path}`);
          }
        }}
      >
        {text}
      </B.WhiteContainer>
    );
  }
  return (
    <B.Container
      onClick={() => {
        if (type !== 'submit') {
          navigate(`/${path}`);
        }
      }}
    >
      {text}
    </B.Container>
  );
}
