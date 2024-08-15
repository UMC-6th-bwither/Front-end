import { useNavigate } from 'react-router-dom';
import * as T from './TextButton.style';

// eslint-disable-next-line
export default function TextButton({ path, text }) {
  const navigate = useNavigate();
  return (
    <T.Container
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      {text}
    </T.Container>
  );
}
