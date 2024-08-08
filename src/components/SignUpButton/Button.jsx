import { useNavigate } from 'react-router-dom';
import * as B from './Button.style';

// eslint-disable-next-line
export default function Button({ text, path }) {
  const navigate = useNavigate();
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
