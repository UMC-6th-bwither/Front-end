/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as B from './Button.style';

export default function Button({ white, text, path, type }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (type !== 'submit') {
      navigate(`/${path}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (white) {
    return (
      <B.WhiteContainer type={type} onClick={handleClick}>
        {text}
      </B.WhiteContainer>
    );
  }
  return <B.Container onClick={handleClick}>{text}</B.Container>;
}
