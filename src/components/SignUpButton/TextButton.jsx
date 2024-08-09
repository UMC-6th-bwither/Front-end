import { useNavigate } from 'react-router-dom';
import * as T from './TextButton.style';

// eslint-disable-next-line
export default function TextButton({ path }) {
  const navigate = useNavigate();
  return (
    <T.Container
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      브리더로 가입하시나요?
    </T.Container>
  );
}
